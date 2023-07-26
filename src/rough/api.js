// async function fetchrecipedetails(e) {
//   e.stopPropagation();
//   const appId = "b591497d";
//   const appKey = "5f0ae886b1f70bc664ff385da7f5236f";
//   const url = `https://api.edamam.com/api/recipes/v2/recipe_1b6dfeaf0988f96b187c7c9bb69a14fa?type=public&app_id=${appId}&app_key=${appKey}`;
//   const data = await fetch(url);
//   const response = await data.json();
//   console.log("getting details", response);
// }

// export async function getSearchQuery(searchQuery) {
//   const appId = "b591497d";
//   const appKey = "ec3f57297e21287c0143299c8810af50";
//   const apiurl1 = `https://api.edamam.com/search?q=${searchQuery}&app_id=${appId}&app_key=${appKey}`;
//   const apiurl2 = `https://forkify-api.herokuapp.com/api/search?q=${searchQuery}`;
//   try {
//     const response = await fetch(apiurl1);
//     const data = await response.json();
//     console.log("inside fun ", searchQuery, data);
//     if (data.error) {
//       throw new Error(data.error);
//     }

//     // Format the JSON data with indentation
//     const formattedData = JSON.stringify(data, null, 2);

//     // Create a temporary HTML element
//     const element = document.createElement("a");
//     element.href = URL.createObjectURL(
//       new Blob([formattedData], { type: "text/plain" })
//     );
//     element.download = "searchResults.txt";
//     element.style.display = "none";

//     // Add the element to the DOM and trigger the click event to download the file
//     document.body.appendChild(element);
//     element.click();

//     // Clean up the temporary element
//     document.body.removeChild(element);

//     return data;
//   } catch (error) {
//     console.log("error", error);
//     throw new Error(error.message);
//   }
// }
