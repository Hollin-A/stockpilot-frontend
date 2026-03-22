"use client";

import { useState } from "react";
import { toast } from "sonner";
import DashboardLayout from "@/components/layout/dashboard-layout";
import { useProducts } from "@/features/products/hooks/use-products";
import ProductList from "@/features/orders/components/product-list";
import Cart from "@/features/orders/components/cart";
import { useCart } from "@/features/orders/hooks/use-cart";
import { createOrder } from "@/features/orders/api";
import { Button } from "@/components/ui/button";

export default function OrdersPage() {
  const { data: products, isLoading, isError, refetch } = useProducts();
  const cart = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCreateOrder = async () => {
    if (cart.items.length === 0) {
      toast.warning("Cart is empty. Add items before creating an order.");
      return;
    }

    setIsSubmitting(true);
    try {
      await createOrder(cart.items);
      cart.clear();
      toast.success("Order created successfully.");
    } catch {
      toast.error("Failed to create order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <DashboardLayout>
      {isLoading && (
        <p className="text-sm text-slate-500">Loading products...</p>
      )}

      {isError && (
        <div className="p-4 border border-red-200 bg-red-50 rounded-lg flex items-center justify-between">
          <p className="text-sm text-red-600">Failed to load products.</p>
          <Button variant="outline" size="sm" onClick={() => refetch()}>
            Retry
          </Button>
        </div>
      )}

      {products && (
        <>
          <h1 className="text-2xl font-bold mb-6">Orders</h1>
          <div className="grid grid-cols-2 gap-6">
          <ProductList products={products} addItem={cart.addItem} />

          <Cart
            items={cart.items}
            total={cart.total}
            updateQuantity={cart.updateQuantity}
            createOrder={handleCreateOrder}
            isSubmitting={isSubmitting}
          />
        </div>
        </>
      )}
    </DashboardLayout>
  );
}
