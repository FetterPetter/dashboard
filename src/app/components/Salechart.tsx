// src/app/components/Salechart.tsx
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { month: "Jan", sales: 8000, visits: 22000 },
  { month: "Feb", sales: 9000, visits: 20000 },
  { month: "Mar", sales: 7000, visits: 21000 },
  { month: "Apr", sales: 10000, visits: 19000 },
  { month: "Mai", sales: 12000, visits: 23000 },
  { month: "Jun", sales: 9000, visits: 21000 },
  { month: "Jul", sales: 11000, visits: 20000 },
  { month: "Aug", sales: 13000, visits: 24000 },
  { month: "Sep", sales: 10000, visits: 22000 },
  { month: "Okt", sales: 14000, visits: 26000 },
  { month: "Nov", sales: 16000, visits: 28000 },
  { month: "Des", sales: 20000, visits: 30000 },
];

const Salechart: React.FC = () => {
  return (
    <div className="card sales-chart">
      <h2>Salg over tid</h2>
      <ResponsiveContainer width="100%" height={260}>
        <LineChart
          data={data}
          margin={{ top: 16, right: 24, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis tickFormatter={(v) => `${v / 1000}k`} />
          <Tooltip
            formatter={(value) =>
              typeof value === "number" ? value.toLocaleString("nb-NO") : value
            }
          />

          <Legend />
          <Line
            type="monotone"
            dataKey="sales"
            name="Salg"
            stroke="#ff4b81"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="visits"
            name="Besøk"
            stroke="#c4c4c4"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Salechart;
