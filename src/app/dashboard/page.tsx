"use client";

import DashboardLayout from "@/components/layout/dashboard-layout";
import Metrics from "../../features/dashboard/components/metrics";
import { useSales } from "@/features/dashboard/hooks/use-sales";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const { data, isLoading, isError, refetch } = useSales();

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

      {data && <Metrics sales={data} />}
    </DashboardLayout>
  );
}
