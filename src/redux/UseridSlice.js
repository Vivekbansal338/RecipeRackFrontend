import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userid: "",
  name: "New User!",
  image: "",
  avatar: "https://i.ibb.co/tD3hDHs/man.png",
  email: "",
  error: null,
};

const useridSlice = createSlice({
  name: "userid",
  initialState: initialState,
  reducers: {
    setUserId: (state, action) => {
      state.userid = action.payload;
    },
    clearUserId: (state) => {
      state.userid = "";
      state.name = "New User!";
      state.image = "";
      state.avatar = "https://i.ibb.co/tD3hDHs/man.png";
      state.email = "";
    },
    setname: (state, action) => {
      state.name = action.payload;
    },
    setimage: (state, action) => {
      state.image = action.payload;
    },
    setavatar: (state, action) => {
      state.avatar = action.payload;
    },
    setemail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { setUserId, clearUserId, setname } = useridSlice.actions;
export default useridSlice.reducer;
