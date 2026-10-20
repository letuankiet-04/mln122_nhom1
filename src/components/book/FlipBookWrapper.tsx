import React, { useRef, useEffect, useState, useCallback, Component, ErrorInfo } from 'react';
// @ts-ignore
import HTMLFlipBook from 'react-pageflip';
import { BOOK_PAGES } from '../../data/mln122BookData';
import { useLearning } from '../../context/LearningContext';
import { BookCover } from './BookCover';
import { BookPageRenderer } from './BookPageRenderer';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, AlertTriangle, ScrollText } from 'lucide-react';
import { soundManager } from '../../utils/sound';

const FlipBookComponent = HTMLFlipBook as unknown as React.ComponentType<any>;

// Resilient Error Boundary for 3D Book canvas/rendering
interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class BookErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('FlipBook rendering error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export const FlipBookWrapper: React.FC = () => {
  const { currentBookPage, setCurrentBookPage, goToNextPage, goToPrevPage, setViewMode } = useLearning();
  const bookRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Safe positive dimensions defaults
  const [dimensions, setDimensions] = useState({ width: 480, height: 680 });
  const [isMobile, setIsMobile] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isMounted, setIsMounted] = useState(false);

  // Measure container and adapt book size safely
  const updateDimensions = useCallback(() => {
    const winWidth = typeof window !== 'undefined' ? window.innerWidth : 1024;
    const winHeight = typeof window !== 'undefined' ? window.innerHeight : 768;

    const containerWidth = containerRef.current?.clientWidth || winWidth;
    const containerHeight = containerRef.current?.clientHeight || (winHeight - 140);

    const mobile = winWidth < 800 || containerWidth < 800;
    setIsMobile(mobile);

    let calculatedWidth = 480;
    let calculatedHeight = 680;

    if (mobile) {
      // Single page view on mobile: guaranteed bounds [300, 480]
      const rawWidth = Math.min(containerWidth - 24, 480);
      calculatedWidth = Math.max(300, rawWidth);
      
      const rawHeight = Math.min(containerHeight - 60, Math.floor(calculatedWidth * 1.42));
      calculatedHeight = Math.max(450, rawHeight);
    } else {
      // 2-page spread on desktop: guaranteed bounds [340, 560]
      const maxSpreadWidth = containerWidth - 48;
      const singlePageWidth = Math.min(Math.floor(maxSpreadWidth / 2), 560);
      calculatedWidth = Math.max(340, singlePageWidth);

      const rawHeight = Math.min(containerHeight - 80, Math.floor(calculatedWidth * 1.42));
      calculatedHeight = Math.max(480, rawHeight);
    }

    setDimensions({ width: calculatedWidth, height: calculatedHeight });
  }, []);

  useEffect(() => {
    setIsMounted(true);
    updateDimensions();

    const handleResize = () => {
      updateDimensions();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [updateDimensions]);

  // Synchronize internal pageflip state when external currentBookPage changes
  useEffect(() => {
    if (bookRef.current && bookRef.current.pageFlip) {
      try {
        const pageFlip = bookRef.current.pageFlip();
        if (pageFlip) {
          const currentPageIndex = pageFlip.getCurrentPageIndex();
          const targetIndex = currentBookPage - 1;
          if (currentPageIndex !== targetIndex) {
            pageFlip.turnToPage(targetIndex);
          }
        }
      } catch {
        // ignore
      }
    }
  }, [currentBookPage]);

  const onFlip = useCallback((e: any) => {
    const pageIndex = e.data;
    const pageNum = pageIndex + 1;
    setCurrentBookPage(pageNum, false);
    soundManager.playFlip();
  }, [setCurrentBookPage]);

  // Fallback UI in case of any 3D WebGL / Canvas / Library issue
  const fallbackUI = (
    <div className="flex flex-col items-center justify-center p-8 text-center max-w-md mx-auto my-12 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-xl">
      <AlertTriangle className="w-10 h-10 text-amber-500 mb-3" />
      <h3 className="font-serif font-bold text-base text-neutral-900 dark:text-neutral-100 mb-2">
        Chuyển Sang Chế Độ Đọc Cuộn Tương Tác
      </h3>
      <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-4 leading-relaxed">
        Kích thước màn hình đang được tối ưu hóa. Bạn có thể tiếp tục học tập mượt mà với Chế độ Đọc Cuộn Tuyến tính hoặc Chế độ Tài liệu Gốc.
      </p>
      <button
        onClick={() => setViewMode('scroll-read')}
        className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold flex items-center gap-2 transition-colors shadow-sm"
      >
        <ScrollText className="w-4 h-4" /> Mở Chế độ Đọc Cuộn
      </button>
    </div>
  );

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[calc(100vh-140px)] min-h-[580px] flex items-center justify-center p-2 sm:p-6 overflow-hidden select-none"
    >
      <BookErrorBoundary fallback={fallbackUI}>
        {isMounted && dimensions.width > 0 && dimensions.height > 0 ? (
          <div 
            className="relative transition-transform duration-200 ease-out flex items-center justify-center shadow-2xl rounded-2xl"
            style={zoomLevel !== 1 ? { transform: `scale(${zoomLevel})`, transformOrigin: 'center center' } : undefined}
          >
            <FlipBookComponent
              ref={bookRef}
              key={`book-${dimensions.width}-${dimensions.height}-${isMobile ? 'm' : 'd'}`}
              width={dimensions.width}
              height={dimensions.height}
              size="fixed"
              minWidth={300}
              maxWidth={650}
              minHeight={450}
              maxHeight={900}
              maxShadowOpacity={0.6}
              showCover={true}
              mobileScrollSupport={true}
              onFlip={onFlip}
              className="shadow-2xl rounded-r-lg"
              drawShadow={true}
              flippingTime={600}
              usePortrait={isMobile}
              startPage={Math.max(0, currentBookPage - 1)}
            >
              {/* Front Cover */}
              <BookCover type="front" onOpen={goToNextPage} />

              {/* Book Content Pages (1 to 16) */}
              {BOOK_PAGES.map((page) => (
                <BookPageRenderer key={page.pageNumber} page={page} />
              ))}

              {/* Back Cover */}
              <BookCover type="back" />
            </FlipBookComponent>
          </div>
        ) : (
          <div className="flex items-center justify-center text-xs text-neutral-400">
            Đang tải trang sách 3D...
          </div>
        )}
      </BookErrorBoundary>

      {/* Floating Side Turn Arrows */}
      <button
        onClick={goToPrevPage}
        disabled={currentBookPage <= 1}
        className={`absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md shadow-lg transition-all ${
          currentBookPage <= 1 ? 'opacity-20 cursor-not-allowed' : 'opacity-80 hover:opacity-100 hover:scale-110'
        }`}
        title="Trang trước (Phím Mũi tên trái)"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={goToNextPage}
        disabled={currentBookPage >= BOOK_PAGES.length}
        className={`absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md shadow-lg transition-all ${
          currentBookPage >= BOOK_PAGES.length ? 'opacity-20 cursor-not-allowed' : 'opacity-80 hover:opacity-100 hover:scale-110'
        }`}
        title="Trang tiếp (Phím Mũi tên phải)"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Floating Zoom Controls */}
      <div className="absolute top-4 right-4 z-20 hidden sm:flex items-center gap-1.5 bg-neutral-900/80 border border-neutral-700/60 p-1.5 rounded-xl backdrop-blur-md text-xs text-neutral-300">
        <button
          onClick={() => setZoomLevel((z) => Math.max(0.75, z - 0.1))}
          className="p-1 hover:text-white hover:bg-neutral-800 rounded transition-colors"
          title="Thu nhỏ"
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        <span className="font-mono text-[11px] px-1">{Math.round(zoomLevel * 100)}%</span>
        <button
          onClick={() => setZoomLevel((z) => Math.min(1.4, z + 0.1))}
          className="p-1 hover:text-white hover:bg-neutral-800 rounded transition-colors"
          title="Phóng to"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
