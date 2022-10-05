import { useAppSelector, useAppDispatch } from "../redux";
import { openDialog, selectOption } from "../slices/dialogSlice";
import { userLogin } from "../slices/userSlice";
import "../style/dialogOption.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular } from "@fortawesome/fontawesome-svg-core/import.macro";

export function DialogOption(): JSX.Element {
  const dispatch = useAppDispatch();
  const option = useAppSelector((state) => state.dialog.option);

  let dialogContent: JSX.Element | undefined;
  if (option === "") {
    dialogContent = (
      <div>
        <div className="dialog-text">
          <h3 className="dialog-title">RealD</h3>
          <p className="dialog-subtitle">Login or Sign up</p>
        </div>
        <div className="button-block">
          <button
            className="login-button"
            onClick={() => {
              dispatch(selectOption("login"));
            }}
          >
            Login
          </button>
          <button
            className="register-button"
            onClick={() => {
              dispatch(selectOption("register"));
            }}
          >
            Sign up
          </button>
        </div>
      </div>
    );
  } else if (option === "login") {
    dialogContent = (
      <div>
        <button
          className="back"
          onClick={() => {
            dispatch(selectOption(""));
          }}
        >
          <FontAwesomeIcon icon={regular("circle-left")} />
        </button>
        <div>
          <h3 className="dialog-title">Login</h3>
          <p className="dialog-subtitle">Welcome back to RealD!</p>
        </div>
        <div className="button-block">
          <button
            className="login-button"
            onClick={() => {
              void dispatch(userLogin());
              dispatch(selectOption(""));
              dispatch(openDialog(false));
            }}
          >
            Sign in with Google
          </button>
        </div>
      </div>
    );
  } else if (option === "register") {
    dialogContent = (
      <div className="register-block">
        <button
          className="back"
          onClick={() => {
            dispatch(selectOption(""));
          }}
        >
          <FontAwesomeIcon icon={regular("circle-left")} />
        </button>
        <div>
          <h3 className="dialog-title">Sign up</h3>
          <p className="dialog-subtitle">Hi,Welcome to RealD!</p>
        </div>
        <div className="button-block">
          <button
            className="register-button"
            onClick={() => {
              void dispatch(userLogin());
              dispatch(selectOption(""));
              dispatch(openDialog(false));
            }}
          >
            Sign up with Google account
          </button>
        </div>
      </div>
    );
  }
  return <div className="dialog-content">{dialogContent}</div>;
}

export default DialogOption;
