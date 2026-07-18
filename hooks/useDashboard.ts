import { useQuery } from "@tanstack/react-query";
import { getDashboard } from "@/services/dashboard";
import type { DashboardResponse } from "@/types/dashboard";

export function useDashboard() {
  return useQuery<DashboardResponse, Error>({
    queryKey: ["dashboard"],
    queryFn: getDashboard,
    staleTime: 30_000,
  });
}
