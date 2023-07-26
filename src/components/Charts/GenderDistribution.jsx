import React from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";

const GenderDistributionChart = ({ data }) => {
  const tempdata = [
    { name: "Male", value: 30 },
    { name: "Female", value: 45 },
    { name: "Other", value: 15 },
    { name: "Unknown", value: 10 },
  ];
  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#8884d8", "#82ca9d"]; // Custom colors for the pie slices
  return (
    <PieChart width={400} height={300}>
      <Pie
        data={tempdata}
        cx={200}
        cy={150}
        labelLine={false}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {tempdata.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend verticalAlign="bottom" height={36} />
    </PieChart>
  );
};

export default GenderDistributionChart;
