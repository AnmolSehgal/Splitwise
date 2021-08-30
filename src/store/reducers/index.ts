import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import history from "../history/history";
import expenseReducer from "./expenseReducer";
import profileReducer from "./profileReducer";

import signInReducer from "./signInOutReducer";
import signUpReducer from "./signUpReducer";

export default combineReducers({
  router: connectRouter(history),
  signIn: signInReducer,
  signUp: signUpReducer,
  profile: profileReducer,
  expense: expenseReducer,
});
