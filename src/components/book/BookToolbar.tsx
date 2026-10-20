import React from 'react';
import { useLearning } from '../../context/LearningContext';
import { useTheme } from '../../context/ThemeContext';
import { BOOK_PAGES } from '../../data/mln122BookData';
import {
  ChevronLeft,
  ChevronRight,
  List,
  Search,
  Bookmark,
  BookmarkCheck,
  FileText,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  Sun,
  Moon,
  Laptop,
  HelpCircle,
  Award,
  Sparkles,
  Bot,
  ShieldCheck,
  BookOpen
} from 'lucide-react';

export const BookToolbar: React.FC = () => {
  const {
    currentBookPage,
    setCurrentBookPage,
    goToNextPage,
    goToPrevPage,
    bookmarks,
    toggleBookmark,
    isBookmarked,
    soundEnabled,
    toggleSound,
    viewMode,
    setViewMode,
    readingProgressPercent,
    setIsTableOfContentsOpen,
    setIsSearchOpen,
    setIsNotesDrawerOpen,
    setIsQuizOpen,
    setIsFlashcardsOpen,
    setIsAITutorOpen,
    setIsCoverageReportOpen
  } = useLearning();

  const { theme, toggleTheme } = useTheme();
  const bookmarked = isBookmarked(currentBookPage);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  return (
    <footer className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-4xl bg-neutral-900/90 dark:bg-neutral-950/90 text-neutral-200 border border-neutral-700/60 rounded-2xl p-2 sm:p-2.5 backdrop-blur-xl shadow-2xl flex flex-col gap-2">
      {/* Progress Bar & Quick Navigation Row */}
      <div className="flex items-center justify-between gap-3 px-2 text-xs">
        {/* Previous page */}
        <button
          onClick={goToPrevPage}
          disabled={currentBookPage <= 1}
          className="p-1.5 rounded-lg hover:bg-neutral-800 disabled:opacity-30 transition-colors flex items-center gap-1 font-medium"
          title="Trang trước"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Trước</span>
        </button>

        {/* Page progress slider */}
        <div className="flex-1 flex items-center gap-2 max-w-md">
          <input
            type="range"
            min="1"
            max={BOOK_PAGES.length}
            value={currentBookPage}
            onChange={(e) => setCurrentBookPage(parseInt(e.target.value, 10))}
            className="w-full accent-amber-500 cursor-pointer h-1.5 bg-neutral-800 rounded-lg"
          />
          <span className="font-mono text-[11px] whitespace-nowrap text-amber-400 font-bold shrink-0">
            {currentBookPage} / {BOOK_PAGES.length}
          </span>
        </div>

        {/* Next page */}
        <button
          onClick={goToNextPage}
          disabled={currentBookPage >= BOOK_PAGES.length}
          className="p-1.5 rounded-lg hover:bg-neutral-800 disabled:opacity-30 transition-colors flex items-center gap-1 font-medium"
          title="Trang sau"
        >
          <span className="hidden sm:inline">Tiếp</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Main Buttons Bar */}
      <div className="flex items-center justify-between border-t border-neutral-800 pt-1.5 px-2">
        {/* Left: Study & Navigation tools */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => setIsTableOfContentsOpen(true)}
            className="p-2 rounded-xl hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-medium"
            title="Mục lục sách"
          >
            <List className="w-4 h-4 text-amber-400" />
            <span className="hidden md:inline">Mục lục</span>
          </button>

          <button
            onClick={() => setIsSearchOpen(true)}
            className="p-2 rounded-xl hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-medium"
            title="Tìm kiếm từ khóa"
          >
            <Search className="w-4 h-4 text-blue-400" />
            <span className="hidden md:inline">Tìm kiếm</span>
          </button>

          <button
            onClick={() => toggleBookmark(currentBookPage)}
            className={`p-2 rounded-xl hover:bg-neutral-800 transition-colors flex items-center gap-1.5 text-xs font-medium ${
              bookmarked ? 'text-amber-400' : 'text-neutral-300 hover:text-white'
            }`}
            title="Đánh dấu trang"
          >
            {bookmarked ? <BookmarkCheck className="w-4 h-4 text-amber-400" /> : <Bookmark className="w-4 h-4" />}
            <span className="hidden md:inline">Đánh dấu</span>
          </button>

          <button
            onClick={() => setIsNotesDrawerOpen(true)}
            className="p-2 rounded-xl hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-medium"
            title="Sổ tay ghi chú"
          >
            <FileText className="w-4 h-4 text-purple-400" />
            <span className="hidden md:inline">Ghi chú</span>
          </button>
        </div>

        {/* Center: Educational Modules */}
        <div className="flex items-center gap-1 bg-neutral-800/60 p-0.5 rounded-xl border border-neutral-700/60">
          <button
            onClick={() => setIsQuizOpen(true)}
            className="px-2.5 py-1.5 rounded-lg hover:bg-amber-500/20 text-amber-300 hover:text-amber-200 transition-colors flex items-center gap-1 text-xs font-semibold"
            title="Làm trắc nghiệm ôn tập"
          >
            <Award className="w-3.5 h-3.5" />
            <span>Quiz</span>
          </button>

          <button
            onClick={() => setIsFlashcardsOpen(true)}
            className="px-2.5 py-1.5 rounded-lg hover:bg-emerald-500/20 text-emerald-300 hover:text-emerald-200 transition-colors flex items-center gap-1 text-xs font-semibold"
            title="Lật thẻ ghi nhớ"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Flashcards</span>
          </button>

          <button
            onClick={() => setIsAITutorOpen(true)}
            className="px-2.5 py-1.5 rounded-lg hover:bg-purple-500/20 text-purple-300 hover:text-purple-200 transition-colors flex items-center gap-1 text-xs font-semibold"
            title="Trợ giảng AI MLN122"
          >
            <Bot className="w-3.5 h-3.5" />
            <span>AI Tutor</span>
          </button>
        </div>

        {/* Right: Sound, Theme, Fullscreen */}
        <div className="flex items-center gap-1">
          <button
            onClick={toggleSound}
            className="p-2 rounded-xl hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors"
            title={soundEnabled ? 'Tắt âm thanh lật trang' : 'Bật âm thanh lật trang'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4 opacity-50" />}
          </button>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors"
            title="Đổi giao diện Sáng / Tối"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-blue-400" />}
          </button>

          <button
            onClick={toggleFullScreen}
            className="p-2 rounded-xl hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors hidden sm:block"
            title="Toàn màn hình"
          >
            <Maximize className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
