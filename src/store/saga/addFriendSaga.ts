import { takeLatest, put } from "@redux-saga/core/effects";
import {
  addFriendUsingEmail,
  addFriendUsingName,
} from "../../services/firebase/firestore/firestore";
import {
  addFriendUsingEmailRequest,
  addFriendUsingEmailSuccess,
  addFriendUsingNameRequest,
  addFriendUsingNameSuccess,
} from "../actions/addFriendAction";
import actionTypes from "../actionTypes/actionTypes";

function* addFriendUsingEmailSaga({
  payload,
}: ReturnType<typeof addFriendUsingEmailRequest>): Generator {
  try {
    const data = yield addFriendUsingEmail(payload.email);
    yield put(addFriendUsingEmailSuccess(data));
    yield;
  } catch (error) {
    console.log(error);
  }
}

function* addFriendUsingNameSaga({
  payload,
}: ReturnType<typeof addFriendUsingNameRequest>): Generator {
  try {
    const data = yield addFriendUsingName(payload.userName);
    yield put(addFriendUsingNameSuccess(data));
  } catch (error) {
    console.log(error);
  }
}

const addFriendSaga = [
  takeLatest(actionTypes.ADD_FRIEND_EMAIL_REQUEST, addFriendUsingEmailSaga),
  takeLatest(actionTypes.ADD_FRIEND_USING_NAME_REQUEST, addFriendUsingNameSaga),
];
export default addFriendSaga;
