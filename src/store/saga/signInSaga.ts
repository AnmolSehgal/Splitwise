import { takeLatest, put } from "@redux-saga/core/effects";
import { signInAuth } from "../../services/firebase/auth/authentication";
import {
  signInAuthFailure,
  signInAuthRequest,
  signInAuthSuccess,
} from "../actions/signInAction";
import actionTypes from "../actionTypes/actionTypes";
import history from "../history/history";

function* signInAuthSaga({
  payload,
}: ReturnType<typeof signInAuthRequest>): Generator {
  try {
    const uid = yield signInAuth(payload.email, payload.password);
    localStorage.setItem("uid", uid as string);
    yield put(signInAuthSuccess());
    history.push("/user/dashboard");
  } catch (error) {
    console.log(error);
    yield put(signInAuthFailure());
  }
}

const signInSaga = [takeLatest(actionTypes.LOGIN_AUTH_REQUEST, signInAuthSaga)];

export default signInSaga;
