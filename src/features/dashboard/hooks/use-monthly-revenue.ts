import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";

export function useMonthlyRevenue() {
  return useQuery({
    queryKey: ["monthly-revenue"],
    queryFn: () =>
      api.get("/analytics/monthly-revenue").then((res) => res.data),
  });
}
