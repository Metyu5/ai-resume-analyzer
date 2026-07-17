import { useMutation } from "@tanstack/react-query";
import { analyzeResume } from "@/services/analyze";
import type { AnalyzeParams, AnalysisResponse } from "@/types/analyze";

export function useAnalyzeResume() {
  return useMutation<AnalysisResponse, Error, AnalyzeParams>({
    mutationFn: analyzeResume,
  });
}
