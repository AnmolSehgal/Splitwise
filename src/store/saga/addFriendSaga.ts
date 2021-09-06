import { takeLatest } from "@redux-saga/core/effects";
import { addFriendUsingEmail } from "../../services/firebase/firestore/firestore";
import { addFriendUsingEmailRequest } from "../actions/addFriendAction";
import actionTypes from "../actionTypes/actionTypes";

function* addFriendUsingEmailSaga({
  payload,
}: ReturnType<typeof addFriendUsingEmailRequest>) {
  try {
    yield addFriendUsingEmail(payload.email);
  } catch (error) {
    console.log(error);
  }
}

const addFriendSaga = [
  takeLatest(actionTypes.ADD_FRIEND_REQUEST, addFriendUsingEmailSaga),
];
export default addFriendSaga;
