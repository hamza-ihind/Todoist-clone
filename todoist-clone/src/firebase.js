import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyA8p_6OK-siY6stdk7F9ZuaFUXcoR7dn_8",
  authDomain: "todoist-clone-36453.firebaseapp.com",
  projectId: "todoist-clone-36453",
  storageBucket: "todoist-clone-36453.appspot.com",
  messagingSenderId: "595560587607",
  appId: "1:595560587607:web:57f9b36876d96a58305e12",
});

export { firebaseConfig as firebase };
