import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
export const homeSlice = createSlice({
  name: "home",
  initialState: { value: initialState },
  reducers: {
    loadData: (state, actions) => {
      state.value = actions.payload;
    },
  },
});

export const { loadData } = homeSlice.actions;
export default homeSlice.reducer;
