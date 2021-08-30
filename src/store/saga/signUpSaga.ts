import { takeLatest, put } from "@redux-saga/core/effects";
import { signUpAuth } from "../../services/firebase/auth/authentication";
import {} from "../actions/signInAction";
import {
  signUpAuthFailure,
  signUpAuthRequest,
  signUpAuthSuccess,
} from "../actions/signUpAction";
import actionTypes from "../actionTypes/actionTypes";
import history from "../history/history";

function* signUpAuthSaga({
  payload,
}: ReturnType<typeof signUpAuthRequest>): Generator {
  try {
    const uid = yield signUpAuth(payload.email, payload.password, payload.name);
    localStorage.setItem("uid", uid as string);
    yield put(signUpAuthSuccess());
    history.push("/dashboard");
  } catch (error) {
    console.log(error);
    yield put(signUpAuthFailure());
  }
}

const signUpSaga = [
  takeLatest(actionTypes.SIGN_UP_AUTH_REQUEST, signUpAuthSaga),
];

export default signUpSaga;