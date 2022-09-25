import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { TrendState, TrendStateType } from "../type";
import { createAsyncThunk } from "@reduxjs/toolkit";


const initialState: TrendState = {trendData:[], allLanguages: [], selectedLanguage: "", selectedDateRange:"Daily" , status:"", error:"" };

export const trendSlice = createSlice({
  name: "trend",
  initialState: initialState,
  reducers: {
    loadData: (state, actions: PayloadAction<TrendStateType[]>) => {
      state.trendData.length = 0
      state.trendData.push(...actions.payload)
    },
    loadLanguages: (state,actions:PayloadAction<string[]>) => {
      state.allLanguages = actions.payload;
    },
    selectLanguage: (state, actions: PayloadAction<string>) => {
      state.selectedLanguage = actions.payload;
    },
    selectDateRange: (state, actions: PayloadAction<string>) => {
      state.selectedDateRange = actions.payload
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTrendData.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchTrendData.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // state.trendData = action.payload;
      })
      .addCase(fetchTrendData.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message ?? ''
      })
  }
});

export const fetchTrendData = createAsyncThunk(
  'trend/filteredData', 
  async ({language, date}:{language: string, date: string}) => {
  //   const response = await fetchTrend(language,state.date)
  //   return response.data
  }
);

export const { loadData, loadLanguages, selectLanguage, selectDateRange } = trendSlice.actions;
export default trendSlice.reducer;
