import React, { createContext, useContext, useState, useEffect } from 'react';
import { Bookmark, UserNote, ChapterId } from '../types/book';
import { BOOK_PAGES, CHAPTERS } from '../data/mln122BookData';
import { soundManager } from '../utils/sound';

export type ViewMode = '3d-book' | 'original-doc' | 'scroll-read';

interface LearningContextType {
  currentBookPage: number;
  setCurrentBookPage: (page: number, playSound?: boolean) => void;
  goToNextPage: () => void;
  goToPrevPage: () => void;
  goToPageBySourcePdf: (pdfPage: number) => void;
  goToChapter: (chapterId: ChapterId) => void;
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  soundEnabled: boolean;
  toggleSound: () => void;
  bookmarks: Bookmark[];
  toggleBookmark: (pageNumber: number) => void;
  isBookmarked: (pageNumber: number) => boolean;
  notes: UserNote[];
  addNote: (pageNumber: number, text: string) => void;
  deleteNote: (id: string) => void;
  readPages: number[];
  markPageAsRead: (pageNumber: number) => void;
  readingProgressPercent: number;
  
  // Modals / Drawers state
  isTableOfContentsOpen: boolean;
  setIsTableOfContentsOpen: (open: boolean) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  isQuizOpen: boolean;
  setIsQuizOpen: (open: boolean) => void;
  isFlashcardsOpen: boolean;
  setIsFlashcardsOpen: (open: boolean) => void;
  isNotesDrawerOpen: boolean;
  setIsNotesDrawerOpen: (open: boolean) => void;
  isAITutorOpen: boolean;
  setIsAITutorOpen: (open: boolean) => void;
  isCoverageReportOpen: boolean;
  setIsCoverageReportOpen: (open: boolean) => void;
  isPresentationMode: boolean;
  setIsPresentationMode: (val: boolean) => void;
}

const LearningContext = createContext<LearningContextType | undefined>(undefined);

export const LearningProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentBookPage, setCurrentBookPageState] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('econverse_page');
      if (saved) {
        const parsed = parseInt(saved, 10);
        if (!isNaN(parsed) && parsed >= 1 && parsed <= BOOK_PAGES.length) return parsed;
      }
    }
    return 1;
  });

  const [viewMode, setViewModeState] = useState<ViewMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('econverse_view_mode') as ViewMode;
      if (saved === '3d-book' || saved === 'original-doc' || saved === 'scroll-read') return saved;
    }
    return '3d-book';
  });

  const [soundEnabled, setSoundEnabledState] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('econverse_sound');
      if (saved !== null) return saved === 'true';
    }
    return true;
  });

  const [bookmarks, setBookmarks] = useState<Bookmark[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('econverse_bookmarks');
        if (saved) return JSON.parse(saved);
      } catch {
        // ignore
      }
    }
    return [];
  });

  const [notes, setNotes] = useState<UserNote[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('econverse_notes');
        if (saved) return JSON.parse(saved);
      } catch {
        // ignore
      }
    }
    return [
      {
        id: 'initial-note-1',
        pageNumber: 3,
        chapterId: 2,
        text: 'Lưu ý ôn thi: Nắm chắc hao phí LĐ cá biệt vs LĐ xã hội cần thiết và điều kiện để có lợi nhuận siêu ngạch.',
        createdAt: Date.now() - 3600000,
        color: 'amber'
      },
      {
        id: 'initial-note-2',
        pageNumber: 11,
        chapterId: 5,
        text: 'Công thức M = (P*Q)/V - Karl Marx. Nhớ phân biệt P*Q là tổng giá cả, còn V là tốc độ vòng quay tiền.',
        createdAt: Date.now() - 1800000,
        color: 'purple'
      }
    ];
  });

  const [readPages, setReadPages] = useState<number[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('econverse_read_pages');
        if (saved) return JSON.parse(saved);
      } catch {
        // ignore
      }
    }
    return [1];
  });

  // Modals state
  const [isTableOfContentsOpen, setIsTableOfContentsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isFlashcardsOpen, setIsFlashcardsOpen] = useState(false);
  const [isNotesDrawerOpen, setIsNotesDrawerOpen] = useState(false);
  const [isAITutorOpen, setIsAITutorOpen] = useState(false);
  const [isCoverageReportOpen, setIsCoverageReportOpen] = useState(false);
  const [isPresentationMode, setIsPresentationMode] = useState(false);

  useEffect(() => {
    soundManager.enabled = soundEnabled;
  }, [soundEnabled]);

  const setCurrentBookPage = (page: number, playSound: boolean = true) => {
    const clamped = Math.max(1, Math.min(page, BOOK_PAGES.length));
    if (playSound && clamped !== currentBookPage) {
      soundManager.playFlip();
    }
    setCurrentBookPageState(clamped);
    markPageAsRead(clamped);
    try {
      localStorage.setItem('econverse_page', clamped.toString());
    } catch {
      // ignore
    }
  };

  const goToNextPage = () => {
    if (currentBookPage < BOOK_PAGES.length) {
      setCurrentBookPage(currentBookPage + 1, true);
    }
  };

  const goToPrevPage = () => {
    if (currentBookPage > 1) {
      setCurrentBookPage(currentBookPage - 1, true);
    }
  };

  const goToPageBySourcePdf = (pdfPage: number) => {
    const target = BOOK_PAGES.find(p => p.sourcePdfPage === pdfPage);
    if (target) {
      setCurrentBookPage(target.pageNumber, true);
    }
  };

  const goToChapter = (chapterId: ChapterId) => {
    const target = BOOK_PAGES.find(p => p.chapterId === chapterId);
    if (target) {
      setCurrentBookPage(target.pageNumber, true);
    }
    setIsTableOfContentsOpen(false);
  };

  const setViewMode = (mode: ViewMode) => {
    setViewModeState(mode);
    try {
      localStorage.setItem('econverse_view_mode', mode);
    } catch {
      // ignore
    }
  };

  const toggleSound = () => {
    setSoundEnabledState(prev => {
      const next = !prev;
      soundManager.enabled = next;
      try {
        localStorage.setItem('econverse_sound', next.toString());
      } catch {
        // ignore
      }
      return next;
    });
  };

  const isBookmarked = (pageNumber: number) => {
    return bookmarks.some(b => b.pageNumber === pageNumber);
  };

  const toggleBookmark = (pageNumber: number) => {
    setBookmarks(prev => {
      let updated: Bookmark[];
      if (prev.some(b => b.pageNumber === pageNumber)) {
        updated = prev.filter(b => b.pageNumber !== pageNumber);
      } else {
        const pageData = BOOK_PAGES.find(p => p.pageNumber === pageNumber);
        const newBm: Bookmark = {
          pageNumber,
          chapterId: pageData?.chapterId || 1,
          title: pageData?.title || `Trang ${pageNumber}`,
          createdAt: Date.now()
        };
        updated = [...prev, newBm];
        soundManager.playChime();
      }
      try {
        localStorage.setItem('econverse_bookmarks', JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const addNote = (pageNumber: number, text: string) => {
    const pageData = BOOK_PAGES.find(p => p.pageNumber === pageNumber);
    const newNote: UserNote = {
      id: 'note-' + Date.now(),
      pageNumber,
      chapterId: pageData?.chapterId || 1,
      text,
      createdAt: Date.now(),
      color: 'amber'
    };
    setNotes(prev => {
      const updated = [newNote, ...prev];
      try {
        localStorage.setItem('econverse_notes', JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const deleteNote = (id: string) => {
    setNotes(prev => {
      const updated = prev.filter(n => n.id !== id);
      try {
        localStorage.setItem('econverse_notes', JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const markPageAsRead = (pageNumber: number) => {
    setReadPages(prev => {
      if (!prev.includes(pageNumber)) {
        const updated = [...prev, pageNumber];
        try {
          localStorage.setItem('econverse_read_pages', JSON.stringify(updated));
        } catch {
          // ignore
        }
        return updated;
      }
      return prev;
    });
  };

  const readingProgressPercent = Math.round((readPages.length / BOOK_PAGES.length) * 100);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in input or textarea
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement).tagName)) {
        return;
      }
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        goToNextPage();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        goToPrevPage();
      } else if (e.key === 'b' || e.key === 'B') {
        toggleBookmark(currentBookPage);
      } else if (e.key === 'f' || e.key === 'F') {
        if (!e.metaKey && !e.ctrlKey) {
          setIsSearchOpen(true);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentBookPage]);

  return (
    <LearningContext.Provider
      value={{
        currentBookPage,
        setCurrentBookPage,
        goToNextPage,
        goToPrevPage,
        goToPageBySourcePdf,
        goToChapter,
        viewMode,
        setViewMode,
        soundEnabled,
        toggleSound,
        bookmarks,
        toggleBookmark,
        isBookmarked,
        notes,
        addNote,
        deleteNote,
        readPages,
        markPageAsRead,
        readingProgressPercent,
        isTableOfContentsOpen,
        setIsTableOfContentsOpen,
        isSearchOpen,
        setIsSearchOpen,
        isQuizOpen,
        setIsQuizOpen,
        isFlashcardsOpen,
        setIsFlashcardsOpen,
        isNotesDrawerOpen,
        setIsNotesDrawerOpen,
        isAITutorOpen,
        setIsAITutorOpen,
        isCoverageReportOpen,
        setIsCoverageReportOpen,
        isPresentationMode,
        setIsPresentationMode
      }}
    >
      {children}
    </LearningContext.Provider>
  );
};

export const useLearning = () => {
  const context = useContext(LearningContext);
  if (!context) throw new Error('useLearning must be used within LearningProvider');
  return context;
};
