import { api } from "@/lib/api";

export const getProducts = async () => {
  const res = await api.get("/products");
  if (!Array.isArray(res.data)) throw new Error(res.data?.message ?? "Unexpected response from server");
  return res.data;
};

export const createProduct = async (data: any) => {
  const res = await api.post("/products", data);
  return res.data;
};