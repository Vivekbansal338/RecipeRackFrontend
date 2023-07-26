import { ResponsiveContainer } from "recharts";
import { RechartsGraph } from "recharts-network";

const data = {
  nodes: [
    { id: "Node 1" },
    { id: "Node 2" },
    { id: "Node 3" },
    { id: "Node 4" },
    { id: "Node 5" },
  ],
  edges: [
    { from: "Node 1", to: "Node 2" },
    { from: "Node 1", to: "Node 3" },
    { from: "Node 2", to: "Node 4" },
    { from: "Node 4", to: "Node 5" },
  ],
};

const FriendsNetworkChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsGraph
        data={data}
        linksSource="from"
        linksTarget="to"
        directed
        tooltip
      />
    </ResponsiveContainer>
  );
};

export default FriendsNetworkChart;
