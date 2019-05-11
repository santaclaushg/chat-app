import React from 'react';
import SidePanel from './side-panel/side-panel';
import Content from '../MainApp/content/content';
import AppContext from '../ReactContext/react-context';
import { getCurrentUser } from '../../FireBase/firebase-database';
import valueEventOnceListener from '../../utils/value-event-once-listener';
import valueEventListener from '../../utils/value-event-listener';

export default function MainApp() {
  const { uid } = getCurrentUser();
  const currentChatUser = valueEventOnceListener(`/Users/${uid}`);
  const lastChat = valueEventListener(`/LastChat/${uid}`);

  const context = { currentChatUser, lastChat };

  return (
    <AppContext.Provider value={context}>
      <SidePanel />
      <Content />
    </AppContext.Provider>
  );
}