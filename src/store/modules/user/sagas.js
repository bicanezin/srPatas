import { takeEvery, call, all, put, takeLatest } from "redux-saga/effects";

import firebase from "firebase";

function* save({ payload }) {
  const { currentUser } = firebase.auth();

  firebase
    .database()
    .ref("/Users/")
    .push({
      email: payload.email,
      name: payload.name,
      uid: currentUser.uid,
    })
    .then((data) => {
      console.log("data ", data.key);
    })
    .catch((error) => {
      console.log("error ", error);
    });
}

export default all([
  takeLatest("@user/SAVE_USER", save),
]);
