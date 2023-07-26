import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";

const PostEngagementChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <Line type="monotone" dataKey="likes" stroke="#36A2EB" />
        <Line type="monotone" dataKey="comments" stroke="#FFCE56" />
        <Line type="monotone" dataKey="shares" stroke="#FF5733" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PostEngagementChart;
