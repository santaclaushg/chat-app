import React from 'react';
import MainApp from './components/MainApp/MainApp';
import Authentication from './components/Authentication/Authentication';
import userAuthObserver from './components/utils/user-auth-observer';
import './App.css';

export default function App() {
  const isAuth = userAuthObserver();

  return (
    isAuth ? <MainApp /> : <Authentication />
  );
}