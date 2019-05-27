import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from '../../FireBase/firebase-auth';
import { createChatUser } from '../../FireBase/firebase-database';

export default function SignUp({ isShow, onToggleForm }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  function createAccount(e) {
    e.preventDefault();
    if (confirmedPassword !== password){
      alert("The confirmed password is not matched the previous password");
      return;
    }

    createUserWithEmailAndPassword({ email, password })
            .then(createUserSuccessCallback)
            .catch(error => alert(error));
            
    async function createUserSuccessCallback(UserCredential) {
      const { uid } = UserCredential.user;
      
      console.log(UserCredential);
      await createChatUser({ uid, name });

      setEmail("");
      setConfirmedPassword("");
      setPassword("");
      setName("");
    }
  }

  const styles = {
    transform: 'translateZ(-100px)'
  }
  return(
      <div class="face face-right">
        <div class="content">
          <h2>Sign up</h2>
          <form onsubmit="event.preventDefault()">
            <div class="field-wrapper">
              <input 
              type="text" 
              name="username" 
              placeholder="email" 
              onChange={e => setName(e.target.value)}/>
              <label>username</label>
            </div>
            <div class="field-wrapper">
              <input 
              type="text" 
              name="email" 
              placeholder="email" 
              onChange={e => setEmail(e.target.value)}/>
              <label>e-mail</label>
            </div>
            <div class="field-wrapper">
              <input 
              type="password" 
              name="password" 
              placeholder="password" 
              autocomplete="new-password" 
              onChange={e => setPassword(e.target.value)}
              />
              <label>password</label>
            </div>
            <div class="field-wrapper">
              <input 
              type="password" 
              name="password2" 
              placeholder="password" 
              autocomplete="new-password" 
              onChange={e => setConfirmedPassword(e.target.value)}
              />
              <label>re-enter password</label>
            </div>
            <div class="field-wrapper">
              <input 
              type="submit" 
              onclick="showThankYou()"
              />
            </div>
            <span class="singin" onClick={onToggleForm}>Already a user?  Sign in</span>
          </form>
        </div>
      {/* <div className="limiter">
        <div className={isShow ? "container-login100" : "container-login100 disappear"}>
          <div className="wrap-login100">
            <form className="login100-form validate-form">
              <span className="login100-form-title p-b-26">
                Sign up is now free!
              </span>
              <span className="login100-form-title p-b-48">
                <i className="zmdi zmdi-font"></i>
              </span>
              
              <div className="wrap-input100 validate-input">
                <input 
                  className={clickUsername ? "input100 has-val" : "input100"} 
                  type="text" 
                  name="username"
                  key="username"
                  onClick={() => setClickUsername(true)}
                  onChange={(e) => setName(e.target.value)}
                  onBlur={(e) => e.target.value === "" ? setClickUsername(false) : setClickUsername(true)}
                />
                <span className="focus-input100"
                  data-placeholder="Username">
                </span>
              </div>

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

              <div className="wrap-input100 validate-input" data-validate="Confirm password">
                <span className="btn-show-pass">
                  <i className="zmdi zmdi-eye"></i>
                </span>
                <input className={clickConfirmedPass ? "input100 has-val" : "input100"} 
                  type="password" 
                  name="confirmedPass" 
                  key="confirmedPass"
                  onClick={() => setClickConfirmedPass(true)}
                  onChange={(e) => setConfirmedPassword(e.target.value)}
                  onBlur={(e) => e.target.value === "" ? setClickConfirmedPass(false) : setClickConfirmedPass(true)}/>
                <span className="focus-input100" 
                  data-placeholder="Confirmed password"></span>
              </div>

              <div className="container-login100-form-btn">
                <div className="wrap-login100-form-btn">
                  <div className="login100-form-bgbtn"></div>
                  <button 
                    className="login100-form-btn"
                    onClick={createAccount}
                  >
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
                  onClick={onToggleForm}
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
	  <div id="dropDownSelect1"></div> */}
      </div>
    
  );
}