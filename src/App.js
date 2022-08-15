import './style/app.scss';
import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Dialog } from './components/Dialog';



function App() {
  const [isLogin, setIsLogin] = useState(() => {
    const saved = localStorage.getItem("loginState")
    const initialValue = JSON.parse(saved);
    return initialValue || {login:false}
  });

  useEffect(() => {
    function persistLogin(){
      localStorage.setItem("loginState", JSON.stringify(isLogin));
    }
  },[isLogin]);


  return (
    <div className="container">
        <Header />
        <Dialog />
    </div>
  );
}

export default App;
