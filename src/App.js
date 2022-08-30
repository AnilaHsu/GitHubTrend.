import './style/app.scss';
import { useEffect } from 'react';
import { Header } from './components/header/Header';
import { Dialog } from './components/Dialog';
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { LOGIN_STATE } from './constants/local-storage';
import { HomePage } from './pages/HomePage'
import { loadData } from './features/trendSlice';
import { fetchTrends } from './data/trending';
 
function App() {
  const dispatch = useDispatch();
  const trendingData = fetchTrends()
  
  useEffect(() => {
    const loginInfo = JSON.parse(localStorage.getItem(LOGIN_STATE));
    if (loginInfo) {
      dispatch(login(loginInfo));
    }   
  }, [dispatch]);

  useEffect(() => {
    dispatch(loadData(trendingData));
  })

  return (
    <div className="container">
        <Header />
        <Dialog />
        <HomePage />
    </div>
  );
}

export default App;
