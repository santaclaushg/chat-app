import React, { useContext, useEffect } from "react";
import valueEventListener from '../../../../utils/value-event-listener';
import AppContext from '../../../ReactContext/react-context'

export default function Messages() {
  const { currentChatUser, lastChat } = useContext(AppContext);
  const messages = valueEventListener(`Messages/${lastChat.chatUID}`);
  const senderImageUrl = currentChatUser.imageUrl;
  const replierImageUrl = lastChat.imageUrl;

  useEffect(() => {
    const abortController = new AbortController();
    return () => abortController.abort();
  }, []);
  
  return (
    <div className="messages">
      <ul>
        {Object.values(messages).map((msg, index) => {
          const type = currentChatUser.id === msg.sentBy ? "sent" : "replies";
          const imageUrl = type === "sent" ? senderImageUrl : replierImageUrl;

          return (
            <Message
              key={`msg-${index}`}
              {...msg}
              type={type}
              imageUrl={imageUrl}
            />
          );
        })}
      </ul>
    </div>
  );
}

function Message({ type, imageUrl, content }) {
  return (
    <li className={type}>
      <img src={imageUrl} alt="" />
      <p>
        {content}
      </p>
    </li>
  )
}