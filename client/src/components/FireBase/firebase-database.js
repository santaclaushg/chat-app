import firebase from 'firebase';

export default function firebaseDatabaseRef(childNode) {
  return firebase.database().ref(childNode);
}