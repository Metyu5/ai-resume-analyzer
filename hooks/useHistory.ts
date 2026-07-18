import { useQuery } from "@tanstack/react-query";
import { getHistoryList, getHistoryDetail } from "@/services/history";
import type { HistoryListResponse, HistoryDetailResponse } from "@/types/history";

export function useHistoryList(page: number = 1) {
  return useQuery<HistoryListResponse, Error>({
    queryKey: ["history", page],
    queryFn: () => getHistoryList(page),
    staleTime: 30_000,
  });
}

export function useHistoryDetail(id: number) {
  return useQuery<HistoryDetailResponse, Error>({
    queryKey: ["history", id],
    queryFn: () => getHistoryDetail(id),
    staleTime: 60_000,
  });
}
