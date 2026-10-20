import React from 'react';
import { REFERENCES_LIST } from '../../data/mln122BookData';
import { BookOpen, ExternalLink, Bookmark, ShieldCheck } from 'lucide-react';

export const ReferencesList: React.FC = () => {
  return (
    <div className="my-6 space-y-3">
      <div className="flex items-center gap-2 mb-2">
        <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
        <h4 className="font-bold text-base sm:text-lg text-neutral-900 dark:text-neutral-100 tracking-tight">
          Hệ thống 10 Tài liệu Tham khảo Chính thống của Học phần
        </h4>
      </div>
      <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-4">
        Các tài liệu và số liệu thực tế được sử dụng làm căn cứ khoa học xuyên suốt 12 trang giáo trình MLN122:
      </p>

      <div className="space-y-3">
        {REFERENCES_LIST.map((ref) => (
          <div
            key={ref.id}
            className="p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 hover:border-amber-500/40 transition-all text-xs"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-2.5">
                <span className="font-mono font-bold text-xs px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 shrink-0">
                  [{ref.id}]
                </span>
                <div>
                  <div className="font-medium text-neutral-900 dark:text-neutral-100 leading-snug">
                    <span className="font-bold">{ref.author}</span> ({ref.year}),{' '}
                    <span className="italic font-medium text-neutral-800 dark:text-neutral-200">{ref.title}</span>, {ref.publisher}.
                  </div>
                  <div className="mt-1 text-neutral-500 dark:text-neutral-400">
                    <span className="font-semibold text-neutral-700 dark:text-neutral-300">Ghi chú:</span> {ref.annotation}
                  </div>
                </div>
              </div>

              {ref.url && (
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 p-1.5 rounded-lg text-neutral-400 hover:text-amber-600 hover:bg-amber-500/10 transition-colors"
                  title="Mở tài liệu tham khảo"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
