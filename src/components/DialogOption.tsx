import { useDispatch, useSelector } from "react-redux";
import { openDialog, selectOption } from "../slices/dialogSlice";
import { userLogin } from "../slices/userSlice";
import "../style/dialogOption.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular } from "@fortawesome/fontawesome-svg-core/import.macro";

export function DialogOption() {
  const dispatch = useDispatch();
  const option = useSelector((state) => (state as any).dialog.value.option);

  let dialogContent;
  if (option === "") {
    dialogContent = (
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <div className="dialog-text">
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <h3 className="dialog-title">RealD</h3>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <p className="dialog-subtitle">Login or Sign up</p>
        </div>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <div className="button-block">
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <button
            className="login-button"
            onClick={() => {
              dispatch(selectOption("login"));
            }}
          >
            Login
          </button>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <button
          className="back"
          onClick={() => {
            dispatch(selectOption(""));
          }}
        >
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <FontAwesomeIcon icon={regular("circle-left")} />
        </button>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <div>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <h3 className="dialog-title">Login</h3>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <p className="dialog-subtitle">Welcome back to RealD!</p>
        </div>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <div className="button-block">
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <button
              className="login-button"
              onClick={() => {
                // @ts-expect-error TS(2345): Argument of type 'AsyncThunkAction<{ login: boolea... Remove this comment to see the full error message
                dispatch(userLogin());
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
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="register-block">
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <button
          className="back"
          onClick={() => {
            dispatch(selectOption(""));
          }}
        >
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <FontAwesomeIcon icon={regular("circle-left")} />
        </button>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <div>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <h3 className="dialog-title">Sign up</h3>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <p className="dialog-subtitle">Hi,Welcome to RealD!</p>
        </div>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <div className="button-block">
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <button 
          className="register-button"
          onClick={() => {
            // @ts-expect-error TS(2345): Argument of type 'AsyncThunkAction<{ login: boolea... Remove this comment to see the full error message
            dispatch(userLogin());
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

  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <div className="dialog-content">{dialogContent}</div>;
}

export default DialogOption;
