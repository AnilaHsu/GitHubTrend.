import { useAppSelector } from "../redux";
import "../style/homePage.scss";
import TrendFilter from "../components/TrendFilter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import { TrendStateType } from "../type";

export function HomePage() {
  let trendingData = useAppSelector((state) => state.trend.trendData);
  const listItems: JSX.Element[] = trendingData.map((trend:TrendStateType, index:number) => {
    return (
      <div className="trend-row" key={index}>
        <div className="trend-left">
          <h2>{trend.title}</h2>
          <p>{trend.introduction}</p>
        </div>
        <div className="trend-right">
          <div className="icon">
            <p>
              <FontAwesomeIcon icon={solid("code")} />
            </p>
            <p>
              <FontAwesomeIcon icon={regular("star")} />
            </p>
            <p>
              <FontAwesomeIcon icon={solid("code-fork")} />
            </p>
          </div>
          <div className="text">
            <p>{trend.language}</p>
            <p>{trend.total_star}</p>
            <p>{trend.fork}</p>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="trend-container">
      <h1 className="trend-title">Trending</h1>
        <div className="trend-table">
          <TrendFilter />
          {listItems}
        </div>
    </div>
  );
}

export default HomePage;
