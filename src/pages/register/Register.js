import  './register.css';

const Register = () => {
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
                <input placeholder='Username' className="loginInput"/>
                <input placeholder='Email' className="loginInput"/>
                    <input placeholder='Password' className="loginInput"/>
                    <input placeholder='PassWord Again' className="loginInput"/>
                    <button className="loginButton">Sign up </button>
                    <button className="loginRegisterButton">Login into Account</button>
                </div>
            </div>
        </div>
      
    </div>
  );
}

export default Register;
