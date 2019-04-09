import React from "react";
import ContactProfile from './contact-profile/contact-profile';
import Message from './messages/messages';
import MessageInput from './message-input/message-input';

export default function Content() {
  return (
    <div className="content">
      <ContactProfile />
      <Message />
      <MessageInput />
    </div>
  );
}
