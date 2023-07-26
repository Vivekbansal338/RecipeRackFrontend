import { useState, useEffect } from "react";

export function useBookmarkStatus(bookmarkedData, recipeId) {
  const [alreadyBookmarked, setAlreadyBookmarked] = useState(false);

  useEffect(() => {
    function checkIfAlreadyBookmarked() {
      for (let i = 0; i < bookmarkedData.results.length; i++) {
        if (bookmarkedData.results[i].uri === recipeId) {
          setAlreadyBookmarked(true);
          return;
        }
      }
      setAlreadyBookmarked(false);
    }
    checkIfAlreadyBookmarked();
  }, [bookmarkedData, recipeId]);

  return [alreadyBookmarked, setAlreadyBookmarked];
}

// import { useState, useEffect } from "react";

// export function useBookmarkStatus(recipeId, userid, handleBookmark) {
//   const [alreadyBookmarked, setAlreadyBookmarked] = useState(false);

//   useEffect(() => {
//     async function checkIfAlreadyBookmarked() {
//       const response = await fetch(
//         "http://localhost:5000/api/v2/favorities/checkBookmark",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             userId: userid,
//             uri: recipeId,
//           }),
//         }
//       );
//       const data = await response.json();
//       if (data.bookmarked) {
//         setAlreadyBookmarked(true);
//       } else {
//         setAlreadyBookmarked(false);
//       }
//     }
//     checkIfAlreadyBookmarked();
//   }, [recipeId, userid, handleBookmark]);

//   return [alreadyBookmarked, setAlreadyBookmarked];
// }
