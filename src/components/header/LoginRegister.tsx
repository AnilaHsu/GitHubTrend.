import { useAppDispatch } from "../../redux";
import { openDialog } from "../../slices/dialogSlice";
import "../../style/loginRegister.scss";

export function LoginRegister() {
  const dispatch = useAppDispatch();
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
