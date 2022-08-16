import { useEffect } from "react";
import "../style/header.scss";
import { Login } from "./Login";
import { useDispatch } from "react-redux";
import { login } from "../features/user";

export function Header() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    const loginInfo = JSON.parse(localStorage.getItem("loginState"))
    if (loginInfo){
      dispatch(login(loginInfo))
    }
  },[dispatch])

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
