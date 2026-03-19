import { api } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: () =>
      api.get("/products").then(res => res.data),
  });
}