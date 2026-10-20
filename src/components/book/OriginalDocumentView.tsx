import React, { useState } from 'react';
import { useLearning } from '../../context/LearningContext';
import { BOOK_PAGES, CHAPTERS } from '../../data/mln122BookData';
import { FileText, ChevronLeft, ChevronRight, Download, Printer, ZoomIn, ZoomOut, CheckCircle2, Bookmark } from 'lucide-react';
import { CoffeeStudyChart } from '../interactive/CoffeeStudyChart';
import { TetMarketChart } from '../interactive/TetMarketChart';
import { EcommerceMarketAndGame } from '../interactive/EcommerceMarketAndGame';
import { MoneyCirculationCalculator } from '../interactive/MoneyCirculationCalculator';
import { FourLawsMindmap } from '../interactive/FourLawsMindmap';
import { ReferencesList } from '../interactive/ReferencesList';
import { MarkdownRenderer } from '../ui/MarkdownRenderer';

export const OriginalDocumentView: React.FC = () => {
  const { currentBookPage, setCurrentBookPage } = useLearning();
  const [selectedPdfPage, setSelectedPdfPage] = useState<number>(1);
  const [zoom, setZoom] = useState<number>(100);

  // Group pages by sourcePdfPage (1 to 12)
  const matchingPages = BOOK_PAGES.filter(p => p.sourcePdfPage === selectedPdfPage);

  return (
    <div className="w-full max-w-5xl mx-auto py-6 px-4">
      {/* Top Document Bar */}
      <div className="bg-neutral-800 text-neutral-100 rounded-2xl p-4 mb-6 shadow-lg flex flex-wrap items-center justify-between gap-4 border border-neutral-700">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-serif font-bold text-sm sm:text-base flex items-center gap-2">
              Chế độ Tài liệu Gốc (Original Document View - 12 Trang)
            </h3>
            <p className="text-xs text-neutral-400">
              MLN122 - CHAP 2 • Giữ nguyên bố cục và dữ liệu học thuật gốc
            </p>
          </div>
        </div>

        {/* Page selector pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-1">
          {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              onClick={() => setSelectedPdfPage(num)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                selectedPdfPage === num
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'bg-neutral-700/60 hover:bg-neutral-700 text-neutral-300'
              }`}
            >
              Trang {num}
            </button>
          ))}
        </div>

        {/* Zoom controls */}
        <div className="flex items-center gap-2 text-xs">
          <button
            onClick={() => setZoom(z => Math.max(70, z - 10))}
            className="p-1.5 rounded-lg bg-neutral-700 hover:bg-neutral-600"
            title="Thu nhỏ"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <span className="font-mono text-neutral-300">{zoom}%</span>
          <button
            onClick={() => setZoom(z => Math.min(140, z + 10))}
            className="p-1.5 rounded-lg bg-neutral-700 hover:bg-neutral-600"
            title="Phóng to"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* The Printable / PDF A4 Sheet Facsimile (Authentic Paper) */}
      <div 
        className="mx-auto transition-transform duration-200"
        style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'top center' }}
      >
        <div className="bg-[#ffffff] text-[#1f2937] p-8 sm:p-14 rounded-2xl shadow-2xl border border-neutral-300 relative min-h-[900px] overflow-hidden">
          {/* Subtle Document Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.03] rotate-[-25deg]">
            <span className="text-7xl sm:text-9xl font-serif font-black tracking-widest text-black">
              MLN122 • KINH TẾ CHÍNH TRỊ
            </span>
          </div>

          {/* Academic Header */}
          <div className="border-b-2 border-neutral-800 pb-4 mb-6 flex justify-between items-start text-xs font-serif">
            <div>
              <div className="font-bold uppercase tracking-wider text-neutral-900">
                BỘ GIÁO DỤC VÀ ĐÀO TẠO — HỌC PHẦN MLN122
              </div>
              <div className="text-neutral-600 italic">
                Giáo trình Kinh tế Chính trị Mác – Lênin (Bậc Đại học)
              </div>
            </div>
            <div className="text-right">
              <div className="font-mono font-bold text-amber-700">TÀI LIỆU GỐC: TRANG {selectedPdfPage} / 12</div>
              <div className="text-[10px] text-neutral-500 font-sans">Chương II: Kinh tế hàng hóa & 4 Quy luật</div>
            </div>
          </div>

          {/* Render Sections mapped to this PDF page */}
          <div className="space-y-6">
            {matchingPages.map((page) => (
              <div key={page.pageNumber} className="border-b border-neutral-200 pb-6 last:border-b-0">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-900">
                    Mục {page.chapterTitle}
                  </span>
                  <button
                    onClick={() => setCurrentBookPage(page.pageNumber)}
                    className="text-xs text-amber-700 hover:underline flex items-center gap-1"
                  >
                    Mở trong Sách 3D (Trang {page.pageNumber}) →
                  </button>
                </div>

                <h3 className="text-xl font-bold text-neutral-900 mb-2 tracking-tight">
                  {page.title}
                </h3>
                {page.subtitle && (
                  <p className="text-sm italic text-neutral-600 mb-4 font-normal">{page.subtitle}</p>
                )}

                <div className="my-3">
                  <MarkdownRenderer content={page.contentMarkdown} />
                </div>

                {/* Inline components if any */}
                {page.interactiveComponent === 'coffee_table_and_chart' && <CoffeeStudyChart />}
                {page.interactiveComponent === 'tet_market_data' && <TetMarketChart />}
                {page.interactiveComponent === 'ecommerce_market_and_game' && <EcommerceMarketAndGame />}
                {page.interactiveComponent === 'money_circulation_calculator' && <MoneyCirculationCalculator />}
                {page.interactiveComponent === 'four_laws_mindmap' && <FourLawsMindmap />}
                {page.interactiveComponent === 'references_list' && <ReferencesList />}
              </div>
            ))}
          </div>

          {/* Academic Footer */}
          <div className="mt-12 pt-4 border-t border-neutral-300 flex justify-between items-center text-xs text-neutral-500 font-serif">
            <div>MLN122 - CHAP 2 (1)(1).pdf • Nguồn chính thức</div>
            <div className="font-mono font-bold text-neutral-800">Trang {selectedPdfPage}</div>
          </div>
        </div>
      </div>

      {/* Pagination Footer */}
      <div className="flex items-center justify-between mt-8 max-w-md mx-auto">
        <button
          onClick={() => setSelectedPdfPage(p => Math.max(1, p - 1))}
          disabled={selectedPdfPage <= 1}
          className="px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-medium disabled:opacity-30 flex items-center gap-1.5 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> Trang PDF trước
        </button>
        <span className="text-xs font-mono font-bold text-neutral-400">
          {selectedPdfPage} / 12 trang PDF
        </span>
        <button
          onClick={() => setSelectedPdfPage(p => Math.min(12, p + 1))}
          disabled={selectedPdfPage >= 12}
          className="px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-medium disabled:opacity-30 flex items-center gap-1.5 transition-colors"
        >
          Trang PDF sau <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
