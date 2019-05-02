import React, { useState, useEffect, useContext } from "react";
import AppContext from '../../../ReactContext/react-context';
import pushNewMessage from '../../../../FireBase/firebase-database';

import 'font-awesome/css/font-awesome.min.css';
export default function MessageInput({ chatID }) {
  const { currentChatUser } = useContext(AppContext);
  const [msg, setMsg] = useState("");

  function onSendMessage() {
    const newMsg = {
      sentBy: currentChatUser.id,
      content: msg,
      isSeen: false
    }
    pushNewMessage(chatID, newMsg);
    setMsg("");
  }

  useEffect(() => {
    
    // console.log(`done`);
    // console.log(message);
  })
  return (
    <div className="message-input">
      <div className="wrap">
        <input 
          type="text" 
          value={msg} 
          placeholder="Write your message..." 
          onChange={e => setMsg(e.target.value)}
        />
        <i className="fa fa-paperclip attachment" aria-hidden="true" />
        <button className="submit" onClick={onSendMessage}>
          <i className="fa fa-paper-plane" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
