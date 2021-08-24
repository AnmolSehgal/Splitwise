import { takeLatest, put } from "@redux-saga/core/effects";

import actionTypes from "../actionTypes";
import { ProfileStateObject } from "../types";
import { userSignOut } from "../../services/firebase/authentication";

import {
  fetchUserProfile,
  updateProfile,
} from "../../services/firebase/authentication";
import {
  updateUserInfoRequest,
  updateUserInfoSuccess,
} from "../actions/profileActions";
import history from "../history";

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

function* fetchProfileInfoSaga(): Generator {
  try {
    yield fetchUserProfile();
  } catch (error) {
    console.log(error);
  }
}

function* signOutSaga(): Generator {
  try {
    yield userSignOut();
    localStorage.removeItem("uid");
    history.push("/SignIn");
  } catch (error) {}
}

const profileSaga = [
  takeLatest(actionTypes.UPDATE_USER_INFO_REQUEST, updateProfileInfoSaga),
  takeLatest(actionTypes.USER_PROFILE_REQUEST, fetchProfileInfoSaga),
  takeLatest(actionTypes.SIGN_OUT_REQUEST, signOutSaga),
];
export default profileSaga;
