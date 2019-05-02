import React, { useState } from 'react';
import './style/main.css';
import './style/util.css';
import { signInWithEmailAndPassword } from '../../FireBase/firebase-auth';
import 'font-awesome/css/font-awesome.min.css';
import 'material-design-iconic-font/dist/css/material-design-iconic-font.min.css';

export default function SignIn({ isShow, onToggleForm }) {
  const [clickEmail, setClickEmail] = useState(false);
  const [clickPass, setClickPass] = useState(false);
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSignIn(e) {
    e.preventDefault();
    const userInformation = {email, password};
    console.log(userInformation);
    signInWithEmailAndPassword(userInformation)
      .then(signInSuccessCallBack)
      .catch(error => alert(error));

    function signInSuccessCallBack() {
      setEmail("");
      setPassword("");
    }
  }

  return(
    <div className="Authentication-sign-in">
      <div className="limiter">
        <div className={isShow ? "container-login100" : "container-login100 disappear" }>
          <div className="wrap-login100">
            <form className="login100-form validate-form">
              <span className="login100-form-title p-b-26">
                Welcome
              </span>
              <span className="login100-form-title p-b-48">
                <i className="zmdi zmdi-font"></i>
              </span>

              <div className="wrap-input100 validate-input" data-validate = "Valid email is: a@b.c">
                <input 
                  className={clickEmail ? "input100 has-val" : "input100"} 
                  type="text" 
                  name="email"
                  key="email"
                  onClick={() => setClickEmail(true)}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={(e) => e.target.value === "" ? setClickEmail(false) : setClickEmail(true)}
                />
                <span className="focus-input100"
                  data-placeholder="Email">
                </span>
              </div>

              <div className="wrap-input100 validate-input" data-validate="Enter password">
                <span className="btn-show-pass">
                  <i className="zmdi zmdi-eye"></i>
                </span>
                <input className={clickPass ? "input100 has-val" : "input100"} 
                  type="password" 
                  name="pass" 
                  key="pass"
                  onClick={() => setClickPass(true)}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={(e) => e.target.value === "" ? setClickPass(false) : setClickPass(true)}/>
                <span className="focus-input100" 
                  data-placeholder="Password"></span>
              </div>

              <div className="container-login100-form-btn">
                <div className="wrap-login100-form-btn">
                  <div className="login100-form-bgbtn"></div>
                  <button 
                    className="login100-form-btn"
                    onClick={onSignIn}
                  >
                    Login
                  </button>
                </div>
              </div>

              <div className="text-center p-t-115">
                <span className="txt1">
                  Don’t have an account?
                </span>

                <button 
                  className="txt2"
                  onClick={onToggleForm}
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
	  <div id="dropDownSelect1"></div>
    </div>
  );
}