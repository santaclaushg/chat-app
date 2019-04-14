// import firebase from 'firebase';
import firebaseDatabaseRef from './firebase-database';
import './firebase-init';

export default function writeUserData(userId, name, email, imageUrl) {
  firebaseDatabaseRef('users/' + userId + ' ' + name).push({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}