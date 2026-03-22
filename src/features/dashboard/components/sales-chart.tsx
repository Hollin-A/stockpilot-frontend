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

export default function SalesChart({ data }: any) {
  // fallback data (until backend aggregation is added)
  const chartData = data?.length
    ? data
    : [
        { name: "Mon", revenue: 120 },
        { name: "Tue", revenue: 210 },
        { name: "Wed", revenue: 180 },
        { name: "Thu", revenue: 260 },
        { name: "Fri", revenue: 300 },
        { name: "Sat", revenue: 280 },
        { name: "Sun", revenue: 350 },
      ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue Overview</CardTitle>
      </CardHeader>

      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#2563eb"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
