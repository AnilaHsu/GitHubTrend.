import '../style/header.scss';

function Login(props){
  if(props.logined.login===true){
    return(
      'your are logined'
    )
  }
  else if(props.logined.login===false){
    return(
      <div className="login">
        <button className="login-button" onClick={props.openHandle}> 登入 / 註冊 </button>
      </div>
  )}
}

export function Header(props){
    return(
      <header>
        <div className="tool-bar">
          <div className="logo">
            RealD
          </div>
          <Login logined={props.logined} openHandle={props.openHandle}/>
          
        </div>
      </header>
    )
  }

