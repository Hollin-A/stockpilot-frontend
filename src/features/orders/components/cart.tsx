"use client";

import { Button } from "@/components/ui/button";
import { CartItem } from "@/lib/types";

interface CartProps {
  items: CartItem[];
  total: number;
  updateQuantity: (productId: string, qty: number) => void;
  createOrder: () => void;
  isSubmitting: boolean;
}

export default function Cart({
  items,
  total,
  updateQuantity,
  createOrder,
  isSubmitting,
}: CartProps) {
  return (
    <div className="p-4 border rounded space-y-4">
      <h2 className="font-semibold text-lg">Cart</h2>

      {items.map((item) => (
        <div key={item.productId} className="flex justify-between items-center">
          <div>
            <p>{item.name}</p>
            <p className="text-sm text-gray-500">${item.price}</p>
          </div>

          <input
            type="number"
            min={1}
            value={item.quantity}
            aria-label={`Quantity for ${item.name}`}
            className="w-16 border p-1"
            onChange={(e) =>
              updateQuantity(item.productId, Number(e.target.value))
            }
          />
        </div>
      ))}

      <div className="font-bold text-xl">Total: ${total}</div>

      <Button className="w-full" onClick={createOrder} disabled={isSubmitting || items.length === 0}>
        {isSubmitting ? "Creating..." : "Create Order"}
      </Button>
    </div>
  );
}
