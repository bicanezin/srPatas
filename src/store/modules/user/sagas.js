import { takeEvery, call, all, put, takeLatest } from "redux-saga/effects";

import firebase from "firebase";

function* save({ payload }) {
  const { currentUser } = firebase.auth();

  firebase
    .database()
    .ref(`/users/${currentUser.uid}`)
    .push({
      email: payload.email,
      name: payload.name,
      uid: currentUser.uid,
      image: null,
    })
    .then((data) => {
      console.log("data ", data.key);
    })
    .catch((error) => {
      console.log("error ", error);
    });
}

function* update({ payload }) {
  const { currentUser } = firebase.auth();

  currentUser.updateProfile({
    photoURL: payload.image,
  });

  firebase.database().ref(`/users/${currentUser.uid}`).set({
    email: payload.email,
    name: payload.name,
    uid: currentUser.uid,
    image: payload.image,
  });
}

export default all([
  takeLatest("@user/SAVE_USER", save),
  takeLatest("@user/UPDATE_USER", update),
]);
