import "../style/header.scss";
import { Login } from "./Login";

export function Header() {
  return (
    <header>
      <div className="tool-bar">
        <div className="logo">RealD</div>
        <Login />
      </div>
    </header>
  );
}

export default Header;
