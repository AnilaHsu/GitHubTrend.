import { useDispatch, useSelector } from "react-redux";
import { closeDialog, selectMenu } from "../features/dialogSlice";
import { DialogOption } from "./DialogOption";
import "../style/dialog.scss";

export function Dialog() {
  const dialog = useSelector((state) => state.dialog.value.open);
  const dispatch = useDispatch();

  if (dialog === true) {
    return (
      <div className="auth-popup-container">
        <div className="auth-popup">
          <div>
            <button
              className="close"
              onClick={() => {
                dispatch(closeDialog(false));
                dispatch(selectMenu(""));
              }}
            >
              &times;
            </button>

            <lottie-player
              src="https://assets8.lottiefiles.com/packages/lf20_mddapymk.json"
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
}
export default Dialog;
