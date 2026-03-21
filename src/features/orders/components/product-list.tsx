"use client";

export default function ProductList({ products, addItem }: any) {
  return (
    <div className="space-y-2">
      {products.map((p: any) => (
        <div
          key={p.id}
          className="p-4 border rounded cursor-pointer hover:bg-gray-100"
          onClick={() => addItem(p)}
        >
          <p className="font-medium">{p.name}</p>
          <p className="text-sm text-gray-500">${p.price}</p>
        </div>
      ))}
    </div>
  );
}
