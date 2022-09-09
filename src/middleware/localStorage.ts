import { logout } from "../slices/userSlice";
import { LOGIN_STATE } from "../constants/local-storage";

export const userMiddleware = (store: any) => (next: any) => (action: any) => {  
    if (logout.match(action)) {
      localStorage.removeItem(LOGIN_STATE);
    }
    return next(action);
  };