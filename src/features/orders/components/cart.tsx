"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    <Card>
      <CardHeader>
        <CardTitle>Cart</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {items.length === 0 && (
          <p className="text-sm text-slate-400">No items in cart.</p>
        )}

        {items.map((item) => (
          <div key={item.productId} className="flex justify-between items-center">
            <div>
              <p>{item.name}</p>
              <p className="text-sm text-slate-500">${item.price}</p>
            </div>

            <Input
              type="number"
              min={1}
              value={item.quantity}
              aria-label={`Quantity for ${item.name}`}
              className="w-20"
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
      </CardContent>
    </Card>
  );
}
