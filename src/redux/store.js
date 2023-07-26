// import { configureStore } from "@reduxjs/toolkit";
// import searchResultsReducer from "./SearchdataSlice";
// import BookmarkdataReducer from "./BookmarkdataSlice";
// import CartadataReducer from "./CartdataSlice";
// import DetaildataReducer from "./DetaildataSlice";
// import orderhistorydataReducer from "./orderhistorydataSlice";
// import useridReducer from "./UseridSlice";
// import HomeRecipeOptionsReducers from "./HomeRecipeOptionsSlice";

// export const store = configureStore({
//   reducer: {
//     useriddata: useridReducer,
//     searchdata: searchResultsReducer,
//     HomeRecipeOptionsdata: HomeRecipeOptionsReducers,
//     bookmarkdata: BookmarkdataReducer,
//     cartdata: CartadataReducer,
//     detaildata: DetaildataReducer,
//     orderhistorydata: orderhistorydataReducer,
//   },
// });

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import searchResultsReducer from "./SearchdataSlice";
import BookmarkdataReducer from "./BookmarkdataSlice";
import CartadataReducer from "./CartdataSlice";
import DetaildataReducer from "./DetaildataSlice";
import orderhistorydataReducer from "./orderhistorydataSlice";
import useridReducer from "./UseridSlice";
import HomeRecipeOptionsReducers from "./HomeRecipeOptionsSlice";

const rootReducer = combineReducers({
  useriddata: useridReducer,
  searchdata: searchResultsReducer,
  HomeRecipeOptionsdata: HomeRecipeOptionsReducers,
  bookmarkdata: BookmarkdataReducer,
  cartdata: CartadataReducer,
  detaildata: DetaildataReducer,
  orderhistorydata: orderhistorydataReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

const configureAppStore = () => {
  return { store, persistor };
};

export default configureAppStore;
