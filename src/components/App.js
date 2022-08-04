import '../style/app.scss';
import { useState, useEffect } from 'react';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "../firebase"

import { Header } from './Header';
import { Dialog } from './Dialog';


const [auth,provider] = FirebaseAuth()

function App() {
  const [openDialog, setOpenDialog] = useState(false) 
  const [user,setUser] = useState("");
  const [isLogin,setIsLogin] = useState(() => {
    const saved = localStorage.getItem("loginState")
    const initialValue = JSON.parse(saved);
    return initialValue || {login:false}
  });
  const [userMenu,setUserMenu] = useState("")


  useEffect(() => {
    function persistLogin(){
      localStorage.setItem("loginState", JSON.stringify(isLogin));
    }
  },[isLogin]);

  const openHandle = () => {
    setOpenDialog(true)
  }
  const closeHandle = () => {
    setOpenDialog(false);
    setUser("");

  }

  const handleUser = () => {
    setUser("");
  }

  const handleLogin = () => {
      setUser("login");
  }

  const handleRegister = () => {
      setUser("register");
  }

  const handleGoogleAuth = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
            console.log('token:',token,'user:',user,)
            setIsLogin({login:true,name:user.displayName,email:user.email,photo:user.photoURL})
            setOpenDialog(false);
          
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
            console.log('errorCode:',errorCode,'errorMessage:',errorMessage,'email:',email,'credential:',credential)
        }); 
  }

  const handleSetting = () => {
    setUserMenu("setting")
  }
  const handleLogout = () => {
    setUserMenu("logout")
    setIsLogin({login:false})
  }

  return (
    <div className="container">
        <Header isLogin={isLogin}  openHandle={openHandle} 
        handleSetting={handleSetting} handleLogout={handleLogout}/>
        <Dialog dialog={openDialog} closeHandle={closeHandle} user={user} 
          handleLogin={handleLogin} handleRegister={handleRegister} handleUser={handleUser}
          handleGoogleAuth={handleGoogleAuth} />
    </div>
  );
}

export default App;
