import React, { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

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