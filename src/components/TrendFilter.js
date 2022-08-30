import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openLanguage } from '../features/filterSlice'
import "../style/trendFilter.scss"


export function TrendFilter() {
    const dispatch = useDispatch()
    const languageButton = useSelector((state) => state.filter.value.languageButton)
    const trendingData = useSelector((state) => state.trend.value);
    const languageLists = trendingData.map((trend, index) => 
        <li key={index}>
            {trend.language}
        </li>
        )
    if (languageButton===true){
        console.log(languageLists)
        return(
        <ul>
            {languageLists}
        </ul>
        )
    }

    return (
        <div>
            <button className='languageButton' onClick={() => {dispatch(openLanguage(true))} }>
                language 
            </button>
        </div>
    );
}

export default TrendFilter;