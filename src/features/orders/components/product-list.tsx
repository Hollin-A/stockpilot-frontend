"use client";

import { Product } from "@/lib/types";

interface ProductListProps {
  products: Product[];
  addItem: (product: Product) => void;
}

export default function ProductList({ products, addItem }: ProductListProps) {
  return (
    <div className="space-y-2">
      {products.map((p) => (
        <div
          key={p.id}
          role="button"
          tabIndex={0}
          className="p-4 border rounded cursor-pointer hover:bg-slate-100"
          onClick={() => addItem(p)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              addItem(p);
            }
          }}
        >
          <p className="font-medium">{p.name}</p>
          <p className="text-sm text-slate-500">${p.price}</p>
        </div>
      ))}
    </div>
  );
}
