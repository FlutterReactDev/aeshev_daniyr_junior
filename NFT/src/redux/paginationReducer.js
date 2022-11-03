import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    activeElement: 1,
    pageCount: 0,
  },
  reducers: {
    setActiveElement(state, action) {
      state.activeElement = action.payload;
    },
    setPageCount(state, action) {
      state.pageCount = action.payload;
    },
  },
});
export default paginationSlice.reducer;
export const { setActiveElement,setPageCount } = paginationSlice.actions;
