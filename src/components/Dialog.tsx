import { useDispatch, useSelector } from "react-redux";
import { openDialog, selectOption } from "../slices/dialogSlice";
// @ts-expect-error TS(6142): Module './DialogOption' was resolved to '/Users/an... Remove this comment to see the full error message
import { DialogOption } from "./DialogOption";
import "../style/dialog.scss";

export function Dialog() {
  const dialog = useSelector((state) => (state as any).dialog.value.open);
  const dispatch = useDispatch();

  if (dialog === true) {
    return (
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="dialog-container">
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <div className="dialog-popup">
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <div>
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <button
              className="close"
              onClick={() => {
                dispatch(openDialog(false));
                dispatch(selectOption(""));
              }}
            >
              &times;
            </button>

            {/* @ts-expect-error TS(2339): Property 'lottie-player' does not exist on type 'J... Remove this comment to see the full error message */}
            <lottie-player
              src="https://assets9.lottiefiles.com/packages/lf20_k0pkuj13.json"
              autoplay
              loop
              mode="normal"
              style={{ width: 300 }}
            // @ts-expect-error TS(2339): Property 'lottie-player' does not exist on type 'J... Remove this comment to see the full error message
            ></lottie-player>
          </div>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <DialogOption />
        </div>
      </div>
    );
  }
}
export default Dialog;
