import React, { useState, useContext } from 'react';
import AppContext from './components/ReactContext/react-context';
import MainApp from './components/MainApp/MainApp';
import Authentication from './components/Authentication/Authentication';
import './App.css';

export default function App() {
  const context = useContext(AppContext);
  const [login, setLogin] = useState(false);

  return (
    login ? <MainApp /> : <Authentication />
  );
}