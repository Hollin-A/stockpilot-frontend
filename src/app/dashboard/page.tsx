"use client";

import DashboardLayout from "@/components/layout/dashboard-layout";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardPage() {
  const [sales, setSales] = useState<any>(null);

  useEffect(() => {
    api.get("/analytics/sales").then((res) => {
      setSales(res.data);
    });
  }, []);

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold text-slate-700">Dashboard</h1>

      {sales && (
        <div>
          <p>Total Orders: {sales.totalOrders}</p>
          <p>Total Revenue: {sales.totalRevenue}</p>
        </div>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Total Revenue</CardTitle>
        </CardHeader>

        <CardContent>$500</CardContent>
      </Card>
    </DashboardLayout>
  );
}
