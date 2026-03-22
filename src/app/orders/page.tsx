"use client";

import { useState } from "react";
import DashboardLayout from "@/components/layout/dashboard-layout";
import { useProducts } from "@/features/products/hooks/use-products";
import ProductList from "@/features/orders/components/product-list";
import Cart from "@/features/orders/components/cart";
import { useCart } from "@/features/orders/hooks/use-cart";
import { createOrder } from "@/features/orders/api";

export default function OrdersPage() {
  const { data: products, isLoading, isError } = useProducts();
  const cart = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Failed to load products. Please try again.</p>;

  const handleCreateOrder = async () => {
    if (cart.items.length === 0) {
      alert("Cart is empty. Add items before creating an order.");
      return;
    }

    setIsSubmitting(true);
    try {
      await createOrder(cart.items);
      alert("Order created");
    } catch {
      alert("Failed to create order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="grid grid-cols-2 gap-6">
        <ProductList products={products ?? []} addItem={cart.addItem} />

        <Cart
          items={cart.items}
          total={cart.total}
          updateQuantity={cart.updateQuantity}
          createOrder={handleCreateOrder}
          isSubmitting={isSubmitting}
        />
      </div>
    </DashboardLayout>
  );
}
