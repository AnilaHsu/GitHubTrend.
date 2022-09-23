import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux";
import { selectLanguage } from "../slices/filterSlice";
import "../style/trendFilter.scss";
import Autocomplete from "@mui/material/Autocomplete";

export function TrendFilter() {
  const dispatch = useAppDispatch();
  const trendingData = useAppSelector((state) => state.trend);
  const allLanguages:string[] = trendingData.map(trend => trend.language);
  const distinctLanguages:string[] = [...new Set(allLanguages)];

  const [language, setLanguage] = useState<string | null>("");

  return (
    <div className="filter-container">
      <Autocomplete
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
          setLanguage(newValue)
          dispatch(selectLanguage(newValue))
        }}
        options={distinctLanguages}
        renderInput={(params) => 
        <div ref={params.InputProps.ref}>
          <input type="text" {...params.inputProps} placeholder="Language" className="input"
          />
        </div>}
      />
    </div>
  );
}

export default TrendFilter;
