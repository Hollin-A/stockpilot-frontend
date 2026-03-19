"use client";

import DashboardLayout from "@/components/layout/dashboard-layout";
import CreateProductModal from "@/features/products/components/create-product-modal";
import ProductsTable from "@/features/products/components/products-table";
import { useProducts } from "@/features/products/hooks/use-products";

export default function ProductsPage() {
  const { data, isLoading, isError } = useProducts();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Failed to load products. Please try again.</p>;

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-6">Products</h1>

      <CreateProductModal />

      <ProductsTable products={data ?? []} />
    </DashboardLayout>
  );
}
