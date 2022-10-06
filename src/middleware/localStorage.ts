import { logout } from "../slices/userSlice";
import {
  LANG_STATE,
  LOGIN_STATE,
  RANGE_STATE,
} from "../constants/local-storage";
import { Middleware } from "redux";
import { RootState } from "../redux";
import { selectLangCode, selectRangeCode } from "../slices/trendSlice";

export const userMiddleware: Middleware<Record<string, unknown>, RootState> =
  (store) => (next) => (action) => {
    if (logout.match(action)) {
      localStorage.removeItem(LOGIN_STATE);
    }
    if (selectLangCode.match(action)) {
      const languages = store.getState().trend.languages;
      const langCode = action.payload;
      const langName = languages.find((item) => item.code === langCode)?.name ?? "";
      const langState = { langCode, langName };
      localStorage.setItem(LANG_STATE, JSON.stringify(langState));
    }
    if (selectRangeCode.match(action)) {
      const dateRange = store.getState().trend.dateRange;
      const rangeCode = action.payload;
      const rangeName = dateRange.find((item) => item.code === rangeCode)?.name ?? "Daily";
      const rangeState = { rangeCode, rangeName };
      localStorage.setItem(RANGE_STATE, JSON.stringify(rangeState));
    }
    return next(action);
  };
