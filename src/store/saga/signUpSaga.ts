import { takeLatest, put } from "@redux-saga/core/effects";
import { signUpAuth } from "../../services/firebase/auth";
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
    yield signUpAuth(payload.email, payload.password, payload.name).then(
      (data) => {
        localStorage.setItem("uid", data.uid as string);
        localStorage.setItem("userName", data.userName as string);
        localStorage.setItem("email", data.email as string);
      }
    );
    yield put(signUpAuthSuccess());
    history.push("user/dashboard");
  } catch (error) {
    console.log(error);
    yield put(signUpAuthFailure());
  }
}

const signUpSaga = [
  takeLatest(actionTypes.SIGN_UP_AUTH_REQUEST, signUpAuthSaga),
];

export default signUpSaga;
