import "../../style/loginRegister.scss";
import { openDialog } from "../../slices/dialogSlice";
import { useDispatch } from "react-redux";

export function LoginRegister() {
  const dispatch = useDispatch();
  return (
    <div className="login-register">
      <button
        className="login-register-button"
        onClick={() => {
          dispatch(openDialog(true));
        }}
      >
        Login / Sing up
      </button>
    </div>
  );
}
export default LoginRegister;
