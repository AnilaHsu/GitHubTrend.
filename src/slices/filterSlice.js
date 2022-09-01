import { createSlice } from "@reduxjs/toolkit";

const initialState = { language: "All" };
export const filterSlice = createSlice({
  name: "filter",
  initialState: { value: initialState },
  reducers: {
    selectLanguage: (state, actions) => {
      state.value.language = actions.payload;
    },
  },
});

export const { selectLanguage } = filterSlice.actions;
export default filterSlice.reducer;
