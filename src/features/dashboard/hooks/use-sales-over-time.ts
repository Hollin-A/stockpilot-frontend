import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { SalesOverTimeEntry } from "@/lib/types";

export function useSalesOverTime() {
  return useQuery<SalesOverTimeEntry[]>({
    queryKey: ["sales-over-time"],
    queryFn: () =>
      api.get("/analytics/sales-over-time").then((res) => res.data),
  });
}
