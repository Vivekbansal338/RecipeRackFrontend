// // Posts per month bar chart
// import { BarChart, Bar, ResponsiveContainer } from "recharts";
// import "./BarChart.css";

// const BarChartcom = ({ data }) => {
//   return (
//     <ResponsiveContainer width="100%" height={300}>
//       <BarChart data={data}>
//         <Bar dataKey="posts" fill="#4BC0C0" />
//       </BarChart>
//     </ResponsiveContainer>
//   );
// };

// export default BarChartcom;

import { BarChart, Bar, ResponsiveContainer, Legend } from "recharts";
import "./BarChart.css";

const BarChartcom = ({ data }) => {
  return (
    <div className="bar-chart-container">
      <div className="bar-chart-wrapper">
        <div className="bar-chart-title">Posts per month</div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <Bar dataKey="posts" fill="#4BC0C0" />
            <Legend position="top" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartcom;
