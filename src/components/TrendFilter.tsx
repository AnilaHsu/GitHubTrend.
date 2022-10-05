import "../style/trendFilter.scss";
import { useAppDispatch, useAppSelector } from "../redux";
import {
  fetchTrendData,
  selectLangCode,
  selectRangeCode,
} from "../slices/trendSlice";
import Autocomplete from "@mui/material/Autocomplete";
import { DataRangeType, GitHubLanguage } from "../type";

export function TrendFilter(): JSX.Element {
  const dispatch = useAppDispatch();
  const languages: GitHubLanguage[] = useAppSelector(
    (state) => state.trend.languages
  );
  const dateRange: DataRangeType[] = useAppSelector(
    (state) => state.trend.dateRange
  );
  const langCode: string = useAppSelector((state) => state.trend.langCode);
  const rangeCode: string = useAppSelector((state) => state.trend.rangeCode);
  const langName: string = useAppSelector((state) => state.trend.langName);
  const rangeName: string = useAppSelector((state) => state.trend.rangeName);

  const languageOption: string[] = languages.map((language: GitHubLanguage) => {
    return language.name;
  });
  const rangeOption: string[] = dateRange.map((range: DataRangeType) => {
    return range.name;
  });

  return (
    <div className="trend-filter">
      <Autocomplete
        id="selectLanguage"
        size="small"
        sx={{
          display: "inline-block",
          "& input": {
            width: 200,
            borderRadius: "10px",
            bgcolor: "background.paper",
            color: (theme) =>
              theme.palette.getContrastText(theme.palette.background.paper),
          },
        }}
        value={langName}
        onChange={(event: any, newValue: string | null): void => {
          let code = "";
          if (newValue !== null) {
            const lanItem = languages.find((item) => item.name === newValue);
            code = lanItem?.code ?? "";
          }
          dispatch(selectLangCode(code));
          void dispatch(
            fetchTrendData({
              langCode: code,
              rangeCode,
            })
          );
        }}
        options={languageOption}
        renderInput={(params) => (
          <div ref={params.InputProps.ref}>
            <input
              type="text"
              {...params.inputProps}
              placeholder="Language"
              className="input"
            />
          </div>
        )}
      />
      <Autocomplete
        id="selectDataRange"
        size="small"
        sx={{
          display: "inline-block",
          "& input": {
            width: 100,
            borderRadius: "10px",
            bgcolor: "background.paper",
            color: (theme) =>
              theme.palette.getContrastText(theme.palette.background.paper),
          },
        }}
        value={rangeName}
        onChange={(event: any, newValue: string | null): void => {
          let code = "daily";
          if (newValue !== null) {
            const rangeItem = dateRange.find((item) => item.name === newValue);
            code = rangeItem?.code ?? "daily";
          }
          dispatch(selectRangeCode(code));
          void dispatch(
            fetchTrendData({
              langCode,
              rangeCode: code,
            })
          );
        }}
        options={rangeOption}
        renderInput={(params) => (
          <div ref={params.InputProps.ref}>
            <input
              type="text"
              {...params.inputProps}
              placeholder="Date Range"
              className="input"
            />
          </div>
        )}
      />
    </div>
  );
}

export default TrendFilter;
