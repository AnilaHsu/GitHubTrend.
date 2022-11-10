import { useAppSelector } from "../redux";
import "../style/homePage.scss";
import TrendFilter from "../components/TrendFilter";
import { GitHubTrend } from "../type";
import star from "../assets/star.png";
import fork from "../assets/fork.png";
import code from "../assets/code.png";

export function HomePage(): JSX.Element {
  const languageName = useAppSelector((state) => state.trend.langName);
  const trendingData = useAppSelector((state) => state.trend.trendData);
  const loadingStatus = useAppSelector((state) => state.trend.status);
  const listItems: JSX.Element[] = trendingData.map(
    (trend: GitHubTrend, index: number) => {
      return (
        <div className="trend-row" key={index}>
          <div className="trend-left">
            <a
              className="trend-link"
              href={trend.link !== null ? trend.link : ""}
            >
              <h2 className="repos-name">
                <span>{trend.author}/</span>
                <span>{trend.name}</span>
              </h2>
            </a>
            <p className="repos-describe">{trend.description}</p>
          </div>
          <div className="trend-right">
            {Boolean(trend.programmingLanguage) && (
              <span className="other-info">
                <img className="icon" src={code} alt="" />
                {trend.programmingLanguage}
              </span>
            )}
            {Boolean(trend.stars) && (
              <span className="other-info">
                <img className="icon" src={star} alt="" />
                {trend.stars}
              </span>
            )}
            {Boolean(trend.forks) && (
              <span className="other-info">
                <img className="icon" src={fork} alt="" />
                {trend.forks}
              </span>
            )}
          </div>
        </div>
      );
    }
  );
  const loading = (
    <div className="loading">
      <p className="loading-text">Loading . . .</p>
      <lottie-player
        src="https://lottie.host/a62892ab-d02e-4a9c-8b0d-c9678abc016b/R9nOYs1JIO.json"
        background="transparent"
        speed="1"
        style={{ width: 500, height: 500 }}
        loop
        autoplay
      ></lottie-player>
    </div>
  );

  const noData: JSX.Element = (
    <div className="no-data-container">
      It looks like we don&apos;t have any trending repositories
      {languageName !== "" ? ` for ${languageName}` : ""}.
    </div>
  );
  return (
    <main>
      <div className="trend-title">
        <h1>GitHub Trending</h1>
        <p>See what the GitHub community is most excited about today.</p>
      </div>
      <section className="trending">
        <div className="trend-table">
          <TrendFilter />
          <div className="trend-content">
            {loadingStatus === "loading"
              ? loading
              : trendingData.length > 0
              ? listItems
              : noData}
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
