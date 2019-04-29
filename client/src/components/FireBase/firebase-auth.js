import * as firebase from 'firebase/app';
import 'firebase/auth';

export function createUserWithEmailAndPassword({email, password}) {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
}

export function signInWithEmailAndPassword({email, password}) {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}

export function onAuthStateChanged(callback) {
  firebase.auth().onAuthStateChanged(callback);
}

export function signOutFirebaseAccount(){
  return firebase.auth().signOut();
}