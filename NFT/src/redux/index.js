import { combineReducers, configureStore } from "@reduxjs/toolkit";
import nftDetailSlice from "./nftDetailReducer";
import nftSlice from "./nftReducer";
import paginationSlice from "./paginationReducer";

const reducers = combineReducers({
  nft: nftSlice,
  pagination: paginationSlice,
  NFTDetail:nftDetailSlice
});

const store = configureStore({
  reducer: reducers,
});

export default store;
