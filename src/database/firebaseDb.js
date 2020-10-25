import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4_68pVWJVJdS9QCLbU8XgJdVyPg_aBAA",
  authDomain: "sr-patas.firebaseio.com",
  databaseURL: "https://sr-patas.firebaseio.com",
  projectId: "sr-patas",
  storageBucket: "sr-patas.appspot.com",
  messagingSenderId: "73830099863",
  appId: "1:73830099863:android:e48b5fcf9f044116beb2d2",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const loginRef = db.collection("login");

export const firebaseSignOut = async () => firebase.auth().signOut();

export const firebaseSignIn = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);

export const firebaseSignUp = (email, password) =>
  firebase.auth().createUserWithEmailAndPassword(email, password);

export default firebase;
