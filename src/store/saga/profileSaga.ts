import { takeLatest, put } from "@redux-saga/core/effects";

import actionTypes from "../actionTypes";
import { ProfileStateObject } from "../types";
import { userSignOut } from "../../services/firebase/auth";

import { updateProfile } from "../../services/firebase/auth";
import {
  updateUserInfoRequest,
  updateUserInfoSuccess,
} from "../actions/profileActions";
import history from "../history";
import { signOutFailure, signOutSuccess } from "../actions/signOut";
import { EMAIL, UID, USERNAME } from "../../utils/appConstant";

function* updateProfileInfoSaga({
  payload,
}: ReturnType<typeof updateUserInfoRequest>): Generator {
  try {
    const data = yield updateProfile(payload);
    yield put(updateUserInfoSuccess(data as ProfileStateObject));
  } catch (error) {
    console.log(error);
  }
}

function* signOutSaga(): Generator {
  try {
    yield userSignOut();
    yield put(signOutSuccess());
    localStorage.removeItem(UID);
    localStorage.removeItem(EMAIL);
    localStorage.removeItem(USERNAME);
    history.push("/SignIn");
  } catch (error) {
    yield put(signOutFailure());
  }
}

const profileSaga = [
  takeLatest(actionTypes.UPDATE_USER_INFO_REQUEST, updateProfileInfoSaga),
  takeLatest(actionTypes.SIGN_OUT_REQUEST, signOutSaga),
];
export default profileSaga;
