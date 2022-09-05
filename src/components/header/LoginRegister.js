import { openDialog } from "../../slices/dialogSlice";
import { useDispatch } from "react-redux";

export function LoginRegister() {
  const dispatch = useDispatch();
  return (
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
  );
}
export default LoginRegister;
