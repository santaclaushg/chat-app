import React, { useContext } from "react";

import AppContext from '../../../ReactContext/react-context';
export default function ContactProfile() {
  const context = useContext(AppContext);
  const { username, imageUrl } = context.lastChat;
  return (
    <div className="contact-profile">
      <img src={imageUrl} alt="" />
      <p>{username}</p>
      <div className="social-media">
        <i className="fa fa-facebook" aria-hidden="true" />
        <i className="fa fa-twitter" aria-hidden="true" />
        <i className="fa fa-instagram" aria-hidden="true" />
      </div>
    </div>
  );
}
