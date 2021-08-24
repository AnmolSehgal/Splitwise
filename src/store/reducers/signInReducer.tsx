import { LoginState } from "../types";
import actionTypes from "../actionTypes";
import {
  signInAuthFailure,
  signInAuthRequest,
  signInAuthSuccess,
} from "../actions/signInAction";

const initState: LoginState = {
  loginFailed: false,
};
const signInReducer = (
  state = initState,
  action:
    | ReturnType<typeof signInAuthRequest>
    | ReturnType<typeof signInAuthSuccess>
    | ReturnType<typeof signInAuthFailure>
) => {
  switch (action.type) {
    case actionTypes.LOGIN_AUTH_REQUEST:
      return { ...state, loginFailed: false };
    case actionTypes.LOGIN_AUTH_SUCCESS:
      return { ...state, loginFailed: false };
    case actionTypes.LOGIN_AUTH_FAILURE:
      return { ...state, loginFailed: true };
    default:
      return { ...state };
  }
};

export default signInReducer;
