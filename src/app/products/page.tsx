"use client";

import DashboardLayout from "@/components/layout/dashboard-layout";
import ProductsTable from "@/features/products/components/products-table";
import { useProducts } from "@/features/products/hooks/use-products";

export default function ProductsPage() {
  const { data, isLoading } = useProducts();

  if (isLoading) return <p>Loading...</p>;

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-6">Products</h1>

      <ProductsTable products={data} />
    </DashboardLayout>
  );
}
