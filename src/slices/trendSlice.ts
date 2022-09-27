import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { TrendArguments, TrendState } from "../type";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchGitHubLanguages, fetchGitHubTrends } from "../data/trending";


const initialState: TrendState = { trendData: [], languages: [], selectedLang: "", langCode: "",
 selectedRange: "Daily" , rangeCode:"daily", status: "", error: "" };

export const trendSlice = createSlice({
  name: "trend",
  initialState: initialState,
  reducers: {
    selectLanguage:(state, actions: PayloadAction<string>) => {
      state.selectedLang = actions.payload;
    },
    selectLangCode: (state, actions: PayloadAction<string>) => {
      state.langCode = actions.payload;
    },
    selectDateRange: (state, actions: PayloadAction<string>) => {
      state.selectedRange = actions.payload
    },
    selectRangeCode: (state, actions: PayloadAction<string>) => {
      state.rangeCode = actions.payload
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTrendData.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchTrendData.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.trendData = action.payload;
      })
      .addCase(fetchLanguageData.fulfilled, (state, action) => {
        state.languages = action.payload
      })
      .addCase(fetchTrendData.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message ?? ''
      })
  },
});

export const fetchTrendData = createAsyncThunk(
  'trend/filteredData', 
  async ({lang, range}: TrendArguments) => {
    const response = await fetchGitHubTrends(lang,range)
    return response
  }
);
export const fetchLanguageData = createAsyncThunk(
  'trend/languages', 
  async () => {
    const response = await fetchGitHubLanguages();
    return response
  }
);

export const { selectLanguage, selectLangCode, selectDateRange, selectRangeCode } = trendSlice.actions;
export default trendSlice.reducer;
