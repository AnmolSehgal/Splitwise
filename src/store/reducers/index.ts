import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import history from "../history";
import profileReducer from "./profileReducer";

import signInReducer from "./signInReducer";
import signUpReducer from "./signUpSaga";

export default combineReducers({
  router: connectRouter(history),
  signIn: signInReducer,
  signUp: signUpReducer,
  profile: profileReducer,
});
