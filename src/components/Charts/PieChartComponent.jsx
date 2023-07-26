import React from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";
import { createnutrientData } from "../../utils/chartdatafunction";

function PieChartComponent({ data }) {
  const { outputdata, backgroundColor } = createnutrientData(data);
  return (
    <PieChart width={800} height={600}>
      <Pie
        data={outputdata}
        cx={200}
        cy={200}
        labelLine={false}
        outerRadius={150}
        fill="#8884d8"
        dataKey="value"
      >
        {outputdata.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={backgroundColor[index % backgroundColor.length]}
          />
        ))}
      </Pie>
      <Legend verticalAlign="bottom" height={36} />
    </PieChart>
  );
}

export default PieChartComponent;
