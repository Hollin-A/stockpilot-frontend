"use client";

import DashboardLayout from "@/components/layout/dashboard-layout";
import Metrics from "../../features/dashboard/components/metrics";
import { useSales } from "@/features/dashboard/hooks/use-sales";
import { useSalesOverTime } from "@/features/dashboard/hooks/use-sales-over-time";
import { useTopProducts } from "@/features/dashboard/hooks/use-top-products";
import { Button } from "@/components/ui/button";
import SalesChart from "@/features/dashboard/components/sales-chart";
import TopProductsChart from "@/features/dashboard/components/top-products-chart";
import MonthlyRevenueChart from "@/features/dashboard/components/monthly-revenue-chart";
import { useMonthlyRevenue } from "@/features/dashboard/hooks/use-monthly-revenue";

export default function DashboardPage() {
  const { data, isLoading, isError, refetch } = useSales();
  const { data: salesOverTime } = useSalesOverTime();
  const { data: topProducts } = useTopProducts();
  const { data: monthly } = useMonthlyRevenue();

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold text-slate-700">Dashboard</h1>

      {isLoading && (
        <p className="text-sm text-slate-500 mt-4">Loading sales data...</p>
      )}

      {isError && (
        <div className="mt-4 p-4 border border-red-200 bg-red-50 rounded-lg flex items-center justify-between">
          <p className="text-sm text-red-600">Failed to load sales data.</p>
          <Button variant="outline" size="sm" onClick={() => refetch()}>
            Retry
          </Button>
        </div>
      )}

      {data && (
        <>
          <Metrics sales={data} />
          <div className="grid grid-cols-2 gap-6">
            <SalesChart data={salesOverTime ?? []} />
            <TopProductsChart data={topProducts ?? []} />
            <MonthlyRevenueChart data={monthly ?? []} />
          </div>
        </>
      )}
    </DashboardLayout>
  );
}
