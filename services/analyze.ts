import api from "./api";
import type { AnalysisResponse, AnalyzeParams } from "@/types/analyze";

export async function analyzeResume({
  file,
  jobDescription,
}: AnalyzeParams): Promise<AnalysisResponse> {
  const formData = new FormData();
  formData.append("resume", file);
  formData.append("jobDescription", jobDescription);

  const response = await api.post<AnalysisResponse>("/analyze", formData);
  return response.data;
}