import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";

export function useSales() {
  return useQuery({
    queryKey: ["sales"],
    queryFn: () =>
      api.get("/analytics/sales").then(res => res.data),
  });
}