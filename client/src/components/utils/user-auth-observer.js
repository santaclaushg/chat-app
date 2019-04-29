import { useState } from 'react';
import { onAuthStateChanged } from '../FireBase/firebase-auth'

export default function userAuthObserver() {
  const [isAuth, setAuth] = useState(false);

  onAuthStateChanged((user) => {
  if (user) {
    // User is signed in.
    setAuth(true);
  } 
  else {
    // User is signed out.
    setAuth(false);
  }
  });
  return isAuth;
}

