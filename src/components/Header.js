import "../style/header.scss";
import { Login } from "./Login";

export function Header(props) {
  return (
    <header>
      <div className="tool-bar">
        <div className="logo">RealD</div>
        <Login />
      </div>
    </header>
  );
}
