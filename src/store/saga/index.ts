import { all } from "@redux-saga/core/effects";
import signInSaga from "./signInSaga";
import signUpSaga from "./signUpSaga";

const saga = [...signInSaga, ...signUpSaga];

function* rootSaga(): Generator {
  yield all(saga);
}

export default rootSaga;
