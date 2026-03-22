"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { createProduct } from "../api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  sku: z.string().min(1, "SKU is required"),
  price: z.number().min(0.01, "Price must be greater than 0"),
  stock: z.number().min(0, "Stock cannot be negative"),
  threshold: z.number().min(0, "Threshold cannot be negative"),
});

type FormValues = z.infer<typeof schema>;

export default function CreateProductModal() {
  const [open, setOpen] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const queryClient = useQueryClient();

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", sku: "", price: 0, stock: 0, threshold: 0 },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      setServerError(null);
      form.reset();
      setOpen(false);
      toast.success("Product created successfully.");
    },
    onError: (err: unknown) => {
      const message =
        err instanceof Error ? err.message : "Failed to create product. Please try again.";
      setServerError(message);
      toast.error(message);
    },
  });

  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        setOpen(o);
        if (!o) {
          form.reset();
          setServerError(null);
        }
      }}
    >
      <DialogTrigger asChild>
        <Button className="mb-4">+ Add Product</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Product</DialogTitle>
        </DialogHeader>

        <form
          onSubmit={form.handleSubmit((data) => mutate(data))}
          className="space-y-3"
        >
          <div>
            <label className="text-xs font-medium text-slate-600">Name</label>
            <Input placeholder="e.g. Wireless Mouse" {...form.register("name")} />
            {form.formState.errors.name && (
              <p className="text-xs text-red-500 mt-1">
                {form.formState.errors.name.message}
              </p>
            )}
          </div>
          <div>
            <label className="text-xs font-medium text-slate-600">SKU</label>
            <Input placeholder="e.g. WM-001" {...form.register("sku")} />
            {form.formState.errors.sku && (
              <p className="text-xs text-red-500 mt-1">
                {form.formState.errors.sku.message}
              </p>
            )}
          </div>
          <div>
            <label className="text-xs font-medium text-slate-600">Price ($)</label>
            <Input
              type="number"
              placeholder="e.g. 29.99"
              {...form.register("price", { valueAsNumber: true })}
            />
            {form.formState.errors.price && (
              <p className="text-xs text-red-500 mt-1">
                {form.formState.errors.price.message}
              </p>
            )}
          </div>
          <div>
            <label className="text-xs font-medium text-slate-600">Stock</label>
            <Input
              type="number"
              placeholder="e.g. 100"
              {...form.register("stock", { valueAsNumber: true })}
            />
            {form.formState.errors.stock && (
              <p className="text-xs text-red-500 mt-1">
                {form.formState.errors.stock.message}
              </p>
            )}
          </div>
          <div>
            <label className="text-xs font-medium text-slate-600">Low Stock Threshold</label>
            <Input
              type="number"
              placeholder="e.g. 10"
              {...form.register("threshold", { valueAsNumber: true })}
            />
            {form.formState.errors.threshold && (
              <p className="text-xs text-red-500 mt-1">
                {form.formState.errors.threshold.message}
              </p>
            )}
          </div>

          {serverError && <p className="text-sm text-red-500">{serverError}</p>}

          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? "Creating..." : "Create Product"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
