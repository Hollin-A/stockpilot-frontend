import { api } from "@/lib/api";
import { CartItem } from "@/lib/types";

export const createOrder = async (items: CartItem[]) => {
  const payload = items.map(({ productId, quantity }) => ({ productId, quantity }));
  const res = await api.post("/orders", { items: payload });
  return res.data;
};
