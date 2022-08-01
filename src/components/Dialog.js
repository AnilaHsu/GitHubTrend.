import '../style/dialog.scss'


function UserAuth(props){
    if (props.user===""){
        return(     
            <div className='auth-content'>
                <h3 style={{textAlign:'center'}}>登入或註冊帳號</h3>
                <div className='auth-session'>
                    <button className='auth-button' onClick={props.handleLogin}>登入</button>
                    <button className='auth-button' onClick={props.handleRegister}>註冊</button>
                </div>
            </div>
        )
    }
    else if(props.user==="login"){
        return(
            <div className='auth-content'>
                <button className='back' onClick={props.handleUser}>&lt;</button>
                <h3 style={{textAlign:'center'}}>歡迎回到 RealD !</h3>
                <div className='auth-session'>
                    <button className='auth-button' onClick={props.handleGoogleAuth}>以 Google 帳戶登入</button>
                </div>
            </div>
        )
    }
    else if (props.user==="register"){
        return(
            <div className='auth-content'>
                <button className='back' onClick={props.handleUser}>&lt;</button>
                <h3 style={{textAlign:'center'}}>歡迎來到 RealD !</h3>
                <div className='register-session'>
                    <button className='auth-button' onClick={props.handleGoogleAuth}>以 Google 帳戶註冊 </button>
                    <hr></hr>
                </div>
            </div>
        )
    }
}

export function Dialog(props){
    


   if (props.dialog===true){
    return(
        <div className="auth-popup-container">
            <div className='auth-popup'>
                <div>
                    <button className='close' onClick={props.closeHandle}>&times;</button>
                    <lottie-player
                    src="https://assets8.lottiefiles.com/packages/lf20_mddapymk.json"
                    autoplay
                    loop
                    mode="normal"
                    style={{width: 300}}
                    >
                    </lottie-player>   
                </div>
                <UserAuth user={props.user} handleLogin={props.handleLogin} handleRegister={props.handleRegister}
                 handleUser={props.handleUser} handleGoogleAuth={props.handleGoogleAuth}/>
                
            </div>
        </div>
    )
   }
}