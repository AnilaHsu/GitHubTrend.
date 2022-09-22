import React from "react";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux";
import { selectLanguage } from "../slices/filterSlice";
import "../style/trendFilter.scss";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export function TrendFilter() {
  const dispatch = useAppDispatch();
  const trendingData = useAppSelector((state) => state.trend);
  const allLanguages:string[] = trendingData.map(trend => trend.language);
  const distinctLanguages:string[] = [...new Set(allLanguages)];

  const [language, setLanguage] = useState<string | null>("");
  const [inputValue, setInputValue] = useState<string>("");

  return (
    
    <Autocomplete
      id="free-solo-demo"
      size="small"
      freeSolo
      value={language}
      onChange={(event: any, newValue: string | null):void => {
        setLanguage(newValue)
        dispatch(selectLanguage(newValue))
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      options={distinctLanguages}
      renderInput={(params) => <TextField {...params} label="Language" />}
    />
  );
}

export default TrendFilter;
