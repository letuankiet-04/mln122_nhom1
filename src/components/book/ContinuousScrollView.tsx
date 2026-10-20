import React from 'react';
import { useLearning } from '../../context/LearningContext';
import { BOOK_PAGES, CHAPTERS } from '../../data/mln122BookData';
import { BookPageRenderer } from './BookPageRenderer';
import { BookOpen, List, Bookmark, ArrowUp } from 'lucide-react';

export const ContinuousScrollView: React.FC = () => {
  const { currentBookPage, setCurrentBookPage } = useLearning();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-6 px-4">
      {/* Introduction banner */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-neutral-900/10 to-amber-500/10 border border-amber-500/20 mb-8 flex items-center justify-between">
        <div>
          <h3 className="font-bold text-sm sm:text-base text-amber-950 dark:text-amber-300 tracking-tight">
            Chế độ Đọc Cuộn Tuyến Tính (Continuous Scroll Mode)
          </h3>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
            Xem toàn bộ 16 trang sách liên tục, tự do cuộn mà không giới hạn chiều cao khung hình
          </p>
        </div>
      </div>

      {/* Pages stream */}
      <div className="space-y-12">
        {BOOK_PAGES.map((page) => (
          <div 
            key={page.pageNumber} 
            id={`page-${page.pageNumber}`}
            className="rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-xl overflow-hidden"
          >
            <BookPageRenderer page={page} />
          </div>
        ))}
      </div>

      {/* Floating scroll to top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-20 right-6 z-30 p-3 rounded-full bg-amber-600 hover:bg-amber-500 text-white shadow-xl transition-all hover:scale-110"
        title="Cuộn lên đầu trang"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
};
