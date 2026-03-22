"use client";

import DashboardLayout from "@/components/layout/dashboard-layout";
import CreateProductModal from "@/features/products/components/create-product-modal";
import ProductsTable from "@/features/products/components/products-table";
import { useProducts } from "@/features/products/hooks/use-products";
import { Button } from "@/components/ui/button";

export default function ProductsPage() {
  const { data, isLoading, isError, refetch } = useProducts();

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Products</h1>
        <CreateProductModal />
      </div>

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

      {data && <ProductsTable products={data} />}
    </DashboardLayout>
  );
}
