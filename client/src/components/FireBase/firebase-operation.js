// import firebase from 'firebase';
import FireBaseDatabaseRef from './firebase-database';
import './firebase-init';

export default function writeUserData(userId, name, email, imageUrl) {
  FireBaseDatabaseRef('users/' + userId + ' ' + name).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}