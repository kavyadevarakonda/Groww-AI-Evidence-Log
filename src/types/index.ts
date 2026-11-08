export type ViewMode = 'slides' | 'engine' | 'mvp' | 'evidence' | 'research';

export interface GoldenSetItem {
  id: number;
  statement: string;
  source: string;
  groundTruthTag: string;
  prediction: string;
  isMatch: boolean;
  notes?: string;
}

export interface ResearchParticipant {
  id: string;
  name: string;
  age: number;
  role: string;
  income: string;
  location: string;
  monthlySip: string;
  status: string;
  fundType: string;
  incident: string;
  userQuote: string;
  rootInsight: string;
  avatarUrl: string;
}

export interface CorpusStat {
  source: string;
  count: number;
  percentage: number;
  description: string;
}

export interface TriggerTheme {
  theme: string;
  count: number;
  percentage: number;
  color: string;
  description: string;
  iconName: string;
}

export interface PaceMakerScenario {
  id: string;
  title: string;
  userDescription: string;
  fundName: string;
  sipAmount: number;
  sipDate: number;
  currentMonth: number;
  investedAmount: number;
  currentValue: number;
  promptText: string;
}
