// const appId = "b591497d";
// const appKey = "5f0ae886b1f70bc664ff385da7f5236f";

const appId = process.env.REACT_APP_APP_ID;
const appKey = process.env.REACT_APP_APP_KEY;

export async function getSearchQuery(searchQuery, nextPageUrl = null) {
  let apiurl = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchQuery}&app_id=${appId}&app_key=${appKey}`;
  if (nextPageUrl) {
    apiurl = nextPageUrl;
  }

  try {
    const response = await fetch(apiurl);
    const data = await response.json();

    if (data.error) {
      throw new Error(data.error);
    }
    return data;
  } catch (error) {
    console.log("error", error);
    throw new Error(error.message);
  }
}

export async function getRecipeDetailQuery(recipeId) {
  const lastHashIndex = recipeId.lastIndexOf("#");
  const Id = recipeId.substring(lastHashIndex + 1);

  const apiurl = `https://api.edamam.com/api/recipes/v2/${Id}?type=public&app_id=${appId}&app_key=${appKey}`;
  console.log("inside fun recipedetails ", apiurl);
  try {
    const response = await fetch(apiurl);
    const data = await response.json();
    if (data.error) {
      throw new Error(data.error);
    }
    return data;
  } catch (error) {
    console.log("error", error);
    throw new Error(error.message);
  }
}

export async function getPurchasedrecipe(userid) {
  if (!userid) {
    return null;
  }
  let apiurl = `https://recipe-rackbackend.vercel.app/api/v2/purchases/${userid}`;
  try {
    const response = await fetch(apiurl);
    const data = await response.json();
    if (data.error) {
      throw new Error(data.error);
    }
    return data;
  } catch (error) {
    console.log("error", error);
    throw new Error(error.message);
  }
}
