import React from "react";
import Profile from './profile/profile';
import Search from './search/search';
import Contact from './contact/contact';
import BottomBar from './bottom-bar/bottom-bar';


export default function SidePanel() {
  return (
    <div id="sidepanel">
      <Profile />
      <Search />
      <Contact />
      <BottomBar />
    </div>
  );
}
