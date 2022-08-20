import './style/app.scss';
import { useEffect } from 'react';
import { Header } from './components/Header';
import { Dialog } from './components/Dialog';
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { LOGIN_STATE } from './constants/local-storage';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const loginInfo = JSON.parse(localStorage.getItem(LOGIN_STATE));
    if (loginInfo) {
      dispatch(login(loginInfo));
    }
  }, [dispatch]);

  return (
    <div className="container">
        <Header />
        <Dialog />
    </div>
  );
}

export default App;
