import * as firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";

var config = {
    apiKey: "AIzaSyDu_bbqtm59HUmAly0eMkS-jVwEujEmk9Q",
    authDomain: "fir-chat-app-986b4.firebaseapp.com",
    databaseURL: "https://fir-chat-app-986b4.firebaseio.com",
    projectId: "fir-chat-app-986b4",
    storageBucket: "fir-chat-app-986b4.appspot.com",
    messagingSenderId: "985305297078"
  };
firebase.initializeApp(config);