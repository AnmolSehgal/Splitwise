import { takeLatest, put } from "@redux-saga/core/effects";
import { signInAuth } from "../../services/firebase/auth";
import {
  signInAuthFailure,
  signInAuthRequest,
  signInAuthSuccess,
} from "../actions/signInAction";
import actionTypes from "../actionTypes/actionTypes";
import history from "../history/history";

interface userData {
  uid: string;
  userName: string;
  email: string;
}

function* signInAuthSaga({
  payload,
}: ReturnType<typeof signInAuthRequest>): Generator {
  try {
    const data = (yield signInAuth(
      payload.email,
      payload.password
    )) as userData;
    localStorage.setItem("uid", data.uid);
    localStorage.setItem("userName", data.userName);
    localStorage.setItem("email", data.email);
    yield put(signInAuthSuccess());
    history.push("/user/dashboard");
  } catch (error) {
    console.log(error);
    yield put(signInAuthFailure());
  }
}

const signInSaga = [takeLatest(actionTypes.LOGIN_AUTH_REQUEST, signInAuthSaga)];

export default signInSaga;
