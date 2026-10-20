import React, { useState } from 'react';
import { useLearning } from '../../context/LearningContext';
import { FileText, Plus, Trash2, X, Download, Bookmark } from 'lucide-react';

export const NotesDrawer: React.FC = () => {
  const { isNotesDrawerOpen, setIsNotesDrawerOpen, notes, addNote, deleteNote, currentBookPage, setCurrentBookPage } = useLearning();
  const [newNoteText, setNewNoteText] = useState('');

  if (!isNotesDrawerOpen) return null;

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNoteText.trim()) return;
    addNote(currentBookPage, newNoteText.trim());
    setNewNoteText('');
  };

  const handleExport = () => {
    const textContent = notes.map(n => `[Trang ${n.pageNumber}] - ${new Date(n.createdAt).toLocaleDateString('vi-VN')}\n${n.text}\n`).join('\n---\n\n');
    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ghi-chu-mln122-${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-md bg-white dark:bg-neutral-900 h-full shadow-2xl flex flex-col border-l border-neutral-200 dark:border-neutral-800 animate-slideLeft">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between bg-neutral-50 dark:bg-neutral-950">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-amber-500" />
            <h3 className="font-bold text-base text-neutral-900 dark:text-neutral-100 tracking-tight">
              Sổ Tay Ghi Chú Cá Nhân
            </h3>
          </div>
          <div className="flex items-center gap-2">
            {notes.length > 0 && (
              <button
                onClick={handleExport}
                className="p-1.5 rounded-lg text-neutral-500 hover:text-amber-600 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
                title="Tải về ghi chú"
              >
                <Download className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={() => setIsNotesDrawerOpen(false)}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Add Note Form */}
        <form onSubmit={handleAdd} className="p-4 border-b border-neutral-200 dark:border-neutral-800 bg-amber-50/40 dark:bg-neutral-900/40">
          <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">
            Thêm ghi chú cho <span className="text-amber-600">Trang {currentBookPage}</span>:
          </label>
          <div className="flex gap-2">
            <textarea
              value={newNoteText}
              onChange={(e) => setNewNoteText(e.target.value)}
              placeholder="Nhập nội dung cần ghi nhớ, câu hỏi hoặc ý kiến cá nhân..."
              className="flex-1 px-3 py-2 rounded-xl text-xs bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none h-16"
            />
            <button
              type="submit"
              disabled={!newNoteText.trim()}
              className="px-3 rounded-xl bg-amber-600 hover:bg-amber-500 disabled:opacity-40 text-white flex items-center justify-center transition-colors"
              title="Lưu ghi chú"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </form>

        {/* Notes List */}
        <div className="p-4 flex-1 overflow-y-auto space-y-3">
          {notes.length === 0 ? (
            <div className="text-center py-12 text-neutral-400 text-xs">
              <FileText className="w-8 h-8 mx-auto mb-2 opacity-30" />
              Chưa có ghi chú nào. Hãy thêm ghi chú cho trang hiện tại!
            </div>
          ) : (
            notes.map((note) => (
              <div
                key={note.id}
                className="p-3.5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800/60 text-xs space-y-2 group"
              >
                <div className="flex items-center justify-between text-[11px] text-neutral-400">
                  <button
                    onClick={() => {
                      setCurrentBookPage(note.pageNumber);
                      setIsNotesDrawerOpen(false);
                    }}
                    className="font-mono font-semibold text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1"
                  >
                    <Bookmark className="w-3 h-3" /> Trang {note.pageNumber}
                  </button>
                  <div className="flex items-center gap-2">
                    <span>{new Date(note.createdAt).toLocaleDateString('vi-VN')}</span>
                    <button
                      onClick={() => deleteNote(note.id)}
                      className="text-neutral-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                      title="Xóa ghi chú"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
                <p className="text-neutral-800 dark:text-neutral-200 whitespace-pre-wrap leading-relaxed">
                  {note.text}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
