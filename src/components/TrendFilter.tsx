import "../style/trendFilter.scss";
import { useAppDispatch, useAppSelector } from "../redux";
import { fetchTrendData, selectLangCode, selectDateRange, selectLanguage, selectRangeCode } from "../slices/trendSlice";
import Autocomplete from "@mui/material/Autocomplete";
import { DataRangeType, GitHubLanguage } from "../type";

export function TrendFilter() {
  const dispatch = useAppDispatch();
  const languages: GitHubLanguage[] = useAppSelector((state) => state.trend.languages);
  const language: string = useAppSelector((state) => state.trend.selectedLang);
  const range: string = useAppSelector((state) => state.trend.selectedRange);
  const langCode: string = useAppSelector((state) => state.trend.langCode)
  const rangeCode: string = useAppSelector((state) => state.trend.rangeCode)

  const languageOption: string[] = languages.map((language: GitHubLanguage) => {
    return language.name
  })

  const dateRange: DataRangeType[] = [
    { name: "Daily", code: "daily" },
    { name: "This week", code: "weekly" },
    { name: "This month", code: "monthly" }
    ];
  
  const rangeOption: string[] = dateRange.map((range: DataRangeType) => {
    return range.name
  })

  return (
    <div className="filter-container">
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
        value={language}
        onChange={(event: any, newValue: string | null): void => {
          dispatch(selectLanguage(newValue ?? ""))

          let code: string = ""
          if (newValue) {
            const index = languages.map(language => language.name).indexOf(newValue);
            code = languages[index].code
          }

          dispatch(selectLangCode(code))
          dispatch(fetchTrendData({
            lang: code, 
            range: rangeCode
          }))
        }}
        options={languageOption}
        renderInput={(params) => 
          <div ref={params.InputProps.ref}>
            <input type="text" {...params.inputProps} placeholder="Language" className="input"
            />
          </div>
        }
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
        value={range}
        onChange={(event: any, newValue: string | null): void => {
          dispatch(selectDateRange(newValue ?? "Daily"))

          let code: string = "daily";
          if (newValue) {
            const index = dateRange.map(range => range.name).indexOf(newValue);
            code = dateRange[index].code
          }

          dispatch(selectRangeCode(code))
          dispatch(fetchTrendData({
            lang: langCode,
            range: code
          }))
        }}
        options={rangeOption}
        renderInput={(params) => 
          <div ref={params.InputProps.ref}>
            <input type="text" {...params.inputProps} placeholder="Date Range" className="input"
            />
          </div>
        }
      />
    </div>
  );
}

export default TrendFilter;
