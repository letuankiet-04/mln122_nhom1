import React, { forwardRef } from 'react';
import { BOOK_METADATA } from '../../data/mln122BookData';
import { BookOpen, Award, Sparkles, Compass, ShieldCheck } from 'lucide-react';

interface BookCoverProps {
  type: 'front' | 'back';
  onOpen?: () => void;
  className?: string;
}

export const BookCover = forwardRef<HTMLDivElement, BookCoverProps>(
  ({ type, onOpen, className = '' }, ref) => {
    if (type === 'front') {
      return (
        <div
          ref={ref}
          onClick={onOpen}
          data-density="hard"
          className={`book-cover-front relative w-full h-full bg-gradient-to-br from-[#1a1c23] via-[#2d2218] to-[#121316] text-[#e2c792] p-8 sm:p-12 flex flex-col justify-between border-4 border-[#8c6b39]/40 shadow-2xl cursor-pointer select-none overflow-hidden ${className}`}
        >
          {/* Subtle leather texture & gold filigree corners */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#d4af37]/60 pointer-events-none" />
          <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#d4af37]/60 pointer-events-none" />
          <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#d4af37]/60 pointer-events-none" />
          <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#d4af37]/60 pointer-events-none" />

          {/* Spine depth shadow */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/60 to-transparent pointer-events-none" />

          {/* Top metadata */}
          <div className="relative z-10 text-center space-y-1.5 pt-4">
            <div className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#c5a059] font-semibold">
              {BOOK_METADATA.faculty}
            </div>
            <div className="text-xs tracking-widest uppercase text-neutral-400 font-sans">
              {BOOK_METADATA.subject}
            </div>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-2" />
          </div>

          {/* Center Title & Crest */}
          <div className="relative z-10 text-center my-auto space-y-6">
            <div className="w-20 h-20 mx-auto rounded-full border-2 border-[#d4af37]/50 flex items-center justify-center bg-black/40 shadow-inner">
              <Compass className="w-10 h-10 text-[#e6ca85] animate-pulse" />
            </div>

            <div className="space-y-3">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#f7e7b4] via-[#e5c97a] to-[#a37930] drop-shadow-md leading-tight">
                {BOOK_METADATA.title}
              </h1>
              <p className="italic text-xs sm:text-sm text-[#c4b595] max-w-sm mx-auto leading-relaxed font-normal">
                "{BOOK_METADATA.subtitle}"
              </p>
            </div>

            <div className="text-xs font-mono text-[#a89060] tracking-wider">
              {BOOK_METADATA.curriculum}
            </div>
          </div>

          {/* Bottom open cue */}
          <div className="relative z-10 text-center pb-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 text-xs font-medium text-[#f1dd9f] hover:bg-[#d4af37]/25 transition-all">
              <BookOpen className="w-4 h-4 text-[#e5c97a]" />
              <span>Chạm hoặc lật để mở sách</span>
            </div>
            <div className="text-[10px] text-neutral-500 font-mono mt-3">
              {BOOK_METADATA.edition}
            </div>
          </div>
        </div>
      );
    }

    // Back Cover
    return (
      <div
        ref={ref}
        data-density="hard"
        className={`book-cover-back relative w-full h-full bg-gradient-to-br from-[#121316] via-[#1e1b18] to-[#0d0e10] text-[#c5a059] p-8 sm:p-12 flex flex-col justify-between border-4 border-[#8c6b39]/40 shadow-2xl select-none overflow-hidden ${className}`}
      >
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="relative z-10 text-center pt-4">
          <div className="w-12 h-12 mx-auto rounded-full border border-[#d4af37]/40 flex items-center justify-center mb-3">
            <ShieldCheck className="w-6 h-6 text-[#d4af37]" />
          </div>
          <h3 className="font-bold text-lg text-[#e6ca85] tracking-tight">TỔNG KẾT HỌC LIỆU MLN122</h3>
          <p className="text-xs text-neutral-400 mt-1">Đại học Quốc gia • Khoa Lý luận Chính trị</p>
        </div>

        <div className="relative z-10 my-auto text-xs text-neutral-300 space-y-4 max-w-xs mx-auto text-center leading-relaxed font-sans">
          <p>
            Cuốn sách số hóa này tích hợp toàn diện 12 trang giáo trình Chương 2, kết hợp các công cụ mô phỏng Cung - Cầu, máy tính lưu thông tiền tệ Karl Marx, biểu đồ nghiên cứu thực nghiệm hộ cà phê và phân tích thị trường thực tiễn.
          </p>
          <div className="p-3 rounded-xl bg-black/40 border border-[#d4af37]/30 text-[11px] font-mono text-[#d4af37]">
            Chuẩn đầu ra: Hiểu thấu đáo và vận dụng sáng tạo 4 quy luật kinh tế trong thực tiễn Việt Nam.
          </div>
        </div>

        <div className="relative z-10 text-center pb-4 text-[10px] font-mono text-neutral-500 border-t border-[#d4af37]/20 pt-4">
          ECONVERSE EDTECH PLATFORM • COPYRIGHT 2026
        </div>
      </div>
    );
  }
);

BookCover.displayName = 'BookCover';
