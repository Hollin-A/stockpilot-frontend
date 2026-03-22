"use client";

import { Button } from "@/components/ui/button";

export default function Cart({
  items,
  total,
  updateQuantity,
  createOrder,
  isSubmitting,
}: any) {
  return (
    <div className="p-4 border rounded space-y-4">
      <h2 className="font-semibold text-lg">Cart</h2>

      {items.map((item: any) => (
        <div key={item.productId} className="flex justify-between items-center">
          <div>
            <p>{item.name}</p>
            <p className="text-sm text-gray-500">${item.price}</p>
          </div>

          <input
            type="number"
            value={item.quantity}
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
