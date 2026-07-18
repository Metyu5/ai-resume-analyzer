export interface HistoryListItem {
  id: number;
  file_name: string;
  score: number;
  keywords_matched: number;
  keywords_total: number;
  created_at: string;
}

export interface HistoryListResponse {
  data: HistoryListItem[];
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
}

export interface Finding {
  category: string;
  detail: string;
}

export interface HistoryDetail {
  id: number;
  file_name: string;
  job_description: string | null;
  score: number;
  keywords_matched: number;
  keywords_total: number;
  summary: string | null;
  findings: Finding[];
  missing_keywords: string[];
  suggestions: string[];
  created_at: string;
}

export interface HistoryDetailResponse {
  data: HistoryDetail;
}
