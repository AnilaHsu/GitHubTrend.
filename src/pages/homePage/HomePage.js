import { useSelector } from "react-redux";
import  "../../style/homePage.scss"
import TrendFilter from "./TrendFilter"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro'


export function HomePage() {
  const trendingData = useSelector((state) => state.home.value);
  const listItems = trendingData.map((trend, index) => {
    return(
        <div className="trend-row" key={index}>
            <div className="trend-left">
                <h2>{trend.title}</h2>
                <p>{trend.introduction}</p>    
            </div>
            <div className="trend-right">
                <div className="icon">
                    <p><FontAwesomeIcon icon={solid("code")} /></p>
                    <p><FontAwesomeIcon icon={regular("star")} /></p>
                    <p><FontAwesomeIcon icon={solid("code-fork")} /></p>
                </div>
                <div className="text">
                    <p>{trend.language}</p>
                    <p>{trend.total_star}</p>
                    <p>{trend.fork}</p>
                </div>
            </div>       
        </div>
    )       
  });
  return <div className="trend-box">
            <div className="trend-title">
                <h1>Trending</h1>
                <TrendFilter />
            </div>
            <div className="trend-content">
                {listItems}
            </div>
        </div>;
}

export default HomePage;
