import './style/app.scss';
import { useEffect } from 'react';
import { Header } from './components/header/Header';
import { Dialog } from './components/Dialog';
import { HomePage } from './pages/HomePage'
import { fetchLanguageData, fetchTrendData} from './slices/trendSlice';
import { useAppDispatch, useAppSelector } from "./redux";
import Footer from './components/Footer';


function App() {
  const dispatch = useAppDispatch();
  const dialog = useAppSelector((state) => state.dialog.open);
  const langCode = useAppSelector((state) => state.trend.langCode); 
  const rangeCode = useAppSelector((state) => state.trend.rangeCode);

  useEffect(() => {
    dispatch(fetchTrendData({langCode, rangeCode}));
    dispatch(fetchLanguageData());
  }, [dispatch]);

  return (
    <>
      { dialog && <Dialog /> }
        <Header />
        <HomePage />
        <Footer />
    </>
  );
}

export default App;
