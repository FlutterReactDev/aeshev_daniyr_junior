import { createSlice } from "@reduxjs/toolkit";

const nftSlice = createSlice({
  name: "nft",
  initialState: {
    nftItems: [],
    nftPerPage: 6,
    currentPage: 1,
  },

  reducers: {
    changeCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    addData(state, action) {
      state.nftItems = action.payload;
    },
    dataLoading(state, action) {
      state.loading = action.payload;
    },
  },
});
export default nftSlice.reducer;
export const { changeCurrentPage, addData, dataLoading } = nftSlice.actions;
