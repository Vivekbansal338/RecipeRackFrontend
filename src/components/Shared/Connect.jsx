import React, { useState } from "react";

const Connect = ({ Data, setter }) => {
  const { facebookData, twitterData, instagramData, youtubeData } = Data;
  const { setFacebookData, setTwitterData, setInstagramData, setYoutubeData } =
    setter;
  // const [facebookData, setFacebookData] = useState(null);
  // const [twitterData, setTwitterData] = useState(null);
  // const [instagramData, setInstagramData] = useState(null);
  // const [youtubeData, setYoutubeData] = useState(null);

  const fetchUserData = () => {
    console.log("fetching data");
    const facebookEndpoint =
      "https://api.json-generator.com/templates/bR-2mP9YDIZ4/data";
    const twitterEndpoint =
      "https://api.json-generator.com/templates/LyX-9anKwNNX/data";
    const instagramEndpoint =
      "https://api.json-generator.com/templates/hosACBC9jA3H/data";
    const youtubeEndpoint =
      "https://api.json-generator.com/templates/j59vEVumWwV8/data";

    const authToken = "depr4bxuil72ulq2r510qxmga3tk2askgtzy7izl";

    // Fetch Facebook Data
    fetch(facebookEndpoint, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setFacebookData(data[0]);
        console.log(facebookData);
      })
      .catch((error) => {
        console.error(error);
      });

    // Fetch Twitter Data
    fetch(twitterEndpoint, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setTwitterData(data[0]);
        console.log(twitterData);
      })
      .catch((error) => {
        console.error(error);
      });

    // Fetch Instagram Data
    fetch(instagramEndpoint, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setInstagramData(data[0]);
        console.log(instagramData);
      })
      .catch((error) => {
        console.error(error);
      });

    // Fetch YouTube Data
    fetch(youtubeEndpoint, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setYoutubeData(data[0]);
        console.log(youtubeData);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const logdata = () => {
    console.log("facebook", facebookData);
    console.log("twitter", twitterData);
    console.log("instagram", instagramData);
    console.log("youtube", youtubeData);
  };

  return (
    <div>
      <h1 onClick={fetchUserData}>login</h1>
      <h1 onClick={logdata}>log data</h1>
    </div>
  );
};

export default Connect;
