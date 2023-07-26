import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 0,
  quantity: 0,
  isLoading: false,
  error: null,
};

const cartdataSlice = createSlice({
  name: "cartdata",
  initialState: initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      state.items.push(item);
      state.total += item.image.length;
      state.quantity += 1;
    },

    removeItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((i) => i.uri === id);
      if (existingItem) {
        state.total -= existingItem.image.length;
        state.items = state.items.filter((i) => i.uri !== id);
        state.quantity -= 1;
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      state.quantity = 0;
    },
    loadCart: (state, action) => {
      state.items = action.payload.items;
      state.total = action.payload.total;
      state.quantity = action.payload.quantity;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

async function addcartitembackend(userid, recipedata) {
  const response = await fetch(
    "https://recipe-rackbackend.vercel.app/api/v2/cart/add",
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
// Async action creator using Redux Thunk
export const addItemAsync = (data) => async (dispatch) => {
  const userid = data.userid;
  const recipedata = data.recipedata;
  const response = await addcartitembackend(userid, recipedata);
  if (response.status === "success") {
    dispatch(cartdataSlice.actions.addItem(recipedata));
    return { success: true };
  } else {
    dispatch(cartdataSlice.actions.setError(response.error));
    throw new Error(response.error.message);
  }
};

async function removecartitembackend(userid, recipe_id, price) {
  const response = await fetch(
    "https://recipe-rackbackend.vercel.app/api/v2/cart/remove",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userid,
        uri: recipe_id,
        price: price,
      }),
    }
  );
  const data = await response.json();
  return data;
}

export const removeItemAsync = (data) => async (dispatch) => {
  const userid = data.userid;
  const recipe_id = data.recipe_id;
  const price = data.price;

  const response = await removecartitembackend(userid, recipe_id, price);
  if (response.status === "success") {
    dispatch(cartdataSlice.actions.removeItem(recipe_id));
    return { success: true };
  } else {
    dispatch(cartdataSlice.actions.setError(response.error));
    throw new Error(response.error.message);
  }
};

async function getAllcartitembackend(userId) {
  const response = await fetch(
    `https://recipe-rackbackend.vercel.app/api/v2/cart/${userId}`
  );
  const data = await response.json();
  return data;
}
export const loadCartAsync = (userid) => async (dispatch) => {
  const response = await getAllcartitembackend(userid);
  if (response.status === "success") {
    if (response.data !== null) {
      dispatch(cartdataSlice.actions.loadCart(response.data));
    }
  } else {
    dispatch(cartdataSlice.actions.setError(response.error));
    throw new Error(response.error.message);
  }
};

async function clearcartbackend(userid) {
  const response = await fetch(
    "https://recipe-rackbackend.vercel.app/api/v2/cart/clear",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userid,
      }),
    }
  );
  const data = await response.json();
  return data;
}

export const clearCartAsync = (userid) => async (dispatch) => {
  const response = await clearcartbackend(userid);
  if (response.status === "success") {
    dispatch(cartdataSlice.actions.clearCart());
  } else {
    dispatch(cartdataSlice.actions.setError(response.error));
    throw new Error(response.error.message);
  }
};

export const { addItem, removeItem, clearCart, setLoading, setError } =
  cartdataSlice.actions;

export default cartdataSlice.reducer;
