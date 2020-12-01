import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyCfzUKfSuZc4L_XEUOioPNUzrUKjvqI7gk",
  authDomain: "keys-on-fire.firebaseapp.com",
  databaseURL: "https://keys-on-fire.firebaseio.com",
  projectId: "keys-on-fire",
  storageBucket: "keys-on-fire.appspot.com",
  messagingSenderId: "645411609965",
  appId: "1:645411609965:web:5d3a6eb6b0cb9d444f0e64",
});

export default firebase.firestore().collection("games");

// import { useCollectionData } from "react-firebase-hooks/firestore";
