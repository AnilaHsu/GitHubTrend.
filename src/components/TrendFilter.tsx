import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux";
import { fetchTrendData, selectLanguage, selectDateRange } from "../slices/trendSlice";
import "../style/trendFilter.scss";
import Autocomplete from "@mui/material/Autocomplete";

export function TrendFilter() {
  const dispatch = useAppDispatch();
  const allLanguages: string[] = useAppSelector((state) => state.trend.allLanguages);
  const dateRange: string[] = ['Daily', 'This week', 'This month']

  const [language, setLanguage] = useState<string>("");
  const [date, setDate] = useState<string>("Daily");

  return (
    <div className="filter-container">
      <Autocomplete
        id="selectLanguage"
        size="small"
        sx={{
          display: 'inline-block',
          '& input': {
            width: 100,
            borderRadius: '10px',
            bgcolor: 'background.paper',
            color: (theme) =>
              theme.palette.getContrastText(theme.palette.background.paper),
          },
        }}
        value={language}
        onChange={(event: any, newValue: string | null):void => {
          setLanguage(newValue ?? "")
          dispatch(selectLanguage(newValue ?? ""))
          dispatch(fetchTrendData({
            language: newValue ?? '', 
            date: date
          }))
        }}
        options={allLanguages}
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
          display: 'inline-block',
          '& input': {
            width: 100,
            borderRadius: '10px',
            bgcolor: 'background.paper',
            color: (theme) =>
              theme.palette.getContrastText(theme.palette.background.paper),
          },
        }}
        value={date}
        onChange={(event: any, newValue: string | null):void => {
          setDate(newValue ?? "Daily") 
          dispatch(selectDateRange(newValue ?? "Daily"))
          dispatch(fetchTrendData({
            language: language,
            date: newValue ?? "Daily"
          }))
        }}
        options={dateRange}
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
