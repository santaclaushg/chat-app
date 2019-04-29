import React, { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import './style/main.css';
import './style/util.css';
import 'font-awesome/css/font-awesome.min.css';
import 'material-design-iconic-font/dist/css/material-design-iconic-font.min.css';
// import { Route, Switch } from "react-router-dom";

export default function Authentication() {
  const [form, setForm] = useState('SignIn');

  function onToggleForm(e) {
    e.preventDefault();
    setForm(form === 'SignIn' ? 'SignUp' : 'SignIn');
  }

  return(
    <div className="container">
      <SignIn isShow={form === "SignIn"} onToggleForm={onToggleForm} />
      <SignUp isShow={form === "SignUp"} onToggleForm={onToggleForm} />
    </div>
  );
}