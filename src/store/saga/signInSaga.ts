import { takeLatest, put } from "@redux-saga/core/effects";
import { signInAuth } from "../../services/firebase/auth";
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
    yield signInAuth(payload.email, payload.password).then((data) => {
      localStorage.setItem("uid", data.uid as string);
      localStorage.setItem("userName", data.userName as string);
      localStorage.setItem("email", data.email as string);
    });
    yield put(signInAuthSuccess());
    history.push("/user/dashboard");
  } catch (error) {
    console.log(error);
    yield put(signInAuthFailure());
  }
}

const signInSaga = [takeLatest(actionTypes.LOGIN_AUTH_REQUEST, signInAuthSaga)];

export default signInSaga;
