import { useAppDispatch } from "../redux";
import { openDialog, selectOption } from "../slices/dialogSlice";
import { DialogOption } from "./DialogOption";
import "../style/dialog.scss";

export function Dialog() {
  const dispatch = useAppDispatch();
    return (
      <div className="dialog-container">
        <div className="dialog-popup">
          <div>
            <button
              className="close"
              onClick={() => {
                dispatch(openDialog(false));
                dispatch(selectOption(""));
              }}
            >
              &times;
            </button>

            <lottie-player
              src="https://assets9.lottiefiles.com/packages/lf20_k0pkuj13.json"
              autoplay
              loop
              mode="normal"
              style={{ width: 300 }}
            ></lottie-player>
          </div>
          <DialogOption />
        </div>
      </div>
    );
  }

export default Dialog;
