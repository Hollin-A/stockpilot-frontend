import { api } from "@/lib/api";
import { CreateProductInput, Product } from "@/lib/types";

export const getProducts = async (): Promise<Product[]> => {
  const res = await api.get("/products");
  if (!Array.isArray(res.data)) throw new Error(res.data?.message ?? "Unexpected response from server");
  return res.data;
};

export const createProduct = async (data: CreateProductInput): Promise<Product> => {
  const res = await api.post("/products", data);
  return res.data;
};