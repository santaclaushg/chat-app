import React from 'react';

import MainApp from './components/MainApp/MainApp';
import Authentication from './components/Authentication/Authentication';
// import './main-app.css';
import useAuthObserver from './utils/use-auth-observer';
export default function App() {
  const isAuth = useAuthObserver();
  // console.log(isAuth);
  return isAuth ? <MainApp /> : <Authentication />;
}