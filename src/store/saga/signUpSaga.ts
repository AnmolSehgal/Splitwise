import { takeLatest, put } from "@redux-saga/core/effects";
import { signUpAuth } from "../../services/firebase/authentication";
import {} from "../actions/signInAction";
import {
  signUpAuthFailure,
  signUpAuthRequest,
  signUpAuthSuccess,
} from "../actions/signUpAction";
import actionTypes from "../actionTypes";

function* signUpAuthSaga({ payload }: ReturnType<typeof signUpAuthRequest>) {
  try {
    yield signUpAuth(payload.email, payload.password, payload.name);
    yield put(signUpAuthSuccess());
  } catch (error) {
    console.log(error);
    yield put(signUpAuthFailure());
  }
}

const signUpSaga = [
  takeLatest(actionTypes.SIGN_UP_AUTH_REQUEST, signUpAuthSaga),
];

export default signUpSaga;
