import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLanguage } from "../slices/filterSlice";
import "../style/trendFilter.scss";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export function TrendFilter() {
  const dispatch = useDispatch();
  //   const language = useSelector((state) => state.filter.value.language) 
const trendingData = useSelector((state) => (state as any).trend.value);
  const allLanguages = trendingData.map((trend: any) => trend.language);
  const distinctLanguages = [...new Set(allLanguages)];

  const [language, setLanguage] = useState("");
  const [inputValue, setInputValue] = useState("");

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Autocomplete
      id="free-solo-demo"
      size="small"
      freeSolo
      value={language}
      onChange={(event, newValue) => {
        // @ts-expect-error TS(2345): Argument of type 'unknown' is not assignable to pa... Remove this comment to see the full error message
        setLanguage(newValue)
        dispatch(selectLanguage(newValue))
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      options={distinctLanguages}
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      renderInput={(params) => <TextField {...params} label="Language" />}
    />
  );
}

export default TrendFilter;
