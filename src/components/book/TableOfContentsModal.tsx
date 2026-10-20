import React from 'react';
import { useLearning } from '../../context/LearningContext';
import { CHAPTERS, BOOK_PAGES } from '../../data/mln122BookData';
import { List, X, BookOpen, CheckCircle, ArrowRight, Bookmark } from 'lucide-react';

export const TableOfContentsModal: React.FC = () => {
  const {
    isTableOfContentsOpen,
    setIsTableOfContentsOpen,
    goToChapter,
    currentBookPage,
    setCurrentBookPage,
    readPages,
    bookmarks
  } = useLearning();

  if (!isTableOfContentsOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-3xl bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between bg-neutral-50 dark:bg-neutral-950">
          <div className="flex items-center gap-2">
            <List className="w-5 h-5 text-amber-500" />
            <div>
              <h3 className="font-bold text-base text-neutral-900 dark:text-neutral-100 tracking-tight">
                Mục Lục Toàn Cuốn Sách (Table of Contents)
              </h3>
              <p className="text-xs text-neutral-400">
                7 Chương • 16 Trang tương tác • 12 Trang tài liệu gốc
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsTableOfContentsOpen(false)}
            className="p-1 rounded-full text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chapters list */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          {CHAPTERS.map((chapter) => {
            const pagesInChapter = BOOK_PAGES.filter((p) => p.chapterId === chapter.id);
            const chapterReadCount = pagesInChapter.filter((p) => readPages.includes(p.pageNumber)).length;
            const isChapterComplete = chapterReadCount === pagesInChapter.length;

            return (
              <div
                key={chapter.id}
                className="rounded-2xl border border-neutral-200 dark:border-neutral-800/80 bg-neutral-50/60 dark:bg-neutral-800/40 p-4 hover:border-amber-500/40 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-amber-500/15 text-amber-800 dark:text-amber-300">
                      {chapter.sourcePages}
                    </span>
                    <h4 className="font-bold text-sm sm:text-base text-neutral-900 dark:text-neutral-100 tracking-tight">
                      {chapter.title}
                    </h4>
                  </div>

                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-neutral-400">
                      Đã đọc {chapterReadCount}/{pagesInChapter.length} trang
                    </span>
                    {isChapterComplete && (
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    )}
                  </div>
                </div>

                <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3">
                  {chapter.description}
                </p>

                {/* Sub pages grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {pagesInChapter.map((page) => {
                    const isCurrent = currentBookPage === page.pageNumber;
                    const isRead = readPages.includes(page.pageNumber);
                    const hasBm = bookmarks.some((b) => b.pageNumber === page.pageNumber);

                    return (
                      <button
                        key={page.pageNumber}
                        onClick={() => {
                          setCurrentBookPage(page.pageNumber);
                          setIsTableOfContentsOpen(false);
                        }}
                        className={`p-2.5 rounded-xl border text-left text-xs transition-all flex items-center justify-between ${
                          isCurrent
                            ? 'bg-amber-600 text-white border-amber-600 font-semibold shadow-sm'
                            : 'bg-white dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-200 border-neutral-200 dark:border-neutral-700/80 hover:border-amber-500/40'
                        }`}
                      >
                        <div className="flex items-center gap-2 truncate">
                          <span className="font-mono text-[10px] opacity-75 shrink-0">
                            Trang {page.pageNumber}
                          </span>
                          <span className="truncate">{page.title}</span>
                        </div>
                        <div className="flex items-center gap-1 shrink-0 ml-2">
                          {hasBm && <Bookmark className="w-3.5 h-3.5 text-amber-400" />}
                          <ArrowRight className="w-3.5 h-3.5 opacity-60" />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
