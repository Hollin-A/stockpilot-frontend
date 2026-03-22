import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { TopProductEntry } from "@/lib/types";

export function useTopProducts() {
  return useQuery<TopProductEntry[]>({
    queryKey: ["top-products"],
    queryFn: () =>
      api.get("/analytics/top-products").then((res) => res.data),
  });
}
