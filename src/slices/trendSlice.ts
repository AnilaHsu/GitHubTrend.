import { createSlice } from "@reduxjs/toolkit";

const initialState: any = [];
export const trendSlice = createSlice({
  name: "trend",
  initialState: { value: initialState },
  reducers: {
    loadData: (state, actions) => {
      state.value = actions.payload;
    },
  },
});

export const { loadData } = trendSlice.actions;
export default trendSlice.reducer;
