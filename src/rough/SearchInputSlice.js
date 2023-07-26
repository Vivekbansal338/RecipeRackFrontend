import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: "",
  isbuttonclicked: false,
};

const searchinputSlice = createSlice({
  name: "searchinput",
  initialState: initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.query = action.payload;
    },
    setButtonClicked: (state, action) => {
      state.isbuttonclicked = !state.isbuttonclicked;
    },
  },
});

export const { setSearchQuery, setButtonClicked } = searchinputSlice.actions;

export default searchinputSlice.reducer;
