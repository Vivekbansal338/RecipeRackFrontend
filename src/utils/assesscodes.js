// facebook
// app id : 172433922509367
// app secret : 882ebec796bb024a998d8bddcbe711d9
// access token : EAACc0ZBayyjcBAPgFfHDscmurwbAvIaCIoKpmtklj3klyi0rHJVj65WP6N1WF3URDI49mqVwHlLImU4guxsN3L79kDi8HhSAdZAcFgQS9ZCWjHZBmZBAApqTIud48LXmMWN6MoZCdN3rMB5XOML5EjSW4AbBQO6JHF0dJFa8YIkt43FCL1uOWQPvE8dBRTjKjAZAAZCT7axu42QxXJj1R6bV2SpLuZADb9fF4Tz7LQkCVg4LIpOYOvLs6

// twitter

// api key : B4G3lXE8d4XFAjFCjQCIhdYVL
// api secret key : 0AVoHXgo8qaRn1TRrjzZLQlIcJXfoayxqtiize7yBHdEU0EJwS
// access token :1267034818765864961-CLzOSCJFConrFnF8AB3kKotcmkdbqS
// access token secret : YJF72claq7tL1JuS4DFXSWhusUfChgUlQ0N0LKCl0VSiy

//json
// depr4bxuil72ulq2r510qxmga3tk2askgtzy7izl

import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";

const FacebookDataComponent = () => {
  const [facebookData, setFacebookData] = useState(null);
  const appId = "172433922509367";
  const appAccessToken =
    "EAACc0ZBayyjcBAPgFfHDscmurwbAvIaCIoKpmtklj3klyi0rHJVj65WP6N1WF3URDI49mqVwHlLImU4guxsN3L79kDi8HhSAdZAcFgQS9ZCWjHZBmZBAApqTIud48LXmMWN6MoZCdN3rMB5XOML5EjSW4AbBQO6JHF0dJFa8YIkt43FCL1uOWQPvE8dBRTjKjAZAAZCT7axu42QxXJj1R6bV2SpLuZADb9fF4Tz7LQkCVg4LIpOYOvLs6";

  const handleFacebookResponse = async (response) => {
    console.log("clicked");
    if (response.status === "connected") {
      const userAccessToken = response.accessToken;
      await fetchUserData(userAccessToken);
    }
  };

  const fetchUserData = async (userAccessToken) => {
    console.log("fetching data");
    const apiEndpoint = `https://graph.facebook.com/v14.0/me?fields=id,name,email&access_token=${userAccessToken}`;

    try {
      const response = await fetch(apiEndpoint);
      const data = await response.json();
      setFacebookData(data);
      console.log("fetched data");
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {facebookData ? (
        <div>
          <h2>{facebookData.name}</h2>
          <p>ID: {facebookData.id}</p>
          <p>Email: {facebookData.email}</p>
        </div>
      ) : (
        <FacebookLogin
          appId={appId}
          fields="name,email"
          callback={handleFacebookResponse}
          scope="public_profile,email"
          authType="rerequest"
          isMobile={false}
          disableMobileRedirect={true}
          redirectUri={window.location.href}
          appAccessToken={appAccessToken}
        />
      )}
    </div>
  );
};

export default FacebookDataComponent;
