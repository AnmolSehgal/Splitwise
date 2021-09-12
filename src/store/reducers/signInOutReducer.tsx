import { LoginState } from "../types";
import actionTypes from "../actionTypes";
import {
  signInAuthFailure,
  signInAuthRequest,
  signInAuthSuccess,
  userLoginStatusFailure,
  userLoginStatusSuccess,
} from "../actions/signInAction";
import {
  signOutFailure,
  signOutRequest,
  signOutSuccess,
} from "../actions/signOut";

const initState: LoginState = {
  loginFailed: false,
  isLoggedIn: false,
};
const signInReducer = (
  state = initState,
  action:
    | ReturnType<typeof signInAuthRequest>
    | ReturnType<typeof signInAuthSuccess>
    | ReturnType<typeof signInAuthFailure>
    | ReturnType<typeof signOutRequest>
    | ReturnType<typeof signOutSuccess>
    | ReturnType<typeof signOutFailure>
    | ReturnType<typeof userLoginStatusSuccess>
    | ReturnType<typeof userLoginStatusFailure>
) => {
  switch (action.type) {
    case actionTypes.LOGIN_AUTH_REQUEST:
      return { ...state, loginFailed: false, isLoggedIn: false };

    case actionTypes.LOGIN_AUTH_SUCCESS:
      return { ...state, loginFailed: false, isLoggedIn: true };

    case actionTypes.LOGIN_AUTH_FAILURE:
      return { ...state, loginFailed: true, isLoggedIn: false };

    case actionTypes.SIGN_OUT_REQUEST:
      return { ...state, loginFailed: false };

    case actionTypes.SIGN_OUT_SUCCESS:
      return { ...state, loginFailed: false, isLoggedIn: false };

    case actionTypes.SIGN_OUT_FAILURE:
      return { ...state, loginFailed: true };

    case actionTypes.USER_LOGIN_STATUS_SUCCESS:
      return { ...state, loginFailed: false, isLoggedIn: true };

    case actionTypes.USER_LOGIN_STATUS_FAILURE:
      return { ...state, loginFailed: true, isLoggedIn: false };

    default:
      return { ...state };
  }
};

export default signInReducer;
