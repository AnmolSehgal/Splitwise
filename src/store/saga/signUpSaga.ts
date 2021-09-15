import { takeLatest, put } from "@redux-saga/core/effects";
import { signUpAuth } from "../../services/firebase/auth";
import { EMAIL, UID, USERNAME } from "../../utils/constants/appConstant";
import { routes } from "../../utils/constants/routeConstant";
import { showErrorRequest } from "../actions/errorsActions";
import {} from "../actions/signInAction";
import {
  signUpAuthFailure,
  signUpAuthRequest,
  signUpAuthSuccess,
} from "../actions/signUpAction";
import actionTypes from "../actionTypes";
import history from "../history";

function* signUpAuthSaga({
  payload,
}: ReturnType<typeof signUpAuthRequest>): Generator {
  try {
    yield signUpAuth(payload.email, payload.password, payload.name).then(
      (data) => {
        localStorage.setItem(UID, data.uid as string);
        localStorage.setItem(USERNAME, data.userName as string);
        localStorage.setItem(EMAIL, data.email as string);
      }
    );
    yield put(signUpAuthSuccess());
    yield put(signUpAuthSuccess());
    history.push(routes.DASHBOARD);
  } catch (error: any) {
    console.log(error);
    yield put(signUpAuthFailure());
    yield put(showErrorRequest(error.message));
  }
}

const signUpSaga = [
  takeLatest(actionTypes.SIGN_UP_AUTH_REQUEST, signUpAuthSaga),
];

export default signUpSaga;
