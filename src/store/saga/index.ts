import { all } from "@redux-saga/core/effects";
import expenseSaga from "./expenseSaga";
import addFriendSaga from "./addFriendSaga";
import profileSaga from "./profileSaga";
import signInSaga from "./signInSaga";
import signUpSaga from "./signUpSaga";

const saga = [
  ...signInSaga,
  ...signUpSaga,
  ...profileSaga,
  ...expenseSaga,
  ...addFriendSaga,
];

function* rootSaga(): Generator {
  yield all(saga);
}

export default rootSaga;
