// import firebase from 'firebase';
import firebaseDatabaseRef from './firebase-database';
import './firebase-init';

export default function writeUserData(userId, email, search, imageUrl, status) {
  firebaseDatabaseRef('users/' + userId).push({
    username: email,
    search: search,
    profile_picture : imageUrl,
    status: status
  });
}