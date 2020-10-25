import { takeLatest, put, all } from "redux-saga/effects";

import {
  firebaseSignIn,
  firebaseSignUp,
  firebaseSignOut,
} from "../../../database/firebaseDb";
import { signInSuccess, signInFailure, signUpSuccess } from "./actions";

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield firebaseSignIn(email, password);

    yield put(signInSuccess(null, response.user));
  } catch (err) {
    yield put(signInFailure());
    alert(err);
  }
}

export function* signUp({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield firebaseSignUp(email, password);

    yield put(signUpSuccess(response.user));
  } catch (err) {
    yield put(signUpFailed());
    alert(err);
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;
}

export function* signOut() {
  yield firebaseSignOut();

  yield put(signOut());
}

export default all([
  takeLatest("persist/REHYDRATE", setToken),
  takeLatest("@auth/SIGN_IN_REQUEST", signIn),
  takeLatest("@auth/SIGN_UP_REQUEST", signUp),
]);
