import  './login.css';

const Login = () => {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">example-Social</h3>
                <span className="logindesc">
                    conect with EveryOne
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder='Email' className="loginInput"/>
                    <input placeholder='PassWord' className="loginInput"/>
                    <button className="loginButton">log in </button>
                    <span className="loginForgot">Forgot password?</span>
                    <button className="loginRegisterButton">Create a new account</button>
                </div>
            </div>
        </div>
      
    </div>
  );
}

export default Login;
