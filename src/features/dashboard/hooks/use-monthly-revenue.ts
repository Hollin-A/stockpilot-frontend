import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { MonthlyRevenueEntry } from "@/lib/types";

export function useMonthlyRevenue() {
  return useQuery<MonthlyRevenueEntry[]>({
    queryKey: ["monthly-revenue"],
    queryFn: () =>
      api.get("/analytics/monthly-revenue").then((res) => res.data),
  });
}
