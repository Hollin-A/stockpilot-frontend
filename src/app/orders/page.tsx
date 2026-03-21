"use client";

import DashboardLayout from "@/components/layout/dashboard-layout";
import { useProducts } from "@/features/products/hooks/use-products";
import ProductList from "@/features/orders/components/product-list";
import Cart from "@/features/orders/components/cart";
import { useCart } from "@/features/orders/hooks/use-cart";
import { createOrder } from "@/features/orders/api";

export default function OrdersPage() {
  const { data: products, isLoading } = useProducts();
  const cart = useCart();

  if (isLoading) return <p>Loading...</p>;

  const handleCreateOrder = async () => {
    await createOrder(cart.items);
    alert("Order created");
  };

  return (
    <DashboardLayout>
      <div className="grid grid-cols-2 gap-6">
        <ProductList products={products} addItem={cart.addItem} />

        <Cart
          items={cart.items}
          total={cart.total}
          updateQuantity={cart.updateQuantity}
          createOrder={handleCreateOrder}
        />
      </div>
    </DashboardLayout>
  );
}
