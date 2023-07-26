import React, { useEffect, useState } from "react";
import "./Facebook.css";
import BarChart from "../Charts/BarChart";
import LikesCommentsChart from "../Charts/LikesCommentsChart";
import PostEngagementChart from "../Charts/PostEngagementChart";
import GenderDistributionChart from "../Charts/GenderDistribution";
// import FriendsNetworkChart from "../Charts/FriendsNetworkChart";
import {
  getPostsPerMonth,
  getLikeCommShare,
  getPostEngagement,
  getGenderDistribution,
} from "../../utils/Facebookfunctions";

const FacebookDataComponent = ({ data }) => {
  console.log(data, "hello");
  const [postsPerMonth, setPostsPerMonth] = useState([]);
  const [LikeCommShare, setLikeCommShare] = useState([]);
  const [PostEngagement, setPostEngagement] = useState([]);
  const [GenderDistribution, setGenderDistribution] = useState([]);

  useEffect(() => {
    setPostsPerMonth(getPostsPerMonth(data));
    setLikeCommShare(getLikeCommShare(data));
    setPostEngagement(getPostEngagement(data));
    setGenderDistribution(getGenderDistribution(data));
  }, [data]);

  return (
    <div>
      <BarChart data={postsPerMonth} />
      <LikesCommentsChart data={LikeCommShare} />
      <PostEngagementChart data={PostEngagement} />
      <GenderDistributionChart data={GenderDistribution} />
      {/* <FriendsNetworkChart /> */}
    </div>
  );
};

export default FacebookDataComponent;
