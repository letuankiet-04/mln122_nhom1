import React, { useState } from 'react';
import { useLearning } from '../../context/LearningContext';
import { FLASHCARDS_DATA } from '../../data/flashcardsData';
import { RotateCw, ChevronLeft, ChevronRight, X, Sparkles, BookOpen, Check, RefreshCw } from 'lucide-react';

export const FlashcardsModal: React.FC = () => {
  const { isFlashcardsOpen, setIsFlashcardsOpen } = useLearning();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredCards, setMasteredCards] = useState<string[]>([]);

  if (!isFlashcardsOpen) return null;

  const currentCard = FLASHCARDS_DATA[currentIndex];
  const isMastered = masteredCards.includes(currentCard.id);

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % FLASHCARDS_DATA.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + FLASHCARDS_DATA.length) % FLASHCARDS_DATA.length);
  };

  const toggleMastered = () => {
    setMasteredCards((prev) =>
      prev.includes(currentCard.id)
        ? prev.filter((id) => id !== currentCard.id)
        : [...prev, currentCard.id]
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-xl bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between bg-neutral-50 dark:bg-neutral-950">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <h3 className="font-bold text-base text-neutral-900 dark:text-neutral-100 tracking-tight">
              Thẻ Ghi Nhớ Thuật Ngữ (Flashcards MLN122)
            </h3>
          </div>
          <button
            onClick={() => setIsFlashcardsOpen(false)}
            className="p-1 rounded-full text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 flex flex-col items-center">
          {/* Progress Indicator */}
          <div className="w-full flex items-center justify-between text-xs text-neutral-400 mb-4">
            <span className="font-mono">
              Thẻ {currentIndex + 1} / {FLASHCARDS_DATA.length}
            </span>
            <span className="font-mono text-emerald-600 dark:text-emerald-400">
              Đã thuộc: {masteredCards.length} / {FLASHCARDS_DATA.length}
            </span>
          </div>

          {/* 3D Flip Card Container */}
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="w-full h-80 cursor-pointer perspective-1000 select-none"
          >
            <div
              className={`relative w-full h-full rounded-2xl transition-transform duration-500 transform-style-3d shadow-xl border border-neutral-200 dark:border-neutral-800 p-8 flex flex-col justify-between ${
                isFlipped
                  ? 'bg-gradient-to-br from-amber-500/10 via-neutral-900/40 to-neutral-900/90 text-neutral-100'
                  : 'bg-gradient-to-br from-white via-amber-50/30 to-amber-100/40 dark:from-neutral-900 dark:to-neutral-950 text-neutral-900 dark:text-neutral-100'
              }`}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between text-xs text-neutral-400">
                <span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300 font-mono text-[10px]">
                  PDF Trang {currentCard.sourcePdfPage}
                </span>
                <span className="flex items-center gap-1 text-[11px] text-amber-600">
                  <RotateCw className="w-3.5 h-3.5" /> Chạm để lật ({isFlipped ? 'Mặt sau' : 'Mặt trước'})
                </span>
              </div>

              {/* Card Center Content */}
              {!isFlipped ? (
                /* Front Side: Term & Translation */
                <div className="text-center my-auto space-y-3">
                  <div className="text-xs uppercase font-mono tracking-widest text-amber-600 dark:text-amber-400">
                    Thuật ngữ Cốt lõi
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-neutral-50 tracking-tight leading-snug">
                    {currentCard.term}
                  </h4>
                  {currentCard.termEn && (
                    <p className="text-sm font-sans text-neutral-500 dark:text-neutral-400 italic">
                      {currentCard.termEn}
                    </p>
                  )}
                </div>
              ) : (
                /* Back Side: Definition, Key Rule, Example */
                <div className="text-left my-auto space-y-3 text-xs sm:text-sm">
                  <div>
                    <span className="font-bold text-amber-600 dark:text-amber-300">Định nghĩa: </span>
                    <span className="text-neutral-700 dark:text-neutral-200">{currentCard.definition}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[12px]">
                    <span className="font-bold text-amber-700 dark:text-amber-300">Quy tắc vàng: </span>
                    <span className="text-neutral-800 dark:text-neutral-200">{currentCard.keyRule}</span>
                  </div>
                  <div className="text-[11px] text-neutral-500 dark:text-neutral-400 italic">
                    <strong>Ví dụ:</strong> {currentCard.example}
                  </div>
                </div>
              )}

              {/* Card Footer */}
              <div className="text-center text-[10px] text-neutral-400 uppercase tracking-widest">
                Chương {currentCard.chapterId} • MLN122
              </div>
            </div>
          </div>

          {/* Controls Bar */}
          <div className="w-full flex items-center justify-between mt-6">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-200 flex items-center gap-1 text-xs transition-colors"
            >
              <ChevronLeft className="w-4 h-4" /> Thẻ trước
            </button>

            <button
              onClick={toggleMastered}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                isMastered
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-emerald-500/20 hover:text-emerald-500'
              }`}
            >
              <Check className="w-4 h-4" />
              <span>{isMastered ? 'Đã nắm vững' : 'Đánh dấu đã thuộc'}</span>
            </button>

            <button
              onClick={handleNext}
              className="p-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-200 flex items-center gap-1 text-xs transition-colors"
            >
              Thẻ tiếp <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
