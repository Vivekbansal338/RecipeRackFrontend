import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  isLoading: false,
  error: null,
};

const orderhistorydataSlice = createSlice({
  name: "orderhistorydata",
  initialState: initialState,
  reducers: {
    addOrder: (state, action) => {
      state.orders.push(action.payload);
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    loadOrder: (state, action) => {
      state.orders = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearOrderhistory: (state) => {
      state.orders = [];
    },
  },
});

export const { addOrder, setLoading, setError, clearOrderhistory } =
  orderhistorydataSlice.actions;

export default orderhistorydataSlice.reducer;

async function addorderhistoryitembackend(userid, orderdata) {
  const response = await fetch(
    "https://recipe-rackbackend.vercel.app/api/v2/orderhistory/add",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userid,
        orderdata: orderdata,
      }),
    }
  );
  const data = await response.json();
  return data;
}

async function addrecipepurchasedbackend(userid, purchasedata) {
  const response = await fetch(
    "https://recipe-rackbackend.vercel.app/api/v2/purchases/add",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userid,
        orderdata: purchasedata,
      }),
    }
  );
  const data = await response.json();
  return data;
}

export const addorderhistoryitemasync = (data) => async (dispatch) => {
  const userid = data.userid;
  const orderdata = data.orderdata;
  const orderuris = orderdata.items.map((item) => item.uri);
  const response2 = await addrecipepurchasedbackend(userid, orderuris);
  const response = await addorderhistoryitembackend(userid, orderdata);

  if (response.status === "success") {
    dispatch(orderhistorydataSlice.actions.addOrder(orderdata));
    return { status: "success" };
  } else {
    dispatch(orderhistorydataSlice.actions.setError(response.error));
    throw new Error(response.error.message);
  }
};

async function getorderhistorybackend(userid) {
  const response = await fetch(
    `https://recipe-rackbackend.vercel.app/api/v2/orderhistory/${userid}`
  );
  const data = await response.json();
  return data;
}
export const loadorderhistoryasync = (userid) => async (dispatch) => {
  const response = await getorderhistorybackend(userid);
  if (response.status === "success") {
    if (response.data !== null) {
      dispatch(orderhistorydataSlice.actions.loadOrder(response.data.orders));
    }
  } else {
    dispatch(orderhistorydataSlice.actions.setError(response.error));
    throw new Error(response.error.message);
  }
};
