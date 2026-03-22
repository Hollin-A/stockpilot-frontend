"use client";

import DashboardLayout from "@/components/layout/dashboard-layout";
import Metrics from "../../features/dashboard/components/metrics";
import { useSales } from "@/features/dashboard/hooks/use-sales";
import { useEffect } from "react";

export default function DashboardPage() {
  const { data, isLoading, isError } = useSales();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/login";
    }
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Failed to load sales data. Please try again.</p>;

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold text-slate-700">Dashboard</h1>

      <Metrics sales={data} />
    </DashboardLayout>
  );
}
