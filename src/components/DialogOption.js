import { useDispatch, useSelector } from "react-redux";
import { closeDialog, selectMenu } from "../features/dialog";
import { login } from "../features/user";
import "../style/dialogOption.scss";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "../firebase";

const [auth, provider] = FirebaseAuth();

export function DialogOption() {
  const dispatch = useDispatch();
  const option = useSelector((state) => state.dialog.value.option);

  if (option === "") {
    return (
      <div className="auth-content">
        <h3 style={{ textAlign: "center" }}>登入或註冊帳號</h3>
        <div className="auth-session">
          <button
            className="auth-button"
            onClick={() => {
              dispatch(selectMenu("login"));
            }}
          >
            登入
          </button>
          <button
            className="auth-button"
            onClick={() => {
              dispatch(selectMenu("register"));
            }}
          >
            註冊
          </button>
        </div>
      </div>
    );
  } else if (option === "login") {
    return (
      <div className="auth-content">
        <button
          className="back"
          onClick={() => {
            dispatch(selectMenu(""));
          }}
        >
          &lt;
        </button>
        <h3 style={{ textAlign: "center" }}>歡迎回到 RealD !</h3>
        <div className="auth-session">
          <button
            className="auth-button"
            onClick={() => {
              signInWithPopup(auth, provider)
                .then((result) => {
                  // This gives you a Google Access Token. You can use it to access the Google API.
                  const credential =
                    GoogleAuthProvider.credentialFromResult(result);
                  const token = credential.accessToken;
                  // The signed-in user info.
                  const user = result.user;
                  // ...
                  console.log("token:", token, "user:", user);
                  const loginState = {
                    login: true,
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL,
                  };
                  dispatch(login(loginState));
                  localStorage.setItem(
                    "loginState",
                    JSON.stringify(loginState)
                  );
                  dispatch(closeDialog(false));
                })
                .catch((error) => {
                  // Handle Errors here.
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  // The email of the user's account used.
                  const email = error.customData.email;
                  // The AuthCredential type that was used.
                  const credential =
                    GoogleAuthProvider.credentialFromError(error);
                  // ...
                  console.log(
                    "errorCode:",
                    errorCode,
                    "errorMessage:",
                    errorMessage,
                    "email:",
                    email,
                    "credential:",
                    credential
                  );
                });
            }}
          >
            以 Google 帳戶登入
          </button>
        </div>
      </div>
    );
  } else if (option === "register") {
    return (
      <div className="auth-content">
        <button
          className="back"
          onClick={() => {
            dispatch(selectMenu(""));
          }}
        >
          &lt;
        </button>
        <h3 style={{ textAlign: "center" }}>歡迎來到 RealD !</h3>
        <div className="register-session">
          <button className="auth-button"> 以 Google 帳戶註冊 </button>
          <hr></hr>
        </div>
      </div>
    );
  }
}

export default DialogOption;
