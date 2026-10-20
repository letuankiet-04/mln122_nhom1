import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LearningProvider, useLearning } from './context/LearningContext';
import { AppHeader } from './components/header/AppHeader';
import { FlipBookWrapper } from './components/book/FlipBookWrapper';
import { OriginalDocumentView } from './components/book/OriginalDocumentView';
import { ContinuousScrollView } from './components/book/ContinuousScrollView';
import { BookToolbar } from './components/book/BookToolbar';
import { TableOfContentsModal } from './components/book/TableOfContentsModal';
import { SearchModal } from './components/book/SearchModal';
import { QuizModal } from './components/learning/QuizModal';
import { FlashcardsModal } from './components/learning/FlashcardsModal';
import { NotesDrawer } from './components/learning/NotesDrawer';
import { AITutorModal } from './components/learning/AITutorModal';
import { CoverageReportModal } from './components/learning/CoverageReportModal';

const MainAppContent: React.FC = () => {
  const { viewMode } = useLearning();

  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-[#0f1013] text-neutral-900 dark:text-neutral-100 font-sans flex flex-col justify-between selection:bg-amber-500/30 selection:text-amber-200">
      <AppHeader />

      <main className="flex-1 flex flex-col items-center justify-center pb-24">
        {viewMode === '3d-book' && <FlipBookWrapper />}
        {viewMode === 'original-doc' && <OriginalDocumentView />}
        {viewMode === 'scroll-read' && <ContinuousScrollView />}
      </main>

      <BookToolbar />

      {/* Global Modals & Drawers */}
      <TableOfContentsModal />
      <SearchModal />
      <QuizModal />
      <FlashcardsModal />
      <NotesDrawer />
      <AITutorModal />
      <CoverageReportModal />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <LearningProvider>
        <MainAppContent />
      </LearningProvider>
    </ThemeProvider>
  );
}
