import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { DataRangeType, TrendArguments, TrendState } from "../type";
import { fetchGitHubLanguages, fetchGitHubTrends } from "../data/trending";
import { LANG_STATE, RANGE_STATE } from "../constants/local-storage";

const langStateString: string | null = localStorage.getItem(LANG_STATE);
const rangeStateString: string | null = localStorage.getItem(RANGE_STATE);

let langCode = "";
let langName = "";
let rangeCode = "daily";
let rangeName = "Daily";

if (langStateString !== null) {
  const langState = JSON.parse(langStateString);
  langCode = langState.langCode;
  langName = langState.langName;
}
if (rangeStateString !== null) {
  const rangeState = JSON.parse(rangeStateString);
  rangeCode = rangeState.rangeCode;
  rangeName = rangeState.rangeName;
}

const dateRange: DataRangeType[] = [
  { name: "Daily", code: "daily" },
  { name: "This week", code: "weekly" },
  { name: "This month", code: "monthly" },
];

const initialState: TrendState = {
  trendData: [],
  languages: [],
  dateRange,
  langCode,
  langName,
  rangeCode,
  rangeName,
  status: "",
  error: "",
};

export const trendSlice = createSlice({
  name: "trend",
  initialState,
  reducers: {
    selectLangCode: (state, actions: PayloadAction<string>) => {
      state.langCode = actions.payload;
      const langItem = state.languages.find(
        (item) => item.code === state.langCode
      );
      state.langName = langItem?.name ?? "";
      console.log(actions.payload, state.langName);
    },
    selectRangeCode: (state, actions: PayloadAction<string>) => {
      state.rangeCode = actions.payload;
      const rangeItem = state.dateRange.find(
        (item) => item.code === state.rangeCode
      );
      state.rangeName = rangeItem?.name ?? "Daily";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTrendData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTrendData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.trendData = action.payload;
      })
      .addCase(fetchLanguageData.fulfilled, (state, action) => {
        state.languages = action.payload;
      })
      .addCase(fetchTrendData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "";
      });
  },
});

export const fetchTrendData = createAsyncThunk(
  "trend/filteredData",
  async ({ langCode, rangeCode }: TrendArguments) => {
    const response = await fetchGitHubTrends(langCode, rangeCode);
    return response;
  }
);
export const fetchLanguageData = createAsyncThunk(
  "trend/languages",
  async () => {
    const response = await fetchGitHubLanguages();
    return response;
  }
);

export const { selectLangCode, selectRangeCode } = trendSlice.actions;
export default trendSlice.reducer;
