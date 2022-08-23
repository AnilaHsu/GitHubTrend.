import "../../style/header.scss";
import Login, { UserAvatar } from "./UserAvatar";
import { useSelector } from "react-redux";


export function Header() {
  const loginInfo = useSelector((state) => state.user.value.loginInfo);
  if (loginInfo.login === true) {
    return(
      <UserAvatar />
    )
  } else if (loginInfo.login === false) {
    return (
      <Login />
    );
  }
}

export default Header;
