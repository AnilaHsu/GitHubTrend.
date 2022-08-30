import { createSlice } from "@reduxjs/toolkit";

const initialState = {languageButton:false};
export const filterSlice = createSlice({
  name: "filter",
  initialState: { value: initialState },
  reducers: {
    openLanguage:(state, actions) => {
      state.value.languageButton = actions.payload;
    }
  },
});

export const { openLanguage } = filterSlice.actions;
export default filterSlice.reducer;