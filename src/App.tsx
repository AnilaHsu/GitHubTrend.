import './style/app.scss';
import { useEffect } from 'react';
import { Header } from './components/header/Header';
import { Dialog } from './components/Dialog';
import { login } from "./slices/userSlice";
import { LOGIN_STATE } from './constants/local-storage';
import { HomePage } from './pages/HomePage'
import { fetchLanguageData, fetchTrendData } from './slices/trendSlice';
import { useAppDispatch, useAppSelector } from "./redux";
import { LoginStateType } from './type';


function App() {
  const dispatch = useAppDispatch();
  const dialog = useAppSelector((state) => state.dialog.open);
  const lang = useAppSelector((state) => state.trend.langCode);
  const range  = useAppSelector((state) => state.trend.rangeCode);

  useEffect(() => {
    const loginInfoString: string | null = localStorage.getItem(LOGIN_STATE)
    if (loginInfoString) {
      const loginInfo: LoginStateType = JSON.parse(loginInfoString);
      dispatch(login(loginInfo));
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchTrendData({lang, range}));
    dispatch(fetchLanguageData());
  }, [dispatch])

  return (
    <div className="container">
      { dialog && <Dialog /> }
        <Header />
        
        <HomePage />
    </div>
  );
}

export default App;
