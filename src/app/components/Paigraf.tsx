import React from "react";
import { PieChart as RePieChart, Pie, Cell, Label } from "recharts";

interface PaigrafProps {
    salg: number;
    visning: number;
}

const COLORS = ['#ef4444', '#ddd'];

export function Paigraf({ salg, visning }: PaigrafProps) {
    const conversionData = [
        { name: 'Salg', value: salg },
        { name: 'Klikk uten salg', value: visning - salg }
    ];
    const conversionRate = Math.round((salg / visning) * 100);
    return (
        <RePieChart width={200} height={200}>
            <Pie
                data={conversionData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={70}
                innerRadius={50}
                label={false}
            >
                {conversionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
                <Label
                    value={`${conversionRate}%`}
                    position="center"
                    fontSize={20}
                    fill="#ef4444"
                />
            </Pie>
        </RePieChart>
    );
}
