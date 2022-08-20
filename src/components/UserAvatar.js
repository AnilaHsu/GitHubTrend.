import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import { UserMenu } from "./UserMenu";
import { useSelector } from "react-redux";




export function UserAvatar(){
    const loginInfo = useSelector((state) => state.user.value.loginInfo)
    if (loginInfo.photo === null) {
        return (
          <header>
            <div className="tool-bar">
              <div className="logo">RealD</div>
              <UserMenu
                avatar={
                  <FontAwesomeIcon
                    icon={regular("circle-user")}
                    className="user-icon"
                  />
                }
              />
            </div>
          </header>
        );
      } else {
        return (
          <header>
            <div className="tool-bar">
              <div className="logo">RealD</div>
              <UserMenu
                avatar={
                  <img alt="avatar" src={loginInfo.photo} className="user-icon" />
                }
              />
            </div>
          </header>
        );
      }
}

export default UserAvatar;