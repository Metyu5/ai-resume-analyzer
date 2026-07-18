import api from "./api";
import type { HistoryListResponse, HistoryDetailResponse } from "@/types/history";

export async function getHistoryList(page: number = 1): Promise<HistoryListResponse> {
  const response = await api.get<HistoryListResponse>(`/history?page=${page}`);
  return response.data;
}

export async function getHistoryDetail(id: number): Promise<HistoryDetailResponse> {
  const response = await api.get<HistoryDetailResponse>(`/history/${id}`);
  return response.data;
}
