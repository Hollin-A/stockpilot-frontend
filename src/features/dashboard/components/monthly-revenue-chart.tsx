"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MonthlyRevenueEntry } from "@/lib/types";

interface MonthlyRevenueChartProps {
  data: MonthlyRevenueEntry[];
}

export default function MonthlyRevenueChart({ data }: MonthlyRevenueChartProps) {
  const chartData = data.map((d) => ({
    name: d.month,
    revenue: d.revenue,
  }));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly Revenue</CardTitle>
      </CardHeader>

      <CardContent className="h-[300px]">
        {chartData.length === 0 ? (
          <p className="text-sm text-slate-400 mt-4">No monthly data yet.</p>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#9333ea"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  );
}
