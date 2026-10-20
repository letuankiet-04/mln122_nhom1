import React, { useState, useMemo } from 'react';
import { useLearning } from '../../context/LearningContext';
import { BOOK_PAGES } from '../../data/mln122BookData';
import { Search, X, BookOpen, ArrowRight } from 'lucide-react';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, setCurrentBookPage } = useLearning();
  const [query, setQuery] = useState('');

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();

    return BOOK_PAGES.filter((page) => {
      const matchTitle = page.title.toLowerCase().includes(q);
      const matchSubtitle = page.subtitle?.toLowerCase().includes(q);
      const matchContent = page.contentMarkdown.toLowerCase().includes(q);
      const matchCallout = page.callout?.content.toLowerCase().includes(q);
      return matchTitle || matchSubtitle || matchContent || matchCallout;
    });
  }, [query]);

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 sm:pt-24 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-2xl bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-neutral-200 dark:border-neutral-800 flex items-center gap-3 bg-neutral-50 dark:bg-neutral-950">
          <Search className="w-5 h-5 text-amber-500 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            placeholder="Tìm kiếm: Cà phê, Shopee, M = (P*Q)/V, cung cầu, hao phí..."
            className="flex-1 bg-transparent text-sm sm:text-base outline-none text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 font-sans"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200"
            >
              Xóa
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-1 rounded-full text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-4 overflow-y-auto flex-1 space-y-2 text-xs">
          {query.trim() === '' ? (
            <div className="text-center py-12 text-neutral-400">
              <Search className="w-8 h-8 mx-auto mb-2 opacity-30" />
              Nhập từ khóa để tra cứu toàn diện 12 trang giáo trình MLN122.
            </div>
          ) : searchResults.length === 0 ? (
            <div className="text-center py-12 text-neutral-400">
              Không tìm thấy kết quả nào phù hợp với "{query}".
            </div>
          ) : (
            searchResults.map((page) => (
              <button
                key={page.pageNumber}
                onClick={() => {
                  setCurrentBookPage(page.pageNumber);
                  setIsSearchOpen(false);
                }}
                className="w-full p-3.5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-800/40 hover:border-amber-500/50 hover:bg-white dark:hover:bg-neutral-800 text-left transition-all group"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-bold text-sm text-neutral-900 dark:text-neutral-100 group-hover:text-amber-600 transition-colors tracking-tight">
                    {page.title}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-700 dark:text-amber-300">
                      PDF Trang {page.sourcePdfPage}
                    </span>
                    <span className="font-mono text-[10px] text-neutral-400">
                      Sách Trang {page.pageNumber}
                    </span>
                  </div>
                </div>

                <p className="text-[11px] text-neutral-500 dark:text-neutral-400 line-clamp-2 leading-relaxed">
                  {page.contentMarkdown.replace(/[#*`$\\]/g, '').slice(0, 140)}...
                </p>

                <div className="mt-2 flex items-center justify-between text-[10px] text-amber-600 dark:text-amber-400 font-semibold">
                  <span>Chương {page.chapterId}: {page.chapterTitle.split(':')[1]}</span>
                  <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Xem trang <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
