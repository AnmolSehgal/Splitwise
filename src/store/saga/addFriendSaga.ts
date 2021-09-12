import { takeLatest, put } from "@redux-saga/core/effects";
import {
  addFriendUsingEmail,
  addFriendUsingName,
  getUserFriends,
} from "../../services/firebase/firestore";
import { showErrorRequest } from "../actions/errorsActions";
import {
  addFriendUsingEmailRequest,
  addFriendUsingEmailSuccess,
  addFriendUsingNameRequest,
  addFriendUsingNameSuccess,
  getFriendsSuccess,
} from "../actions/friendAction";
import actionTypes from "../actionTypes";

function* addFriendUsingEmailSaga({
  payload,
}: ReturnType<typeof addFriendUsingEmailRequest>): Generator {
  try {
    const data = yield addFriendUsingEmail(payload.email);
    yield put(addFriendUsingEmailSuccess(data));
  } catch (error) {
    yield put(showErrorRequest("Enter a Valid user email"));
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

function* getUserFriendsSaga(): Generator {
  try {
    const data = yield getUserFriends();
    yield put(getFriendsSuccess(data));
  } catch (error) {
    console.log(error);
  }
}

const addFriendSaga = [
  takeLatest(actionTypes.ADD_FRIEND_EMAIL_REQUEST, addFriendUsingEmailSaga),
  takeLatest(actionTypes.ADD_FRIEND_USING_NAME_REQUEST, addFriendUsingNameSaga),
  takeLatest(actionTypes.GET_USER_FRIENDS_REQUEST, getUserFriendsSaga),
];
export default addFriendSaga;
