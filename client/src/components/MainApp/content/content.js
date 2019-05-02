import React, { useContext } from "react";
import ContactProfile from './contact-profile/contact-profile';
import Messages from './messages/messages';
import MessageInput from './message-input/message-input';
import AppContext from '../../ReactContext/react-context';

export default function Content() {
  const { lastChat } = useContext(AppContext);

  return (
    <div className="content">
      <ContactProfile />
      <Messages chatID={lastChat.chatUID}/>
      <MessageInput chatID={lastChat.chatUID}/>
    </div>
  );
}
