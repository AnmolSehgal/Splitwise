import { SignUpState } from "../types";
import actionTypes from "../actionTypes";

const initState: SignUpState = {
  signUpFailed: false,
};
const signUpReducer = (state = initState, action: any) => {
  switch (action.type) {
    case actionTypes.SIGN_UP_AUTH_REQUEST:
      return { ...state, signUpFailed: false };
    case actionTypes.SIGN_UP_AUTH_SUCCESS:
      return { ...state, signUpFailed: false };
    case actionTypes.SIGN_UP_AUTH_FAILURE:
      return { ...state, signUpFailed: true };
    default:
      return { ...state };
  }
};

export default signUpReducer;
