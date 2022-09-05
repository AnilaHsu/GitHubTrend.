import { useDispatch, useSelector } from "react-redux";
import { openDialog, selectMenu } from "../slices/dialogSlice";
import { userLogin } from "../slices/userSlice";
import "../style/dialogOption.scss";



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
              dispatch(userLogin());
              dispatch(openDialog(false));
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
