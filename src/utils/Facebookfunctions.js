export const getPostsPerMonth = (data) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const postsPerMonth = [];
  for (let i = 0; i < data.posts.length; i++) {
    const post = data.posts[i];
    const month = post.created_time.split("-")[1];
    const monthIndex = parseInt(month) - 1;
    if (postsPerMonth[monthIndex]) {
      postsPerMonth[monthIndex].posts += 1;
    } else {
      postsPerMonth[monthIndex] = { name: months[monthIndex], posts: 1 };
    }
  }
  return postsPerMonth;
};

export const getLikeCommShare = (data) => {
  let likes = 0;
  let comments = 0;
  let shares = 0;

  for (let i = 0; i < data.posts.length; i++) {
    likes = likes + data.posts[i].likes;
    comments = comments + data.posts[i].comments;
    shares = shares + data.posts[i].shares;
  }
  return [
    { name: "Likes", value: likes },
    { name: "Shares", value: shares },
    { name: "Comments", value: comments },
  ];
};

export const getPostEngagement = (data) => {
  const postEngagement = [];
  for (let i = 0; i < data.posts.length; i++) {
    const likes = data.posts[i].likes;
    const comments = data.posts[i].comments;
    const shares = data.posts[i].shares;

    postEngagement.push({
      name: "Post " + (i + 1),
      likes: likes,
      comments: comments,
      shares: shares,
    });
  }
  return postEngagement;
};

export const getGenderDistribution = (data) => {
  let males = 0;
  let females = 0;
  let others = 0;
  for (let i = 0; i < data.friends.length; i++) {
    if (data.friends[i].gender === "male") males = males + 1;
    if (data.friends[i].gender === "female") females = females + 1;
    else others = others + 1;
  }
  return [
    { name: "Male", value: males },
    { name: "Female", value: females },
    { name: "Others", value: others },
  ];
};

// [
//   {
//     "id": "64b2f0b09ad92c812300f0d6",
//     "name": "Bailey Cain",
//     "email": "Orr.Bass@example.com",
//     "gender": "female",
//     "age": 33,
//     "city": "Lookingglass",
//     "country": "Tajikistan",
//     "education": [
//       {
//         "id": "64b2f0b00f09e554b2e2e064",
//         "school": "Eargo",
//         "degree": "Bachelor of Science",
//         "field_of_study": "Engineering",
//         "start_year": 2009,
//         "end_year": 2021
//       },
//       {
//         "id": "64b2f0b0ace66dde3fe15ecc",
//         "school": "Xyqag",
//         "degree": "Master of Science",
//         "field_of_study": "Engineering",
//         "start_year": 2006,
//         "end_year": 2016
//       }
//     ],
//     "work": [
//       {
//         "id": "64b2f0b02e5a641d94967589",
//         "company": "Snacktion",
//         "position": "Data Scientist",
//         "start_year": 2010,
//         "end_year": 2018
//       },
//       {
//         "id": "64b2f0b057dbcd905bd266ee",
//         "company": "Zenthall",
//         "position": "Data Scientist",
//         "start_year": 2011,
//         "end_year": 2020
//       }
//     ],
//     "posts": [
//       {
//         "id": "64b2f0b04604d9481f6f99ac",
//         "message": "Elit pariatur in voluptate qui labore in culpa commodo ipsum enim dolore consectetur qui.",
//         "created_time": "2021-09-17T18:57:34.452Z",
//         "likes": 93,
//         "comments": 24,
//         "shares": 6,
//         "media": "https://picsum.photos/800/600"
//       },
//       {
//         "id": "64b2f0b03a7c0657c88dabcc",
//         "message": "Eu aliqua laborum ea exercitation duis eu pariatur culpa et Lorem laboris ut commodo fugiat.",
//         "created_time": "2022-03-14T23:59:20.311Z",
//         "likes": 22,
//         "comments": 22,
//         "shares": 6,
//         "media": "https://picsum.photos/800/800"
//       },
//       {
//         "id": "64b2f0b0dd23021dc16d98f0",
//         "message": "Enim excepteur ipsum id aliqua labore enim nostrud.",
//         "created_time": "2023-06-12T09:09:04.710Z",
//         "likes": 51,
//         "comments": 12,
//         "shares": 5,
//         "media": "https://picsum.photos/800/800"
//       },
//       {
//         "id": "64b2f0b051102e33e9db7bbb",
//         "message": "Minim incididunt ut aliqua ea in pariatur aliquip.",
//         "created_time": "2022-07-20T15:11:58.673Z",
//         "likes": 91,
//         "comments": 16,
//         "shares": 0,
//         "media": "https://picsum.photos/800/800"
//       },
//       {
//         "id": "64b2f0b078a8615c7b4bf843",
//         "message": "Laboris id ipsum elit ea.",
//         "created_time": "2021-04-10T13:29:22.482Z",
//         "likes": 55,
//         "comments": 3,
//         "shares": 7,
//         "media": "https://picsum.photos/600/800"
//       },
//       {
//         "id": "64b2f0b044de92f137c550a4",
//         "message": "Fugiat non occaecat ex commodo enim amet irure ut excepteur amet.",
//         "created_time": "2022-07-01T21:51:41.649Z",
//         "likes": 36,
//         "comments": 13,
//         "shares": 9,
//         "media": "https://picsum.photos/800/800"
//       },
//       {
//         "id": "64b2f0b0223ed7dce1786bbd",
//         "message": "Magna sint aute aliquip aliquip non.",
//         "created_time": "2021-02-22T18:26:25.628Z",
//         "likes": 88,
//         "comments": 32,
//         "shares": 0,
//         "media": "https://picsum.photos/800/800"
//       },
//       {
//         "id": "64b2f0b0c93cc95c617bfe1a",
//         "message": "Eu reprehenderit amet et esse nisi consequat aute ut reprehenderit eu ut dolore nisi officia.",
//         "created_time": "2021-01-02T03:39:44.570Z",
//         "likes": 33,
//         "comments": 40,
//         "shares": 6,
//         "media": "https://picsum.photos/600/800"
//       },
//       {
//         "id": "64b2f0b0a79825a50f8eeb51",
//         "message": "Et velit consectetur cillum consectetur pariatur excepteur irure occaecat ut do ipsum ea nisi.",
//         "created_time": "2022-05-21T00:02:03.842Z",
//         "likes": 26,
//         "comments": 36,
//         "shares": 9,
//         "media": "https://picsum.photos/800/600"
//       },
//       {
//         "id": "64b2f0b090183212eb200ed0",
//         "message": "Quis labore nisi qui amet excepteur.",
//         "created_time": "2021-06-29T18:48:12.177Z",
//         "likes": 31,
//         "comments": 34,
//         "shares": 7,
//         "media": "https://picsum.photos/800/600"
//       }
//     ],
//     "friends": [
//       {
//         "id": "64b2f0b00bc7d2181f98eb67",
//         "name": "Maynard Ryan",
//         "profile_picture": "https://randomuser.me/api/portraits/men/1.jpg",
//         "gender": "female"
//       },
//       {
//         "id": "64b2f0b00ccca6a5d33b9d56",
//         "name": "Laverne Bolton",
//         "profile_picture": "https://randomuser.me/api/portraits/women/1.jpg",
//         "gender": "female"
//       },
//       {
//         "id": "64b2f0b0b31da15c597e4450",
//         "name": "Rojas Henry",
//         "profile_picture": "https://randomuser.me/api/portraits/men/1.jpg",
//         "gender": "male"
//       },
//       {
//         "id": "64b2f0b0742911c359d988d6",
//         "name": "Pamela Carson",
//         "profile_picture": "https://randomuser.me/api/portraits/men/1.jpg",
//         "gender": "male"
//       },
//       {
//         "id": "64b2f0b010b687df8ee07e01",
//         "name": "Socorro Spears",
//         "profile_picture": "https://randomuser.me/api/portraits/men/1.jpg",
//         "gender": "female"
//       },
//       {
//         "id": "64b2f0b0015cdf10c48dbc82",
//         "name": "Baxter Webb",
//         "profile_picture": "https://randomuser.me/api/portraits/men/1.jpg",
//         "gender": "male"
//       },
//       {
//         "id": "64b2f0b00af40238cb11b250",
//         "name": "Cunningham Hebert",
//         "profile_picture": "https://randomuser.me/api/portraits/women/1.jpg",
//         "gender": "female"
//       },
//       {
//         "id": "64b2f0b0fce7644ef88f0ec2",
//         "name": "Taylor Holloway",
//         "profile_picture": "https://randomuser.me/api/portraits/women/1.jpg",
//         "gender": "other"
//       },
//       {
//         "id": "64b2f0b05db0794db83d05b3",
//         "name": "Lauren Maldonado",
//         "profile_picture": "https://randomuser.me/api/portraits/women/1.jpg",
//         "gender": "other"
//       },
//       {
//         "id": "64b2f0b033433c5fc1ce337d",
//         "name": "Sweeney Gregory",
//         "profile_picture": "https://randomuser.me/api/portraits/men/1.jpg",
//         "gender": "other"
//       }
//     ]
//   }
// ]
