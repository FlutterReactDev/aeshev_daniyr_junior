import { createSlice } from "@reduxjs/toolkit";

const nftDetailSlice = createSlice({
  name: "Nft Detail",
  initialState: {
    nft: null,
  },
  reducers: {
    addNft(state, action) {
      state.nft = action.payload;
    },
  },
});

export default nftDetailSlice.reducer;
export const { addNft } = nftDetailSlice.actions;
