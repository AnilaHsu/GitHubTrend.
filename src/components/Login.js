import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useDispatch, useSelector } from "react-redux";
import { openDialog } from "../features/dialog";
import { UserMenu } from "./UserMenu";

export function Login() {
  const dispatch = useDispatch();
  const loginInfo = useSelector((state) => state.user.value.loginInfo);

  if (loginInfo.login === true) {
    if (loginInfo.photo === null) {
      return (
        <UserMenu
          avatar={
            <FontAwesomeIcon
              icon={regular("circle-user")}
              className="user-icon"
            />
          }
        />
      );
    } else {
      return (
        <UserMenu
          avatar={
            <img alt="avatar" src={loginInfo.photo} className="user-icon" />
          }
        />
      );
    }
  } else if (loginInfo.login === false) {
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
}

export default Login;
