import "../../style/header.scss";
import { UserAvatar } from "./UserAvatar";
import { LoginRegister } from "./LoginRegister";
import { useAppSelector } from "../../redux";

export function Header(): JSX.Element {
  const loginInfo = useAppSelector((state) => state.user.loginInfo);
  let headerButton: JSX.Element = <LoginRegister />;

  if (!loginInfo.login) {
    headerButton = <LoginRegister />;
  } else if (loginInfo.login) {
    headerButton = <UserAvatar />;
  }
  return (
    <header className="header">
      <div className="tool-bar">
        <h1 className="logo">Trend.</h1>
        {headerButton}
      </div>
    </header>
  );
}

export default Header;
