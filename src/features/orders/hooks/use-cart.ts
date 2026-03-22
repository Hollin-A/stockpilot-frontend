import { useState } from "react";
import { CartItem, Product } from "@/lib/types";

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (product: Product) => {
    const existing = items.find((i) => i.productId === product.id);

    if (existing) {
      setItems(
        items.map((i) =>
          i.productId === product.id ? { ...i, quantity: i.quantity + 1 } : i,
        ),
      );
    } else {
      setItems([
        ...items,
        {
          productId: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
        },
      ]);
    }
  };

  const updateQuantity = (productId: string, qty: number) => {
    if (isNaN(qty) || qty < 1) return;

    setItems(
      items.map((i) =>
        i.productId === productId ? { ...i, quantity: qty } : i,
      ),
    );
  };

  const clear = () => setItems([]);

  const total = parseFloat(
    items.reduce((sum, i) => sum + i.price * i.quantity, 0).toFixed(2),
  );

  return {
    items,
    addItem,
    updateQuantity,
    clear,
    total,
  };
}
