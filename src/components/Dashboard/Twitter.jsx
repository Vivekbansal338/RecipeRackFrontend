import React, { useState } from "react";
import TwitterLogin from "react-twitter-login";

const TwitterDataComponent = () => {
  const [twitterData, setTwitterData] = useState(null);
  const consumerKey = "B4G3lXE8d4XFAjFCjQCIhdYVL";
  const consumerSecret = "0AVoHXgo8qaRn1TRrjzZLQlIcJXfoayxqtiize7yBHdEU0EJwS";
  const accessToken = "1267034818765864961-CLzOSCJFConrFnF8AB3kKotcmkdbqS";
  const accessTokenSecret = "YJF72claq7tL1JuS4DFXSWhusUfChgUlQ0N0LKCl0VSiy";

  const handleTwitterResponse = (response) => {
    console.log("clicked");
    if (response.oauth_token) {
      const userAccessToken = response.oauth_token;
      const userAccessSecret = response.oauth_token_secret;
      fetchUserData(userAccessToken, userAccessSecret);
    }
  };

  const fetchUserData = (userAccessToken, userAccessSecret) => {
    console.log("fetching data");
    const apiEndpoint =
      "https://api.twitter.com/1.1/account/verify_credentials.json";
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${userAccessToken}`,
      },
    };

    fetch(apiEndpoint, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setTwitterData(data);
        console.log("fetched data");
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      {twitterData ? (
        <div>
          <h2>{twitterData.name}</h2>
          <p>ID: {twitterData.id}</p>
          <p>Email: {twitterData.email}</p>
        </div>
      ) : (
        <TwitterLogin
          authCallback={handleTwitterResponse}
          consumerKey={consumerKey}
          consumerSecret={consumerSecret}
          accessToken={accessToken}
          accessTokenSecret={accessTokenSecret}
        />
      )}
    </div>
  );
};

export default TwitterDataComponent;
