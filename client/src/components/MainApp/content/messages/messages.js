import React, { useContext } from "react";
import valueEventListener from '../../../../utils/value-event-listener';
import AppContext from '../../../ReactContext/react-context'

export default function Messages() {
  const { currentChatUser, lastChat } = useContext(AppContext);
  const messages = valueEventListener(`Messages/${lastChat.chatUID}`);
  const senderImageUrl = currentChatUser.imageUrl;
  const replierImageUrl = lastChat.imageUrl;

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
        {/* <li className="sent">
          <img src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
          <p>
            How the hell am I supposed to get a jury to believe you when I am
            not even sure that I do?!
          </p>
        </li>
        <li className="replies">
          <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
          <p>
            When you're backed against the wall, break the god damn thing down.
          </p>
        </li>
        <li className="replies">
          <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
          <p>Excuses don't win championships.</p>
        </li>
        <li className="sent">
          <img src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
          <p>Oh yeah, did Michael Jordan tell you that?</p>
        </li>
        <li className="replies">
          <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
          <p>No, I told him that.</p>
        </li>
        <li className="replies">
          <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
          <p>What are your choices when someone puts a gun to your head?</p>
        </li>
        <li className="sent">
          <img src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
          <p>
            What are you talking about? You do what they say or they shoot you.
          </p>
        </li>
        <li className="replies">
          <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
          <p>
            Wrong. You take the gun, or you pull out a bigger one. Or, you call
            their bluff. Or, you do any one of a hundred and forty six other
            things.
          </p>
        </li> */}
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