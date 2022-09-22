import "../../style/header.scss";
import { UserAvatar } from "./UserAvatar";
import { LoginRegister } from "./LoginRegister"
import { useAppSelector } from "../../redux";



export function Header() {
  const loginInfo = useAppSelector((state) => state.user.loginInfo);
  let headerButton: JSX.Element = <LoginRegister />;

  if (loginInfo.login === false){
    headerButton = <LoginRegister />
  } else if (loginInfo.login === true) {
    headerButton = <UserAvatar />
  }
  return (
    <header>
      <div className="tool-bar">
        <h1 className="logo">RealD</h1>
          {headerButton}
      </div>
    </header>
  )
}

export default Header;
