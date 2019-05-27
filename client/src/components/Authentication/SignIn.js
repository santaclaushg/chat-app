import React, { useState } from 'react';
import { signInWithEmailAndPassword } from '../../FireBase/firebase-auth';

export default function SignIn({ onToggleForm }) {
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
    <div className="face face-front">
      <div className="content">
        <h2>Sign in</h2>
        <form onSubmit={e => e.preventDefault()}>
          <div className="field-wrapper">
            <input 
            type="text" 
            name="username" 
            placeholder="username" 
            onChange={e => setEmail(e.target.value)}
            />
            <label>username</label>
          </div>
          <div className="field-wrapper">
            <input 
            type="password" 
            name="password" 
            placeholder="password" 
            autoComplete="new-password"
            onChange={e => setPassword(e.target.value)}
            />
            <label>password</label>
          </div>
          <div className="field-wrapper">
            <input 
            type="submit" 
            onClick={onSignIn}
            />
          </div>
          <span className="psw">Forgot Password?</span>
          <span className="signup" onClick={onToggleForm}>Not a user?  Sign up</span>
          </form>
      </div>
    </div>
    
  );
}