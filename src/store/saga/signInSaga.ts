import { takeLatest, put } from "@redux-saga/core/effects";
import { signInAuth } from "../../services/firebase/auth";
import { EMAIL, UID, USERNAME } from "../../utils/appConstant";
import { routes } from "../../utils/routeConstant";
import { showErrorRequest } from "../actions/errorsActions";
import { getFriendsRequest } from "../actions/friendAction";
import {
  signInAuthFailure,
  signInAuthRequest,
  signInAuthSuccess,
} from "../actions/signInAction";
import actionTypes from "../actionTypes";
import history from "../history";

function* signInAuthSaga({
  payload,
}: ReturnType<typeof signInAuthRequest>): Generator {
  try {
    yield signInAuth(payload.email, payload.password).then((data) => {
      localStorage.setItem(UID, data.uid as string);
      localStorage.setItem(USERNAME, data.userName as string);
      localStorage.setItem(EMAIL, data.email as string);
    });
    yield put(signInAuthSuccess());
    yield put(getFriendsRequest());
    history.push(routes.DASHBOARD);
  } catch (error: any) {
    yield put(signInAuthFailure());
    yield put(showErrorRequest(error.message));
  }
}

const signInSaga = [takeLatest(actionTypes.LOGIN_AUTH_REQUEST, signInAuthSaga)];

export default signInSaga;
