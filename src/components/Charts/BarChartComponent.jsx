// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Cell,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// const BarChartComponent = ({ outputdata, backgroundColor }) => {
//   return (
//     <div
//       style={{
//         width: "100%",
//         height: "400px",
//         background: "linear-gradient(to right, #f7efff, #dbf3fa)",
//       }}
//     >
//       <h2 style={{ textAlign: "center", margin: "20px 0" }}>
//         Daily Nutrient Intake
//       </h2>
//       <ResponsiveContainer>
//         <BarChart
//           data={outputdata}
//           barCategoryGap={8}
//           margin={{
//             top: 5,
//             right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//         >
//           <XAxis dataKey="name" angle={-45} />
//           <YAxis tickFormatter={(value) => `${value}g`} />
//           <Tooltip
//             contentStyle={{ backgroundColor: "#fff", border: "1px solid #ccc" }}
//           />
//           <Legend onClick={() => {}} />
//           <Bar dataKey="value" fill="#8884d8">
//             {outputdata.map((entry, index) => (
//               <Cell
//                 key={`cell-${index}`}
//                 fill={backgroundColor[index % backgroundColor.length]}
//               />
//             ))}
//           </Bar>
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default React.memo(BarChartComponent);

// import React from "react";
// import { VictoryBar, VictoryChart, VictoryAxis, VictoryTooltip } from "victory";

// const BarChartComponent = ({ outputdata, backgroundColor }) => {
//   return (
//     <div style={{ width: "100%", height: "400px" }}>
//       <h2 style={{ textAlign: "center", margin: "20px 0" }}>
//         Daily Nutrient Intake
//       </h2>
//       <VictoryChart
//         domainPadding={{ x: 50 }}
//         padding={{ top: 50, bottom: 50, left: 80, right: 50 }}
//         height={400}
//         width={800}
//       >
//         <VictoryAxis
//           tickValues={outputdata.map((data) => data.name)}
//           style={{
//             tickLabels: {
//               fontSize: 14,
//               padding: 5,
//               angle: -45,
//               textAnchor: "end",
//             },
//           }}
//         />
//         <VictoryAxis
//           dependentAxis
//           tickFormat={(value) => `${value}g`}
//           style={{
//             tickLabels: {
//               fontSize: 14,
//               padding: 5,
//             },
//           }}
//         />
//         <VictoryBar
//           data={outputdata}
//           x="name"
//           y="value"
//           style={{
//             data: {
//               fill: ({ index }) =>
//                 backgroundColor[index % backgroundColor.length],
//             },
//             labels: {
//               fontSize: 14,
//             },
//           }}
//           labelComponent={
//             <VictoryTooltip
//               style={{ fontSize: 14 }}
//               cornerRadius={5}
//               flyoutStyle={{ stroke: "none", fill: "#fff" }}
//             />
//           }
//         />
//       </VictoryChart>
//     </div>
//   );
// };

// export default React.memo(BarChartComponent);

import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTooltip,
  VictoryLabel,
  VictoryTheme,
  VictoryLegend,
} from "victory";

const BarChartComponent = ({ outputdata, backgroundColor, label }) => {
  const legendData = outputdata.map((data) => ({
    name: data.name,
    symbol: { fill: backgroundColor[outputdata.indexOf(data)] },
  }));

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <VictoryChart
        domainPadding={{ x: 50 }}
        padding={{ top: 50, bottom: 50, left: 80, right: 50 }}
        height={400}
        width={800}
        theme={VictoryTheme.material}
        style={{
          background: { fill: "#f5f5f5" },
          parent: { border: "1px solid #ccc" },
        }}
      >
        <VictoryLabel
          text={label}
          x={400}
          y={30}
          textAnchor="middle"
          style={{ fontSize: 20 }}
        />
        <VictoryAxis
          tickValues={outputdata.map((data) => data.name)}
          style={{
            tickLabels: {
              fontSize: 7,
              padding: 5,
              angle: -45,
              textAnchor: "end",
            },
          }}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(value) => `${value}mg`}
          style={{
            tickLabels: {
              fontSize: 14,
              padding: 5,
            },
          }}
        />
        <VictoryBar
          barWidth={30}
          data={outputdata}
          x="name"
          y="value"
          style={{
            data: {
              fill: ({ index }) =>
                backgroundColor[index % backgroundColor.length],
            },
            labels: {
              fontSize: 14,
            },
          }}
          labelComponent={
            <VictoryTooltip
              style={{ fontSize: 14 }}
              cornerRadius={5}
              flyoutStyle={{ stroke: "none", fill: "#fff" }}
            />
          }
        />
        {/* <VictoryLegend
          x={650}
          y={50}
          orientation="vertical"
          gutter={20}
          data={legendData}
          style={{ labels: { fontSize: 14 } }}
        /> */}
      </VictoryChart>
    </div>
  );
};

export default React.memo(BarChartComponent);
