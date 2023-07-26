// AIzaSyCamsjNp_qO4kLQxm8r - KcrqHckhACV43g;

// import React, { useState } from "react";
// import FacebookLogin from "react-facebook-login";

// const FacebookDataComponent = () => {
//   const [facebookData, setFacebookData] = useState(null);
//   const appId = "172433922509367";
//   const appAccessToken =
//     "EAACc0ZBayyjcBAPgFfHDscmurwbAvIaCIoKpmtklj3klyi0rHJVj65WP6N1WF3URDI49mqVwHlLImU4guxsN3L79kDi8HhSAdZAcFgQS9ZCWjHZBmZBAApqTIud48LXmMWN6MoZCdN3rMB5XOML5EjSW4AbBQO6JHF0dJFa8YIkt43FCL1uOWQPvE8dBRTjKjAZAAZCT7axu42QxXJj1R6bV2SpLuZADb9fF4Tz7LQkCVg4LIpOYOvLs6";

//   const handleFacebookResponse = (response) => {
//     console.log("clicked");
//     if (response.status === "connected") {
//       const userAccessToken = response.accessToken;
//       fetchUserData(userAccessToken);
//     }
//   };

//   const fetchUserData = (userAccessToken) => {
//     console.log("fetching data");
//     const apiEndpoint = `https://graph.facebook.com/v14.0/me?fields=id,name,email&access_token=${userAccessToken}`;
//     fetch(apiEndpoint)
//       .then((response) => response.json())
//       .then((data) => {
//         setFacebookData(data);
//         console.log("fetched data");
//         console.log(data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   return (
//     <div>
//       {facebookData ? (
//         <div>
//           <h2>{facebookData.name}</h2>
//           <p>ID: {facebookData.id}</p>
//           <p>Email: {facebookData.email}</p>
//         </div>
//       ) : (
//         <FacebookLogin
//           appId={appId}
//           fields="name,email"
//           callback={handleFacebookResponse}
//           scope="public_profile,email"
//           authType="rerequest"
//           isMobile={false}
//           disableMobileRedirect={true}
//           redirectUri={window.location.href}
//           appAccessToken={appAccessToken}
//         />
//       )}
//     </div>
//   );
// };

// export default FacebookDataComponent;
