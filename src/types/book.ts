export type ChapterId = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export interface BookChapter {
  id: ChapterId;
  title: string;
  subtitle: string;
  sourcePages: string; // e.g. "Trang 1", "Trang 1–4", etc.
  description: string;
  iconName: string;
  color: string;
}

export interface BookPageData {
  pageNumber: number; // Global book page index (1-based)
  chapterId: ChapterId;
  chapterTitle: string;
  sourcePdfPage: number; // 1 to 12
  title: string;
  subtitle?: string;
  contentMarkdown: string;
  callout?: {
    type: 'definition' | 'law' | 'academic_note' | 'formula' | 'case_study';
    title: string;
    content: string;
  };
  interactiveComponent?: 
    | 'coffee_table_and_chart'
    | 'supply_demand_simulator'
    | 'tet_market_data'
    | 'ecommerce_market_and_game'
    | 'money_circulation_calculator'
    | 'macro_vietnam_2025'
    | 'four_laws_mindmap'
    | 'references_list';
  images?: {
    src: string;
    caption: string;
    credit?: string;
  }[];
  keyTakeaway?: string;
}

export interface CoffeeFarmerData {
  indicator: string;
  certifiedSC: number | string;
  nonCertified: number | string;
  diffPercent?: string;
  unit: string;
}

export interface TetPriceData {
  category: string;
  changePercent: number;
  note: string;
}

export interface EcommercePlatformData {
  platform: string;
  gmvBillionUSD: number;
  marketSharePercent: number;
  growthPercent: number;
  highlight: string;
}

export interface ReferenceItem {
  id: number;
  author: string;
  year: number | string;
  title: string;
  publisher: string;
  url?: string;
  annotation: string;
}

export interface QuizQuestion {
  id: string;
  sourcePdfPage: number;
  chapterId: ChapterId;
  type: 'multiple_choice' | 'true_false' | 'case_study';
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  practicalContext?: string;
}

export interface Flashcard {
  id: string;
  term: string;
  termEn?: string;
  chapterId: ChapterId;
  sourcePdfPage: number;
  definition: string;
  keyRule: string;
  example: string;
}

export interface UserNote {
  id: string;
  pageNumber: number;
  chapterId: ChapterId;
  text: string;
  createdAt: number;
  color?: 'amber' | 'blue' | 'emerald' | 'purple';
}

export interface Bookmark {
  pageNumber: number;
  chapterId: ChapterId;
  title: string;
  createdAt: number;
}
