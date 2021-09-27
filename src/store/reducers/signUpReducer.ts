import { SignUpState } from "../types";
import actionTypes from "../actionTypes";
import {
  signUpAuthFailure,
  signUpAuthRequest,
  signUpAuthSuccess,
} from "../actions/signUpAction";

const initState: SignUpState = {
  isLoader: false,
};
const signUpReducer = (
  state = initState,
  action:
    | ReturnType<typeof signUpAuthRequest>
    | ReturnType<typeof signUpAuthSuccess>
    | ReturnType<typeof signUpAuthFailure>
) => {
  switch (action.type) {
    case actionTypes.SIGN_UP_AUTH_REQUEST:
      return { ...state, isLoader: true };
    case actionTypes.SIGN_UP_AUTH_SUCCESS:
      return { ...state, isLoader: false };
    case actionTypes.SIGN_UP_AUTH_FAILURE:
      return { ...state, isLoader: false };
    default:
      return { ...state };
  }
};

export default signUpReducer;
