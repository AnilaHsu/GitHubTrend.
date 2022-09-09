import "../../style/userAvatar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular } from "@fortawesome/fontawesome-svg-core/import.macro";
// @ts-expect-error TS(6142): Module './UserMenu' was resolved to '/Users/anila/... Remove this comment to see the full error message
import { UserMenu } from "./UserMenu";
import { useSelector } from "react-redux";

export function UserAvatar() {
  const photo = useSelector((state) => (state as any).user.value.loginInfo.photo);
  let userImage;
  if (photo === null) {
    userImage = (
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <UserMenu
        avatar={
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <FontAwesomeIcon
            icon={regular("circle-user")}
            className="user-icon"
          />
        }
      />
    );
  } else if ( photo !== null) {
    userImage = (
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <UserMenu
        avatar={
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <img alt="avatar" src={photo} className="user-icon" />
        }
      />
    );
  }
  return userImage;
}

export default UserAvatar;
