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
import {
  friendListLoaderFailure,
  friendListLoaderRequest,
  friendListLoaderSuccess,
  loaderFailure,
  loaderRequest,
  loaderSuccess,
} from "../actions/loaderAction";
import actionTypes from "../actionTypes";

function* addFriendUsingEmailSaga({
  payload,
}: ReturnType<typeof addFriendUsingEmailRequest>): Generator {
  try {
    yield put(friendListLoaderRequest());
    const data = yield addFriendUsingEmail(payload.email);
    yield put(addFriendUsingEmailSuccess(data));
    yield put(friendListLoaderSuccess());
  } catch (error) {
    yield put(showErrorRequest("Enter a Valid user email"));
    yield put(friendListLoaderFailure());
  }
}

function* addFriendUsingNameSaga({
  payload,
}: ReturnType<typeof addFriendUsingNameRequest>): Generator {
  try {
    yield put(friendListLoaderRequest());
    const data = yield addFriendUsingName(payload.userName);
    yield put(addFriendUsingNameSuccess(data));
    yield put(friendListLoaderSuccess());
  } catch (error) {
    console.log(error);
    yield put(friendListLoaderFailure());
  }
}

function* getUserFriendsSaga(): Generator {
  try {
    yield put(loaderRequest());
    const data = yield getUserFriends();
    yield put(getFriendsSuccess(data));
    yield put(loaderSuccess());
  } catch (error) {
    console.log(error);
    put(loaderFailure());
  }
}

const addFriendSaga = [
  takeLatest(actionTypes.ADD_FRIEND_EMAIL_REQUEST, addFriendUsingEmailSaga),
  takeLatest(actionTypes.ADD_FRIEND_USING_NAME_REQUEST, addFriendUsingNameSaga),
  takeLatest(actionTypes.GET_USER_FRIENDS_REQUEST, getUserFriendsSaga),
];
export default addFriendSaga;
