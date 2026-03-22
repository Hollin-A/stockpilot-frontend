import { api } from "@/lib/api";
import { CartItem } from "@/lib/types";

export const createOrder = async (items: CartItem[]) => {
  const res = await api.post("/orders", { items });
  return res.data;
};
