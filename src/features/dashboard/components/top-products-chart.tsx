"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { TopProductEntry } from "@/lib/types";

interface TopProductsChartProps {
  data: TopProductEntry[];
}

export default function TopProductsChart({ data }: TopProductsChartProps) {
  const chartData = data.map((p) => ({
    name: p.name,
    qty: p.totalQuantitySold,
  }));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Products</CardTitle>
      </CardHeader>

      <CardContent className="h-[300px]">
        {chartData.length === 0 ? (
          <p className="text-sm text-slate-400 mt-4">No product data yet.</p>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="qty" fill="#22c55e" />
            </BarChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  );
}
