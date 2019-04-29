import React from "react";
import { signOutFirebaseAccount } from '../../../FireBase/firebase-auth';

export default function BottomBar() {

  function onSignOut() {
    signOutFirebaseAccount()
      .then(() => alert("Sign out successfully"))
      .catch(err => console.log(err));
  }

  return (
    <div id="bottom-bar">
      <button id="addcontact">
        <i className="fa fa-user-plus fa-fw" aria-hidden="true" />{" "}
        <span>Add contact</span>
      </button>
      <button id="settings" onClick={onSignOut}>
        <i className="fa fa-cog fa-fw" aria-hidden="true" /> <span>Settings</span>
      </button>
    </div>
  );
}
