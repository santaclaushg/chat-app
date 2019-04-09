import React from 'react';
import SidePanel from './side-panel/side-panel';
import Content from '../MainApp/content/content';
import './App.css';

export default function App() {
  return (
    <div id="frame">
      <SidePanel />
      <Content />
    </div>
  );
}