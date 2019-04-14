import * as firebase from 'firebase/app';
import 'firebase/auth';

export function createUserWithEmailAndPassword({email, password}) {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
}