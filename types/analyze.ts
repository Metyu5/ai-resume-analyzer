export type AnalysisStatus = "good" | "warning" | "bad";

export interface Finding {
  title: string;
  description: string;
  status: AnalysisStatus;
}

export interface AnalysisResult {
  score: number;
  keywordsMatched: number;
  keywordsTotal: number;
  summary: string;
  findings: Finding[];
  missingKeywords: string[];
  suggestions: string[];
}

export interface AnalysisResponse {
  success: boolean;
  data?: AnalysisResult;
  message?: string;
}

export interface AnalyzeParams {
  file: File;
  jobDescription: string;
}
