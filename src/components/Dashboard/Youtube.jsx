import React, { useState } from "react";
import { google } from "googleapis";

export const YouTubeConnect = () => {
  const [accessToken, setAccessToken] = useState("");

  const handleConnect = async () => {
    // Load the YouTube API client
    const youtube = google.youtube({
      version: "v3",
      auth: accessToken, // Use the access token to authenticate API requests
    });
    try {
      // Use the YouTube API to fetch channel data
      const response = await youtube.channels.list({
        part: "snippet,contentDetails,statistics",
        mine: true, // Fetch data for the user's own channel
      });
      // Handle the response and extract the required data
      const channelData = response.data.items[0];
      const channelId = channelData.id;
      const channelTitle = channelData.snippet.title;
      const subscriberCount = channelData.statistics.subscriberCount;
      // ...
      // Do further processing with the fetched data
      console.log("Channel ID:", channelId);
      console.log("Channel Title:", channelTitle);
      console.log("Subscriber Count:", subscriberCount);
      // ...
    } catch (error) {
      console.error("Error fetching YouTube channel data:", error);
    }
  };

  // return (
  //   <div>
  //     <h2>Connect Your YouTube Channel</h2>
  //     {accessToken ? (
  //       <button onClick={handleConnect}>Fetch Channel Data</button>
  //     ) : (
  //       <button
  //         onClick={() => {
  //           // Redirect the user to the Google OAuth consent screen for YouTube
  //           window.location.href =
  //             "https://accounts.google.com/o/oauth2/auth?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&scope=https://www.googleapis.com/auth/youtube.readonly&response_type=token";
  //         }}
  //       >
  //         Connect with YouTube
  //       </button>
  //     )}
  //   </div>
  // );

  return (
    <div>
      <h2>Connect Your YouTube Channel</h2>
      {accessToken ? (
        <button
          onClick={() => {
            console.log("hello");
          }}
        >
          Fetch Channel Data
        </button>
      ) : (
        <button
          onClick={() => {
            console.log("hello");
          }}
        >
          Connect with YouTube
        </button>
      )}
    </div>
  );
};
