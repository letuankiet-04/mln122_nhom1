import React, { useState } from 'react';
import { useLearning } from '../../context/LearningContext';
import { QUIZ_QUESTIONS } from '../../data/quizData';
import { CheckCircle2, XCircle, Award, RotateCcw, X, ArrowRight, HelpCircle, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const QuizModal: React.FC = () => {
  const { isQuizOpen, setIsQuizOpen, setCurrentBookPage } = useLearning();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  if (!isQuizOpen) return null;

  const currentQ = QUIZ_QUESTIONS[currentIndex];
  const totalQuestions = QUIZ_QUESTIONS.length;
  const isAnswered = selectedAnswers[currentIndex] !== undefined;
  const isCorrect = isAnswered && selectedAnswers[currentIndex] === currentQ.correctAnswerIndex;

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    const updated = { ...selectedAnswers, [currentIndex]: idx };
    setSelectedAnswers(updated);
    setShowExplanation(true);

    if (idx === currentQ.correctAnswerIndex && currentIndex === totalQuestions - 1) {
      triggerConfetti();
    }
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowExplanation(selectedAnswers[currentIndex + 1] !== undefined);
    } else {
      setIsFinished(true);
      triggerConfetti();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowExplanation(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswers({});
    setShowExplanation(false);
    setIsFinished(false);
  };

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }
  };

  const score = Object.entries(selectedAnswers).filter(
    ([idx, ans]) => ans === QUIZ_QUESTIONS[parseInt(idx, 10)].correctAnswerIndex
  ).length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-2xl bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between bg-neutral-50 dark:bg-neutral-950">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-500" />
            <h3 className="font-bold text-base text-neutral-900 dark:text-neutral-100 tracking-tight">
              Trắc nghiệm Đánh giá Năng lực MLN122
            </h3>
          </div>
          <button
            onClick={() => setIsQuizOpen(false)}
            className="p-1 rounded-full text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1 text-neutral-800 dark:text-neutral-200">
          {!isFinished ? (
            <div>
              {/* Question progress */}
              <div className="flex items-center justify-between text-xs text-neutral-400 mb-3">
                <span className="font-mono">
                  Câu hỏi {currentIndex + 1} / {totalQuestions}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300 font-mono text-[10px]">
                  Căn cứ PDF Trang {currentQ.sourcePdfPage}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-neutral-200 dark:bg-neutral-800 rounded-full mb-6 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-300"
                  style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
                />
              </div>

              {/* Question Title */}
              <h4 className="font-bold text-base sm:text-lg text-neutral-900 dark:text-neutral-100 mb-5 leading-snug tracking-tight">
                {currentQ.question}
              </h4>

              {/* Options */}
              <div className="space-y-2.5 mb-6">
                {currentQ.options.map((option, idx) => {
                  const isThisSelected = selectedAnswers[currentIndex] === idx;
                  const isThisCorrect = currentQ.correctAnswerIndex === idx;

                  let optionStyle = 'border-neutral-200 dark:border-neutral-800 hover:border-amber-500/50 bg-neutral-50 dark:bg-neutral-800/50';

                  if (isAnswered) {
                    if (isThisCorrect) {
                      optionStyle = 'border-emerald-500 bg-emerald-500/10 text-emerald-900 dark:text-emerald-200 font-semibold';
                    } else if (isThisSelected) {
                      optionStyle = 'border-red-500 bg-red-500/10 text-red-900 dark:text-red-200';
                    } else {
                      optionStyle = 'opacity-50 border-neutral-200 dark:border-neutral-800';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      disabled={isAnswered}
                      className={`w-full p-3.5 rounded-2xl border text-left text-xs sm:text-sm transition-all flex items-start gap-3 ${optionStyle}`}
                    >
                      <span className="w-6 h-6 rounded-full border border-current shrink-0 flex items-center justify-center font-mono font-bold text-xs mt-0.5">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="leading-relaxed flex-1">{option}</span>
                      {isAnswered && isThisCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      )}
                      {isAnswered && isThisSelected && !isThisCorrect && (
                        <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation box */}
              {showExplanation && (
                <div className={`p-4 rounded-2xl text-xs sm:text-sm border leading-relaxed animate-fadeIn ${
                  isCorrect ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-950 dark:text-emerald-200' : 'bg-amber-500/10 border-amber-500/30 text-amber-950 dark:text-amber-200'
                }`}>
                  <div className="font-bold mb-1 flex items-center gap-1.5">
                    {isCorrect ? 'Chính xác! ' : 'Chưa chính xác! '}
                    <span className="text-[11px] font-mono opacity-80">(Nguồn: Trang {currentQ.sourcePdfPage} PDF)</span>
                  </div>
                  <p>{currentQ.explanation}</p>
                  {currentQ.practicalContext && (
                    <div className="mt-2 pt-2 border-t border-current/20 italic text-[11px]">
                      {currentQ.practicalContext}
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : (
            /* Results Screen */
            <div className="py-8 text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400 mx-auto flex items-center justify-center">
                <Award className="w-10 h-10" />
              </div>

              <div>
                <h3 className="font-bold text-2xl text-neutral-900 dark:text-neutral-100 tracking-tight">
                  Hoàn Thành Bài Ôn Tập MLN122!
                </h3>
                <p className="text-sm text-neutral-500 mt-1">
                  Kết quả đánh giá mức độ tiếp thu 12 trang giáo trình
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-neutral-100 dark:bg-neutral-800 max-w-xs mx-auto border border-neutral-200 dark:border-neutral-700">
                <div className="text-4xl font-extrabold font-mono text-amber-600 dark:text-amber-400">
                  {score} / {totalQuestions}
                </div>
                <div className="text-xs text-neutral-500 mt-1 font-medium">
                  {score >= 8 ? 'Xuất sắc! Bạn đã nắm rất vững kiến thức.' : score >= 5 ? 'Khá tốt! Hãy ôn lại các trang còn băn khoăn.' : 'Cần đọc lại sách và ghi chú thêm!'}
                </div>
              </div>

              <div className="flex justify-center gap-3">
                <button
                  onClick={handleRestart}
                  className="px-5 py-2.5 rounded-xl bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" /> Làm lại từ đầu
                </button>
                <button
                  onClick={() => setIsQuizOpen(false)}
                  className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold transition-colors"
                >
                  Quay lại Sách học
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation */}
        {!isFinished && (
          <div className="px-6 py-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between bg-neutral-50 dark:bg-neutral-950">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="px-4 py-2 rounded-xl text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 disabled:opacity-30 transition-colors"
            >
              Câu trước
            </button>

            <button
              onClick={handleNext}
              disabled={!isAnswered}
              className="px-5 py-2 rounded-xl text-xs font-semibold bg-amber-600 hover:bg-amber-500 text-white disabled:opacity-30 flex items-center gap-1.5 transition-colors"
            >
              <span>{currentIndex === totalQuestions - 1 ? 'Xem kết quả' : 'Câu tiếp theo'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
