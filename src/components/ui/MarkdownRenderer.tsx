import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, className = '' }) => {
  return (
    <div className={`academic-prose text-neutral-800 dark:text-neutral-200 ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{
          h3: ({ ...props }) => (
            <h3
              className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-50 mt-6 mb-3 tracking-tight flex items-center gap-2 border-b border-neutral-200/60 dark:border-neutral-800/80 pb-1.5"
              {...props}
            />
          ),
          h4: ({ ...props }) => (
            <h4
              className="text-base sm:text-lg font-semibold text-amber-800 dark:text-amber-300 mt-4 mb-2 tracking-tight"
              {...props}
            />
          ),
          p: ({ ...props }) => (
            <p className="mb-4 text-base leading-[1.75] font-normal text-neutral-700 dark:text-neutral-300" {...props} />
          ),
          ul: ({ ...props }) => (
            <ul className="list-disc pl-6 mb-4 space-y-2 text-base leading-[1.75] text-neutral-700 dark:text-neutral-300" {...props} />
          ),
          ol: ({ ...props }) => (
            <ol className="list-decimal pl-6 mb-4 space-y-2 text-base leading-[1.75] text-neutral-700 dark:text-neutral-300" {...props} />
          ),
          li: ({ ...props }) => (
            <li className="leading-[1.75]" {...props} />
          ),
          strong: ({ ...props }) => (
            <strong className="font-semibold text-neutral-900 dark:text-neutral-100" {...props} />
          ),
          em: ({ ...props }) => (
            <em className="italic font-normal text-neutral-800 dark:text-neutral-200" {...props} />
          ),
          blockquote: ({ ...props }) => (
            <blockquote
              className="border-l-4 border-amber-500/60 pl-4 py-2 my-4 italic text-neutral-700 dark:text-neutral-300 bg-amber-500/5 rounded-r-xl leading-relaxed"
              {...props}
            />
          ),
          table: ({ ...props }) => (
            <div className="overflow-x-auto my-4 rounded-xl border border-neutral-200 dark:border-neutral-800">
              <table className="w-full text-left text-sm" {...props} />
            </div>
          ),
          th: ({ ...props }) => (
            <th className="py-2.5 px-3.5 bg-neutral-100 dark:bg-neutral-800/80 font-semibold text-neutral-900 dark:text-neutral-100 border-b border-neutral-200 dark:border-neutral-800" {...props} />
          ),
          td: ({ ...props }) => (
            <td className="py-2.5 px-3.5 border-b border-neutral-100 dark:border-neutral-800/60 text-neutral-700 dark:text-neutral-300" {...props} />
          ),
          code: ({ inline, ...props }: any) =>
            inline ? (
              <code className="px-1.5 py-0.5 rounded font-mono text-xs bg-neutral-200/60 dark:bg-neutral-800 text-amber-700 dark:text-amber-300" {...props} />
            ) : (
              <code className="block p-3 rounded-xl font-mono text-xs bg-neutral-100 dark:bg-neutral-900 overflow-x-auto border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 my-3" {...props} />
            ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};
