"use client";

import DashboardLayout from "@/components/layout/dashboard-layout";
import Metrics from "../../features/dashboard/components/metrics";
import { useSales } from "@/features/dashboard/hooks/use-sales";

export default function DashboardPage() {
  const { data, isLoading, isError } = useSales();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Failed to load sales data. Please try again.</p>;

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold text-slate-700">Dashboard</h1>

      <Metrics sales={data} />
    </DashboardLayout>
  );
}
