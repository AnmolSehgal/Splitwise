import actionTypes from "../actionTypes";

export const showErrorRequest = (errorMessage: string) => {
  return {
    type: actionTypes.SHOW_ERROR_REQUEST,
    payload: {
      errorMessage: errorMessage,
    },
  };
};

export const hideErrorRequest = () => {
  return { type: actionTypes.HIDE_ERROR_REQUEST };
};
