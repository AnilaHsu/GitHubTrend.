import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { TrendStateType } from "../type";

const initialState: TrendStateType[] = [];

export const trendSlice = createSlice({
  name: "trend",
  initialState: initialState,
  reducers: {
    loadData: (state, actions: PayloadAction<TrendStateType[]>) => {
      state.length = 0
      state.push(...actions.payload)
      console.log(actions.payload)
    },
  },
});

export const { loadData } = trendSlice.actions;
export default trendSlice.reducer;
