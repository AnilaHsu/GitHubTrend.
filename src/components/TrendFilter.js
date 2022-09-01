import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLanguage } from "../features/filterSlice";
import "../style/trendFilter.scss";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export function TrendFilter() {
  const dispatch = useDispatch();
  //   const language = useSelector((state) => state.filter.value.language) 
  const trendingData = useSelector((state) => state.trend.value);
  const allLanguages = trendingData.map((trend) => trend.language);
  const distinctLanguages = [...new Set(allLanguages)];

  const [language, setLanguage] = useState("");
  const [inputValue, setInputValue] = useState("");

  return (
    <Autocomplete
      id="free-solo-demo"
      size="small"
      freeSolo
      value={language}
      onChange={(event, newValue) => {
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
