import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "../firebase/firebase";
import { LOGIN_STATE } from "../constants/local-storage";

const [auth, provider] = FirebaseAuth();

const initialState = { loginInfo: { login: false }, loginStatus: "", error: "", userMenu: "" };
export const userSlice = createSlice({
  name: "user",
  initialState: { value: initialState },
  reducers: {
    login: (state, action) => {
      state.value.loginInfo = action.payload;
    },
    logout: (state, action) => {
      state.value.loginInfo = action.payload;
    },
    userMenu: (state, action) => {
      state.value.userMenu = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(userLogin.pending, (state, action) => {
        state.value.loginStatus = 'loading'
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.value.loginStatus = 'succeeded'
        state.value.loginInfo = action.payload;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.value.loginStatus = 'failed'
        // @ts-expect-error TS(2322): Type 'string | undefined' is not assignable to typ... Remove this comment to see the full error message
        state.value.error = action.error.message
      })
  }
});

export const userLogin = createAsyncThunk("user/userLoginData", async () => {
  // @ts-expect-error TS(2345): Argument of type 'Auth | GoogleAuthProvider' is no... Remove this comment to see the full error message
  const result = await signInWithPopup(auth, provider);
  const credential = GoogleAuthProvider.credentialFromResult(result);
  // @ts-expect-error TS(2531): Object is possibly 'null'.
  const token = credential.accessToken;
  const user = result.user;
  console.log("token:", token, "user:", user);
  const loginState = {
    login: true,
    name: user.displayName,
    email: user.email,
    photo: user.photoURL,
  };
  localStorage.setItem(LOGIN_STATE, JSON.stringify(loginState));
  return loginState;
});

export const { login, logout, userMenu } = userSlice.actions;
export default userSlice.reducer;

