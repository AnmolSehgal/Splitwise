import { all } from "@redux-saga/core/effects";

import profileSaga from "./profileSaga";
import signInSaga from "./signInSaga";
import signUpSaga from "./signUpSaga";

const saga = [...signInSaga, ...signUpSaga, ...profileSaga];

function* rootSaga(): Generator {
  yield all(saga);
}

export default rootSaga;
