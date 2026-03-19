"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduct } from "../api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CreateProductModal() {
  const queryClient = useQueryClient();

  const [form, setForm] = useState({
    name: "",
    sku: "",
    price: 0,
    stock: 0,
    threshold: 0,
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const { mutate, isPending } = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      setSuccess(true);
      setError(null);
      setForm({ name: "", sku: "", price: 0, stock: 0, threshold: 0 });
    },
    onError: (err: any) => {
      setError(
        err?.response?.data?.message?.message ??
          "Failed to create product. Please try again.",
      );
      setSuccess(false);
    },
  });

  return (
    <div className="mb-4">
      <Input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <Input
        placeholder="SKU"
        value={form.sku}
        onChange={(e) => setForm({ ...form, sku: e.target.value })}
      />
      <Input
        type="number"
        placeholder="Price"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: Number(e.target.value) })}
      />

      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
      {success && (
        <p className="text-sm text-green-600 mt-1">
          Product created successfully.
        </p>
      )}

      <Button onClick={() => mutate(form)} disabled={isPending}>
        {isPending ? "Creating..." : "Create Product"}
      </Button>
    </div>
  );
}
