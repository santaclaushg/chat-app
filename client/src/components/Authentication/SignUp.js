import React, { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword } from '../../FireBase/firebase-auth';
import { createChatUser } from '../../FireBase/firebase-database';

export default function SignUp({ isShow, onToggleForm }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  useEffect(() => {
    const abortController = new AbortController();
    return () => abortController.abort();
  }, []);

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


      setName("");
      setEmail("");
      setConfirmedPassword("");
      setPassword("");
    }
  }
  return(
      <div className="face face-right">
        <div className="content">
          <h2>Sign up</h2>
          <form onSubmit={e => e.preventDefault()}>
            <div className="field-wrapper">
              <input 
              type="text" 
              name="username" 
              placeholder="email" 
              onChange={e => setName(e.target.value)}/>
              <label>username</label>
            </div>
            <div className="field-wrapper">
              <input 
              type="text" 
              name="email" 
              placeholder="email" 
              onChange={e => setEmail(e.target.value)}/>
              <label>e-mail</label>
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
              type="password" 
              name="password2" 
              placeholder="password" 
              autoComplete="new-password" 
              onChange={e => setConfirmedPassword(e.target.value)}
              />
              <label>re-enter password</label>
            </div>
            <div className="field-wrapper">
              <input 
              type="submit" 
              onClick={createAccount}
              />
            </div>
            <span className="singin" onClick={onToggleForm}>Already a user?  Sign in</span>
          </form>
        </div>
      </div>
    
  );
}