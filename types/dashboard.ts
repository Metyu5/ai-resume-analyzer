export interface DashboardStats {
  total_analyses: number;
  avg_score: number;
  best_score: number;
  last_analysis: string | null;
}

export interface AnalysisHistoryItem {
  id: number;
  file_name: string;
  score: number;
  created_at: string;
}

export interface DashboardData {
  stats: DashboardStats;
  history: AnalysisHistoryItem[];
}

export interface DashboardResponse {
  data: DashboardData;
}
