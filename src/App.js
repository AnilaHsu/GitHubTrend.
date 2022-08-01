import './app.scss';
import { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./firebase"

import { Header } from './Header';
import { Dialog } from './Dialog';


const [auth,provider] = FirebaseAuth()

function App() {
  const [openDialog, setOpenDialog] = useState(false) 
  const [user,setUser] = useState("");
  const [logined,setLogined] = useState({login:false,user:''});


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
            console.log('token:',token,'user:',user)
            setLogined({login:true, user:''})
            console.log('ok')

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

  return (
    <div className="container">
        <Header logined={logined}  openHandle={openHandle} />
        <Dialog dialog={openDialog} closeHandle={closeHandle} user={user} 
          handleLogin={handleLogin} handleRegister={handleRegister} handleUser={handleUser}
          handleGoogleAuth={handleGoogleAuth} />
    </div>
  );
}

export default App;
