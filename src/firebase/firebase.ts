import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, Auth } from "firebase/auth";
import { config } from "./firebaseConfig";

export function firebaseAuth(): { auth: Auth; provider: GoogleAuthProvider } {
  const firebaseConfig = config();
  initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  auth.useDeviceLanguage();

  return {
    auth,
    provider,
  };
}
