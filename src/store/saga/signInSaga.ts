import { takeLatest, put } from "@redux-saga/core/effects";
import { signInAuth } from "../../services/firebase/authentication";
import {
  signInAuthFailure,
  signInAuthRequest,
  signInAuthSuccess,
} from "../actions/signInAction";
import actionTypes from "../actionTypes";

function* signInAuthSaga({ payload }: ReturnType<typeof signInAuthRequest>) {
  try {
    yield signInAuth(payload.email, payload.password);
    yield put(signInAuthSuccess());
  } catch (error) {
    console.log(error);
    yield put(signInAuthFailure());
  }
}

const signInSaga = [takeLatest(actionTypes.LOGIN_AUTH_REQUEST, signInAuthSaga)];

export default signInSaga;
