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
                    <input placeholder='Email' className="loginInput"/>
                    <input placeholder='PassWord' className="loginInput"/>
                    <button className="loginButton">Sign up </button>
                    <button className="loginRegisterButton">Login in to Account</button>
                </div>
            </div>
        </div>
      
    </div>
  );
}

export default Register;
