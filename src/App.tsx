import './style/app.scss';
import { useEffect } from 'react';
// @ts-expect-error TS(6142): Module './components/header/Header' was resolved t... Remove this comment to see the full error message
import { Header } from './components/header/Header';
// @ts-expect-error TS(6142): Module './components/Dialog' was resolved to '/Use... Remove this comment to see the full error message
import { Dialog } from './components/Dialog';
import { useDispatch } from "react-redux";
import { login } from "./slices/userSlice";
import { LOGIN_STATE } from './constants/local-storage';
// @ts-expect-error TS(6142): Module './pages/HomePage' was resolved to '/Users/... Remove this comment to see the full error message
import { HomePage } from './pages/HomePage'
import { loadData } from './slices/trendSlice';
import { fetchTrends } from './data/trending';
 
function App() {
  const dispatch = useDispatch();
  const trendingData = fetchTrends()
  
  useEffect(() => {
    // @ts-expect-error TS(2345): Argument of type 'string | null' is not assignable... Remove this comment to see the full error message
    const loginInfo = JSON.parse(localStorage.getItem(LOGIN_STATE));
    if (loginInfo) {
      dispatch(login(loginInfo));
    }   
  }, [dispatch]);

  useEffect(() => {
    dispatch(loadData(trendingData));
  })

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className="container">
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Dialog />
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Header />
        
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <HomePage />
    </div>
  );
}

export default App;
