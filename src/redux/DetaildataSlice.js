import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
  isLoading: false,
  error: null,
};

const DetaildataSlice = createSlice({
  name: "Detaildata",
  initialState: initialState,
  reducers: {
    setdetaildata: (state, action) => {
      // state.results.push(action.payload);
      console.log(state.data);
      state.data = action.payload;
      console.log(state.data);
    },
    cleardata: (state) => {
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

export const { setdetaildata, cleardata, setLoading, setError } =
  DetaildataSlice.actions;

export default DetaildataSlice.reducer;
