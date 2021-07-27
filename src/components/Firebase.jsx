import firebase from "firebase/app";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBc-UrNTRsyPva5V71c7I4F9wEM7sKsvS0",
  authDomain: "chat-with-me-pro.firebaseapp.com",
  projectId: "chat-with-me-pro",
  storageBucket: "chat-with-me-pro.appspot.com",
  messagingSenderId: "807651057633",
  appId: "1:807651057633:web:31e2d7d3dacb5758297ca0",
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export default auth;
