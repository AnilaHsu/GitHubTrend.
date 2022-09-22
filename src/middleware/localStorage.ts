import { logout } from "../slices/userSlice";
import { LOGIN_STATE } from "../constants/local-storage";
import { Middleware } from "redux";
import { RootState } from "../redux";

export const userMiddleware: Middleware<
  {},
  RootState
> = (store) => (next) => (action) => {  
  if (logout.match(action)) {
    localStorage.removeItem(LOGIN_STATE);
  }
  return next(action);
};