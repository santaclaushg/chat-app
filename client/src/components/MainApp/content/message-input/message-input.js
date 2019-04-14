import React, { useState, useEffect } from "react";
import writeUserData from '../../../FireBase/firebase-operation';
import 'font-awesome/css/font-awesome.min.css';
export default function MessageInput() {

  const [send, setSend] = useState(0);

  useEffect(() => {
    writeUserData('123', 'giap', 'santaclaushg@gmail.com', '');
    console.log(`done`);
    console.log(send);
  })
  return (
    <div className="message-input">
      <div className="wrap">
        <input type="text" placeholder="Write your message..." />
        <i className="fa fa-paperclip attachment" aria-hidden="true" />
        <button className="submit" onClick={() => setSend(send+1)}>
          <i className="fa fa-paper-plane" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
