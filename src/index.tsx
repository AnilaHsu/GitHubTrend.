import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.scss";
// @ts-expect-error TS(6142): Module './App' was resolved to '/Users/anila/Deskt... Remove this comment to see the full error message
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import dialogReducer from "./slices/dialogSlice";
import userReducer from "./slices/userSlice";
import trendReducer from "./slices/trendSlice";
import filterReducer from "./slices/filterSlice";
import { userMiddleware } from "./middleware/localStorage"


const store = configureStore({
  reducer: {
    dialog: dialogReducer,
    user: userReducer,
    trend: trendReducer,
    filter: filterReducer,
    // @ts-expect-error TS(2322): Type 'boolean' is not assignable to type 'Reducer<... Remove this comment to see the full error message
    devTools: process.env.NODE_ENV !== "production",
  },
  // @ts-expect-error TS(2322): Type '(getDefaultMiddleware: CurriedGetDefaultMidd... Remove this comment to see the full error message
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userMiddleware),
});

// @ts-expect-error TS(2345): Argument of type 'HTMLElement | null' is not assig... Remove this comment to see the full error message
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <React.StrictMode>
    {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <Provider store={store}>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
reportWebVitals();
