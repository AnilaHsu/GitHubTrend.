import { openDialog } from "../features/dialogSlice";
import { useDispatch } from "react-redux";

export function Login() {
  const dispatch = useDispatch();
  return (
    <header>
      <div className="tool-bar">
        <div className="logo">RealD</div>
        <div className="login">
          <button
            className="login-button"
            onClick={() => {
              dispatch(openDialog(true));
            }}
          >
            登入 / 註冊
          </button>
        </div>
      </div>
    </header>
  );
}
export default Login;
