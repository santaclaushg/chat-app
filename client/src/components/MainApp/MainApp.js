import React from 'react';
import SidePanel from './side-panel/side-panel';
import Content from '../MainApp/content/content';

export default function MainApp() {
  return (
    <div id="frame">
        <SidePanel />
        <Content />
    </div>
  );
}