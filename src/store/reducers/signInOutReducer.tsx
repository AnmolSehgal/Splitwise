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
  loading: false,
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
      return { ...state, loading: true, isLoggedIn: false };

    case actionTypes.LOGIN_AUTH_SUCCESS:
      return { ...state, loading: false, isLoggedIn: true };

    case actionTypes.LOGIN_AUTH_FAILURE:
      return { ...state, loading: false, isLoggedIn: false };

    case actionTypes.SIGN_OUT_REQUEST:
      return { ...state };

    case actionTypes.SIGN_OUT_SUCCESS:
      return { ...state, isLoggedIn: false, loading: false };

    case actionTypes.SIGN_OUT_FAILURE:
      return { ...state };

    case actionTypes.USER_LOGIN_STATUS_SUCCESS:
      return { ...state, loading: false, isLoggedIn: true };

    case actionTypes.USER_LOGIN_STATUS_FAILURE:
      return { ...state, loading: false, isLoggedIn: false };

    default:
      return { ...state };
  }
};

export default signInReducer;
