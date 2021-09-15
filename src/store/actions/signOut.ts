import actionTypes from "../actionTypes";

export const signOutRequest = () => {
  return {
    type: actionTypes.SIGN_OUT_REQUEST,
  };
};
export const signOutSuccess = () => {
  return {
    type: actionTypes.SIGN_OUT_SUCCESS,
  };
};

export const signOutFailure = () => {
  return {
    type: actionTypes.SIGN_OUT_FAILURE,
  };
};
