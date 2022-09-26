import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from 'react-redux'
import { userMiddleware } from "./middleware/localStorage";
import dialogReducer from "./slices/dialogSlice";
import userReducer from "./slices/userSlice";
import trendReducer from "./slices/trendSlice";

const rootReducer = combineReducers({
  dialog: dialogReducer,
  user: userReducer,
  trend: trendReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(userMiddleware),
    devTools: process.env.NODE_ENV !== "production"
  });
  
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

