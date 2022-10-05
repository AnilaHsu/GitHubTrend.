import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { DialogState } from "../type";

const initialState: DialogState = { open: false, option: "" };
export const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    openDialog: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload;
    },
    selectOption: (state, action: PayloadAction<string>) => {
      state.option = action.payload;
    },
  },
});

export const { openDialog, selectOption } = dialogSlice.actions;
export default dialogSlice.reducer;
