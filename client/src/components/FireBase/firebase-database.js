import firebase from 'firebase';

export default function FirebaseDatabaseRef(childNode) {
  return firebase.database().ref(childNode);
}