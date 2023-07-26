import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  results: [],
  isLoading: false,
  error: null,
};

const bookmarkdataSlice = createSlice({
  name: "bookmarkdata",
  initialState: initialState,
  reducers: {
    addBookmark: (state, action) => {
      state.results.push(action.payload);
    },
    removeBookmark: (state, action) => {
      state.results = state.results.filter(
        (bookmark) => bookmark.uri !== action.payload
      );
    },
    loadBookmark: (state, action) => {
      for (let i = 0; i < action.payload.length; i++) {
        state.results.push(action.payload[i]);
      }
    },
    clearBookmarks: (state) => {
      state.results = [];
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

async function addbookmarkbackend(userid, recipedata) {
  const response = await fetch(
    "https://recipe-rackbackend.vercel.app/api/v2/favorities/add",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userid,
        recipedata: recipedata,
      }),
    }
  );
  const data = await response.json();
  return data;
}

export const addBookmarkAsync = (data) => async (dispatch) => {
  const userid = data.userid;
  const recipedata = data.recipedata;
  const response = await addbookmarkbackend(userid, recipedata);
  if (response.status === "success") {
    dispatch(bookmarkdataSlice.actions.addBookmark(recipedata));
    return { success: true };
  } else {
    dispatch(bookmarkdataSlice.actions.setError(response.error));
    throw new Error(response.error.message);
  }
};

async function removebookmarkbackend(userid, recipe_id) {
  const response = await fetch(
    "https://recipe-rackbackend.vercel.app/api/v2/favorities/remove",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userid,
        uri: recipe_id,
      }),
    }
  );
  const data = await response.json();
  return data;
}
export const removeBookmarkAsync = (bookmark) => async (dispatch) => {
  const userid = bookmark.userid;
  const recipe_id = bookmark.recipe_id;
  const response = await removebookmarkbackend(userid, recipe_id);
  if (response.status === "success") {
    dispatch(bookmarkdataSlice.actions.removeBookmark(recipe_id));
    return { success: true };
  } else {
    dispatch(bookmarkdataSlice.actions.setError(response.error));
    throw new Error(response.error.message);
  }
};

async function getAllFavoritesbackend(userId) {
  const response = await fetch(
    `https://recipe-rackbackend.vercel.app/api/v2/favorities/${userId}`
  );
  const data = await response.json();
  return data;
}

export const loadBookmarksAsync = (userid) => async (dispatch) => {
  const response = await getAllFavoritesbackend(userid);
  if (response.status === "success") {
    if (response.data !== null) {
      dispatch(bookmarkdataSlice.actions.loadBookmark(response.data.items));
    }
  } else {
    dispatch(bookmarkdataSlice.actions.setError(response.error));
    throw new Error(response.error.message);
  }
};

export const {
  addBookmark,
  removeBookmark,
  clearBookmarks,
  setLoading,
  setError,
} = bookmarkdataSlice.actions;

export default bookmarkdataSlice.reducer;
