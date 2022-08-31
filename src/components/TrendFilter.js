import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLanguage } from "../features/filterSlice";
import "../style/trendFilter.scss";

export function TrendFilter() {
// const language = useSelector((state) => state.filter.value.language)

  const dispatch = useDispatch();
  const trendingData = useSelector((state) => state.trend.value);
  const allLanguages = trendingData.map((trend) => trend.language);
  const distinctLanguages = [...new Set(allLanguages)];
  const languageOptions = distinctLanguages.map((language, index) => (
    <option key={index} value={language}>
      {language}
    </option>
  ));

  return (
    <div className="container">
      <select
        className="languageSelect"
        onChange={(e) => {
          dispatch(selectLanguage(e.target.value));
        }}
      >
        <option value="All">Select Language</option>
        {languageOptions}
      </select>
    </div>
  );
}

export default TrendFilter;
