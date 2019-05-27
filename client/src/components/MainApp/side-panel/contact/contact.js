import React, { useContext, useEffect } from "react";
import AppContext from '../../../ReactContext/react-context';
import {
  updateAtAddressWithValue,
  getChatUIDMatchTwoUser
} from '../../../../FireBase/firebase-database';
import valueEventListener from 'utils/value-event-listener';

export default function Contacts() {
  const { currentChatUser, lastChat } = useContext(AppContext);
  const contacts = valueEventListener(`Users/`);


  useEffect(() => {
    const abortController = new AbortController();
    return () => abortController.abort();
  }, []);
  
  function renderContacts(contact) {
    async function onSelectTargetUser() {
      const chatUID = await getChatUIDMatchTwoUser(currentChatUser, contact);
      const update = {
        username: contact.username,
        imageUrl: contact.imageUrl,
        chatUID
      };
      updateAtAddressWithValue(`/LastChat/${currentChatUser.id}`, update);
    }
    return (
      <Contact 
        {...contact}
        isActive={lastChat.username === contact.username}
        onSelectTargetUser={onSelectTargetUser}
        key={contact.username}
      />
    );
  }

  return (
    <div id="contacts">
      <ul>
        {Object.values(contacts)
          .filter(contact => contact.username !== currentChatUser.username)
          .map(renderContacts)}
      </ul>
    </div>
  );
}

function Contact({
  username,
  status,
  imageUrl,
  isActive,
  onSelectTargetUser
}) {
  const activeClassName = isActive ? "contact active" : "contact";
  return (
    <li className={activeClassName} onClick={onSelectTargetUser}>
          <div className="wrap">
            <span className={`contact-status ${status}`} />
            <img src={imageUrl} alt="" />
            <div className="meta">
              <p className="name">{username}</p>
              <p className="preview">I dont know how to say...</p>
            </div>
          </div>
        </li>
  );
}