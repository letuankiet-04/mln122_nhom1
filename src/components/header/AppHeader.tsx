import React from 'react';
import { useLearning, ViewMode } from '../../context/LearningContext';
import { useTheme } from '../../context/ThemeContext';
import { BOOK_METADATA, CHAPTERS } from '../../data/mln122BookData';
import {
  BookOpen,
  FileText,
  ScrollText,
  ShieldCheck,
  Award,
  Sparkles,
  Bot,
  List,
  Search,
  Sun,
  Moon
} from 'lucide-react';

export const AppHeader: React.FC = () => {
  const {
    viewMode,
    setViewMode,
    readingProgressPercent,
    setIsCoverageReportOpen,
    setIsTableOfContentsOpen,
    setIsSearchOpen,
    goToChapter,
    currentBookPage
  } = useLearning();

  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-30 w-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand & Subject Badge */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-600 via-amber-500 to-yellow-400 p-0.5 shadow-md flex items-center justify-center">
            <div className="w-full h-full bg-neutral-900 rounded-[14px] flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-amber-400" />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold tracking-tight text-base sm:text-lg text-neutral-900 dark:text-neutral-50">
                ECONVERSE
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30">
                MLN122
              </span>
            </div>
            <p className="hidden sm:block text-[11px] text-neutral-500 dark:text-neutral-400 italic truncate max-w-xs font-normal">
              Kinh tế hàng hóa & Bốn quy luật cơ bản
            </p>
          </div>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center bg-neutral-100 dark:bg-neutral-800 p-1 rounded-2xl border border-neutral-200 dark:border-neutral-700">
          <button
            onClick={() => setViewMode('3d-book')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              viewMode === '3d-book'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'text-neutral-600 dark:text-neutral-300 hover:text-amber-600'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Sách 3D Lật Trang</span>
            <span className="md:hidden">3D</span>
          </button>

          <button
            onClick={() => setViewMode('original-doc')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              viewMode === 'original-doc'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'text-neutral-600 dark:text-neutral-300 hover:text-amber-600'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Tài Liệu Gốc 12 Trang</span>
            <span className="md:hidden">Bản gốc</span>
          </button>

          <button
            onClick={() => setViewMode('scroll-read')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              viewMode === 'scroll-read'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'text-neutral-600 dark:text-neutral-300 hover:text-amber-600'
            }`}
          >
            <ScrollText className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Đọc Cuộn</span>
            <span className="md:hidden">Cuộn</span>
          </button>
        </div>

        {/* Right Actions: Coverage matrix, Progress & Theme */}
        <div className="flex items-center gap-2">
          {/* Content Coverage Badge Button */}
          <button
            onClick={() => setIsCoverageReportOpen(true)}
            className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 text-xs font-semibold transition-colors"
            title="Xem báo cáo đối chiếu 12 trang PDF"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>100% Khớp PDF</span>
          </button>

          {/* Reading progress badge */}
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-2.5 py-1.5 rounded-xl">
            <span>Tiến độ:</span>
            <span className="font-bold text-amber-600 dark:text-amber-400">
              {readingProgressPercent}%
            </span>
          </div>

          {/* Theme switch */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            title="Đổi màu giao diện"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-neutral-700" />}
          </button>
        </div>
      </div>
    </header>
  );
};
