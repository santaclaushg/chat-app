import firebase from 'firebase';

export default function firebaseDatabaseRef(childNode) {
  return firebase.database().ref(childNode);
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