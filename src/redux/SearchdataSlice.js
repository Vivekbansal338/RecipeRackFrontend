import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: "",
  results: [],
  isLoading: false,
  error: null,
};

const searchdataSlice = createSlice({
  name: "searchdata",
  initialState: initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.query = action.payload;
    },
    setSearchResults: (state, action) => {
      state.results = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setSearchQuery, setSearchResults, setIsLoading, setError } =
  searchdataSlice.actions;

export default searchdataSlice.reducer;
