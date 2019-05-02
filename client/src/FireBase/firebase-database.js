import firebase from 'firebase/app';
import 'firebase/database';

export default function firebaseDatabaseRef(childNode) {
  return firebase.database().ref(childNode);
}
export function getValueOnce(addressString) {
  const snapshot = firebase
                      .database()
                      .ref(addressString)
                      .once("value");
  return snapshot.val();
}

export function createChatUser({ name, uid }) {
  const user = {
    imageUrl: "https://via.placeholder.com/150",
    username: name,
    search: name,
    id: uid,
    status: "online"
  };

  const update = {};
  update[`/Users/${uid}`] = user;

  return firebase.database().ref().update(update);
}
export function getCurrentUser() {
  return firebase.auth().currentUser;
}
export function pushNewMessage(chatID, newMessage) {
  const ref = firebaseDatabaseRef(`Messages/${chatID}`);
  return ref.push(newMessage);
}
export function getNewChatUID() {
  return firebase
          .database()
          .ref()
          .child(`Messages/`)
          .push()
          .key;
}

export function updateAtAddressWithValue(addressString, value) {
  const update = {};
  update[addressString] = value;

  return firebase
          .database()
          .ref()
          .update(update);
}
export async function getChatUIDMatchTwoUser(currentChatUser, contact) {
  const chatedUser = await getValueOnce(`UserRooms/${currentChatUser.id}`);
  if (chatedUser && chatedUser[contact.id]) {
    return chatedUser[contact.id].roomID;
  }

  const chatUID = getNewChatUID();
  const roomIDObject = { roomID: chatUID };
  updateAtAddressWithValue(
    `UserRooms/${currentChatUser.id}/${contact.id}`,
    roomIDObject
  );
  updateAtAddressWithValue(
    `UserRooms/${contact.id}/${currentChatUser.id}`,
    roomIDObject
  );
  return chatUID;
}