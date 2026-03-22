"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SalesData } from "@/lib/types";

interface MetricsProps {
  sales: SalesData;
}

export default function Metrics({ sales }: MetricsProps) {
  return (
    <div className="grid grid-cols-4 gap-6 mb-6">
      <Card>
        <CardHeader>
          <CardTitle>Total Revenue</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-bold">
          ${sales?.totalRevenue || 0}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Total Orders</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-bold">
          {sales?.totalOrders || 0}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Products</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-bold">--</CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Low Stock</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-bold text-red-500">
          --
        </CardContent>
      </Card>
    </div>
  );
}
