import React, { useContext } from "react";

import AppContext from 'components/ReactContext/react-context.js';


export default function Profile() {
  const context = useContext(AppContext);
  const imageUrlUser = context.currentChatUser.imageUrl;
  const userName = context.currentChatUser.username;

  return (
    <div id="profile">
      <div className="wrap">
        <img
          id="profile-img"
          src={imageUrlUser ? imageUrlUser : "https://via.placeholder.com/150"}
          className="online"
          alt=""
        />
        <p>{userName}</p>
        <i className="fa fa-chevron-down expand-button" aria-hidden="true" />
        <div id="status-options">
          <ul>
            <li id="status-online" className="active">
              <span className="status-circle" /> <p>Online</p>
            </li>
            <li id="status-away">
              <span className="status-circle" /> <p>Away</p>
            </li>
            <li id="status-busy">
              <span className="status-circle" /> <p>Busy</p>
            </li>
            <li id="status-offline">
              <span className="status-circle" /> <p>Offline</p>
            </li>
          </ul>
        </div>
        <div id="expanded">
          <label htmlFor="twitter">
            <i className="fa fa-facebook fa-fw" aria-hidden="true" />
          </label>
          <input name="twitter" type="text" defaultValue="mikeross" />
          <label htmlFor="twitter">
            <i className="fa fa-twitter fa-fw" aria-hidden="true" />
          </label>
          <input name="twitter" type="text" defaultValue="ross81" />
          <label htmlFor="twitter">
            <i className="fa fa-instagram fa-fw" aria-hidden="true" />
          </label>
          <input name="twitter" type="text" defaultValue="mike.ross" />
        </div>
      </div>
    </div>
  );
}
