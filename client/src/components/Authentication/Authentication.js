import React, { useState, useEffect } from 'react';
import './style/main.css';
import './style/util.css';
import { createUserWithPassword } from '../FireBase/firebase-auth';
// import 'font-awesome/css/font-awesome.min.css';

export default function Authentication() {
  const [clickEmail, setClickEmail] = useState(false);
  const [clickPass, setClickPass] = useState(false);
  const [clickSignUp, setClickSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  function signUp() {
    setClickSignUp(true);
  }
  function signIn() {
    setClickSignUp(false);

  }

  return(
    <div className="Authentication">
      <div className="limiter">
        <div className={clickSignUp ? "container-login100 disappear" : "container-login100" }>
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
                    className="login100-form-btn">
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
                  onClick={signUp} >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className={clickSignUp ? "container-login100" : "container-login100 disappear" }>
          <div className="wrap-login100">
            <form className="login100-form validate-form">
              <span className="login100-form-title p-b-26">
                Sign up is now free!
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
                    className="login100-form-btn">
                    Sign up
                  </button>
                </div>
              </div>

              <div className="text-center p-t-115">
                <span className="txt1">
                  Already have an account?
                </span>

                <button 
                  className="txt2"
                  onClick={signIn}
                >
                  Sign in
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