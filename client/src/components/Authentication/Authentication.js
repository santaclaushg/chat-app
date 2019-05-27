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
    <div className="wrapper">
      <div className={form === 'SignIn'? `rec-prism sign-in` : `rec-prism sign-up`}>
        <SignIn onToggleForm={onToggleForm} />
        <SignUp onToggleForm={onToggleForm} />
      </div>
    </div>
  );
}