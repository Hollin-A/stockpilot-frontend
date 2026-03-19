"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
    },
    onError: (err: any) => {
      setServerError(
        err?.response?.data?.message ??
          "Failed to create product. Please try again.",
      );
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
      <DialogTrigger render={<Button className="mb-4">+ Add Product</Button>} />

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Product</DialogTitle>
        </DialogHeader>

        <form
          onSubmit={form.handleSubmit((data) => mutate(data))}
          className="space-y-3"
        >
          <div>
            <Input placeholder="Name" {...form.register("name")} />
            {form.formState.errors.name && (
              <p className="text-xs text-red-500 mt-1">
                {form.formState.errors.name.message}
              </p>
            )}
          </div>
          <div>
            <Input placeholder="SKU" {...form.register("sku")} />
            {form.formState.errors.sku && (
              <p className="text-xs text-red-500 mt-1">
                {form.formState.errors.sku.message}
              </p>
            )}
          </div>
          <div>
            <Input
              type="number"
              placeholder="Price"
              {...form.register("price", { valueAsNumber: true })}
            />
            {form.formState.errors.price && (
              <p className="text-xs text-red-500 mt-1">
                {form.formState.errors.price.message}
              </p>
            )}
          </div>
          <div>
            <Input
              type="number"
              placeholder="Stock"
              {...form.register("stock", { valueAsNumber: true })}
            />
            {form.formState.errors.stock && (
              <p className="text-xs text-red-500 mt-1">
                {form.formState.errors.stock.message}
              </p>
            )}
          </div>
          <div>
            <Input
              type="number"
              placeholder="Threshold"
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
