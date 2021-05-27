import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFmZOZeNUcIyKRDl6Z4siy6gOgnLdma6w",
  authDomain: "clone-b4993.firebaseapp.com",
  projectId: "clone-b4993",
  storageBucket: "clone-b4993.appspot.com",
  messagingSenderId: "405126551182",
  appId: "1:405126551182:web:8fffa6bf8f2fdf3055dbdf",
  measurementId: "G-2TN9M3YN2G",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
