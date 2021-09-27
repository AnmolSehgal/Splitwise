import actionTypes from "../actionTypes";

export const signUpAuthRequest = (
  email: string,
  password: string,
  name: string
) => {
  return {
    type: actionTypes.SIGN_UP_AUTH_REQUEST,
    payload: {
      name: name,
      email: email,
      password: password,
    },
  };
};

export const signUpAuthSuccess = () => {
  return {
    type: actionTypes.SIGN_UP_AUTH_SUCCESS,
  };
};

export const signUpAuthFailure = () => {
  return {
    type: actionTypes.SIGN_UP_AUTH_FAILURE,
  };
};
