import "../../style/loginRegister.scss";
import { openDialog } from "../../slices/dialogSlice";
import { useDispatch } from "react-redux";

export function LoginRegister() {
  const dispatch = useDispatch();
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className="login-register">
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
