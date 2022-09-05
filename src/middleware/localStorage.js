import { logout } from "../slices/userSlice";
import { LOGIN_STATE } from "../constants/local-storage";

export const userMiddleware = (store) => (next) => (action) => {  
    if (logout.match(action)) {
      localStorage.removeItem(LOGIN_STATE);
    }
    return next(action);
  };