import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import dialogReducer from "./features/dialogSlice";
import userReducer, { login, logout } from "./features/userSlice";
import { LOGIN_STATE } from "./constants/local-storage";
import homeReducer from "./features/homeSlice";

const userMiddleware = (store) => (next) => (action) => {
  if (login.match(action)) {
    localStorage.setItem(LOGIN_STATE, JSON.stringify(action.payload));
  } else if (logout.match(action)) {
    localStorage.removeItem();
  }
  return next(action);
};

const store = configureStore({
  reducer: {
    dialog: dialogReducer,
    user: userReducer,
    home: homeReducer,
    devTools: process.env.NODE_ENV !== "production",
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userMiddleware),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
