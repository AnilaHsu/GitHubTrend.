import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { config } from "./firebaseConfig";


export function FirebaseAuth(){

 const firebaseConfig = config();
  
    const app = initializeApp(firebaseConfig);
    const provider = new GoogleAuthProvider();    

    const auth = getAuth();
    auth.languageCode = 'it';
   
    return [auth,provider]

} 

    