import "../../style/header.scss";
// @ts-expect-error TS(6142): Module './UserAvatar' was resolved to '/Users/anil... Remove this comment to see the full error message
import { UserAvatar } from "./UserAvatar";
// @ts-expect-error TS(6142): Module './LoginRegister' was resolved to '/Users/a... Remove this comment to see the full error message
import { LoginRegister } from "./LoginRegister"
import { useSelector } from "react-redux";


export function Header() {
  const loginInfo = useSelector((state) => (state as any).user.value.loginInfo);
  let headerButton;
  if (loginInfo.login === false){
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    headerButton = <LoginRegister />
  } else if (loginInfo.login === true) {
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    headerButton = <UserAvatar />
  }
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <header>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <div className="tool-bar">
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <h1 className="logo">RealD</h1>
          {headerButton}
      </div>
    </header>
  )
}

export default Header;
