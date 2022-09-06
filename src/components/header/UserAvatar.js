import "../../style/uesrAvatar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import { UserMenu } from "./UserMenu";
import { useSelector } from "react-redux";

export function UserAvatar() {
  const photo = useSelector((state) => state.user.value.loginInfo.photo);
  let userImage;
  if (photo === null) {
    userImage = (
      <UserMenu
        avatar={
          <FontAwesomeIcon
            icon={regular("circle-user")}
            className="user-icon"
          />
        }
      />
    );
  } else if ( photo !== null) {
    userImage = (
      <UserMenu
        avatar={
          <img alt="avatar" src={photo} className="user-icon" />
        }
      />
    );
  }
  return userImage;
}

export default UserAvatar;
