import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { FilterState } from "../type";




const initialState: FilterState = { language: null };
export const filterSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    selectLanguage: (state, actions: PayloadAction<string | null>) => {
      state.language = actions.payload;
    },
  },
});

export const { selectLanguage } = filterSlice.actions;
export default filterSlice.reducer;
