import { takeEvery, call, all, put, takeLatest } from "redux-saga/effects";

import firebase from "firebase";

function* save({ payload }) {
  const { currentUser } = firebase.auth();

  firebase
    .database()
    .ref("/users/")
    .push({
      email: payload.email,
      name: payload.name,
      uid: currentUser.uid,
      image: null
    })
    .then((data) => {
      console.log("data ", data.key);
    })
    .catch((error) => {
      console.log("error ", error);
    });
}

function* update({ payload }) {
  firebase.auth().currentUser.updateProfile({
    photo: payload.image,
  });
}

export default all([
  takeLatest("@user/SAVE_USER", save),
  takeLatest("@user/UPDATE_USER", update),
]);
