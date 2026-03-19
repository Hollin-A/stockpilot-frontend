"use client";

import { useState } from "react";
import { createProduct } from "../api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CreateProductModal() {
  const [form, setForm] = useState({
    name: "",
    sku: "",
    price: 0,
    stock: 0,
    threshold: 0,
  });

  const handleSubmit = async () => {
    await createProduct(form);
    alert("Product created");
  };

  return (
    <div className="mb-4">
      <Input
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <Input
        placeholder="SKU"
        onChange={(e) => setForm({ ...form, sku: e.target.value })}
      />

      <Input
        type="number"
        placeholder="Price"
        onChange={(e) => setForm({ ...form, price: Number(e.target.value) })}
      />

      <Button onClick={handleSubmit}>Create Product</Button>
    </div>
  );
}
