import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import history from "../history/history";
import errorReducer from "./errorReducer";
import expenseReducer from "./expenseReducer";
import friendsReducer from "./friendsReducer";
import profileReducer from "./profileReducer";

import signInReducer from "./signInOutReducer";
import signUpReducer from "./signUpReducer";

export default combineReducers({
  router: connectRouter(history),
  signIn: signInReducer,
  signUp: signUpReducer,
  profile: profileReducer,
  expense: expenseReducer,
  friends: friendsReducer,
  error: errorReducer,
});
