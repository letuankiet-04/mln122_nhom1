import React, { forwardRef } from 'react';
import { MarkdownRenderer } from '../ui/MarkdownRenderer';
import { BookPageData } from '../../types/book';
import { useLearning } from '../../context/LearningContext';
import { Bookmark, BookmarkCheck, FileText, Sparkles, Scale, BookOpen, Quote, AlertTriangle } from 'lucide-react';
import { CoffeeStudyChart } from '../interactive/CoffeeStudyChart';
import { TetMarketChart } from '../interactive/TetMarketChart';
import { SupplyDemandSimulator } from '../interactive/SupplyDemandSimulator';
import { EcommerceMarketAndGame } from '../interactive/EcommerceMarketAndGame';
import { MoneyCirculationCalculator } from '../interactive/MoneyCirculationCalculator';
import { FourLawsMindmap } from '../interactive/FourLawsMindmap';
import { ReferencesList } from '../interactive/ReferencesList';

interface BookPageRendererProps {
  page: BookPageData;
  isCover?: boolean;
  className?: string;
}

export const BookPageRenderer = forwardRef<HTMLDivElement, BookPageRendererProps>(
  ({ page, isCover = false, className = '' }, ref) => {
    const { isBookmarked, toggleBookmark, setIsNotesDrawerOpen } = useLearning();
    const bookmarked = isBookmarked(page.pageNumber);

    return (
      <div
        ref={ref}
        className={`book-page relative w-full h-full bg-[#fdfbf7] dark:bg-[#18181b] text-neutral-800 dark:text-neutral-100 flex flex-col justify-between overflow-y-auto selection:bg-amber-500/20 shadow-md ${className}`}
        data-page-number={page.pageNumber}
      >
        {/* Paper texture overlay */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

        {/* Top Academic Header */}
        <div className="relative z-10 px-6 sm:px-10 pt-6 pb-3 border-b border-neutral-200/80 dark:border-neutral-800 flex items-center justify-between text-[11px] text-neutral-500 dark:text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wider">
              {page.chapterTitle.split(':')[0]}
            </span>
            <span>•</span>
            <span className="truncate max-w-[200px] sm:max-w-xs">{page.title}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-500/20">
              PDF Trang {page.sourcePdfPage}
            </span>
            <button
              onClick={() => toggleBookmark(page.pageNumber)}
              className="p-1 text-neutral-400 hover:text-amber-600 transition-colors"
              title={bookmarked ? 'Bỏ đánh dấu' : 'Đánh dấu trang này'}
            >
              {bookmarked ? (
                <BookmarkCheck className="w-4 h-4 text-amber-600" />
              ) : (
                <Bookmark className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="relative z-10 px-6 sm:px-10 py-5 flex-1 overflow-y-auto font-sans leading-relaxed">
          {/* Page Title & Subtitle */}
          <div className="mb-5 pb-3 border-b border-neutral-100 dark:border-neutral-800/80">
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-50 tracking-tight leading-snug">
              {page.title}
            </h2>
            {page.subtitle && (
              <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1 italic font-normal">
                {page.subtitle}
              </p>
            )}
          </div>

          {/* Markdown Content */}
          <div className="my-2">
            <MarkdownRenderer content={page.contentMarkdown} />
          </div>

          {/* Interactive Component Render */}
          {page.interactiveComponent === 'coffee_table_and_chart' && <CoffeeStudyChart />}
          {page.interactiveComponent === 'tet_market_data' && <TetMarketChart />}
          {page.interactiveComponent === 'supply_demand_simulator' && <SupplyDemandSimulator />}
          {page.interactiveComponent === 'ecommerce_market_and_game' && <EcommerceMarketAndGame />}
          {page.interactiveComponent === 'money_circulation_calculator' && <MoneyCirculationCalculator />}
          {page.interactiveComponent === 'four_laws_mindmap' && <FourLawsMindmap />}
          {page.interactiveComponent === 'references_list' && <ReferencesList />}

          {/* Callout box */}
          {page.callout && (
            <div className={`mt-5 p-4 rounded-xl border text-xs sm:text-sm leading-relaxed ${
              page.callout.type === 'definition'
                ? 'bg-amber-500/10 border-amber-500/30 text-amber-950 dark:text-amber-200'
                : page.callout.type === 'law'
                ? 'bg-blue-500/10 border-blue-500/30 text-blue-950 dark:text-blue-200'
                : page.callout.type === 'academic_note'
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-950 dark:text-emerald-200'
                : 'bg-purple-500/10 border-purple-500/30 text-purple-950 dark:text-purple-200'
            }`}>
              <div className="font-bold flex items-center gap-1.5 mb-1 text-xs uppercase tracking-wider opacity-90">
                {page.callout.type === 'definition' && <Quote className="w-3.5 h-3.5" />}
                {page.callout.type === 'law' && <Scale className="w-3.5 h-3.5" />}
                {page.callout.type === 'academic_note' && <AlertTriangle className="w-3.5 h-3.5" />}
                {page.callout.title}
              </div>
              <p>{page.callout.content}</p>
            </div>
          )}

          {/* Key Takeaway box */}
          {page.keyTakeaway && (
            <div className="mt-4 p-3 rounded-lg bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700/60 text-xs flex items-start gap-2 text-neutral-700 dark:text-neutral-300">
              <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-neutral-900 dark:text-neutral-100">Điểm cốt lõi: </span>
                {page.keyTakeaway}
              </div>
            </div>
          )}
        </div>

        {/* Bottom Page Footer */}
        <div className="relative z-10 px-6 sm:px-10 py-3 border-t border-neutral-200/80 dark:border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsNotesDrawerOpen(true)}
              className="hover:text-amber-600 transition-colors flex items-center gap-1"
            >
              <FileText className="w-3.5 h-3.5" /> Ghi chú
            </button>
            <span className="text-neutral-300 dark:text-neutral-700">•</span>
            <span className="hidden sm:inline italic text-[11px]">Học phần MLN122 — Kinh tế chính trị Mác – Lênin</span>
          </div>

          <div className="font-mono font-bold text-xs text-neutral-700 dark:text-neutral-300">
            {page.pageNumber}
          </div>
        </div>
      </div>
    );
  }
);

BookPageRenderer.displayName = 'BookPageRenderer';
