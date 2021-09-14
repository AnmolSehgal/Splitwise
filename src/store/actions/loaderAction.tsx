import actionTypes from "../actionTypes";

export const loaderRequest = () => {
  return {
    type: actionTypes.LOADER_REQUEST,
  };
};

export const loaderSuccess = () => {
  return {
    type: actionTypes.LOADER_SUCCESS,
  };
};

export const loaderFailure = () => {
  return {
    type: actionTypes.LOADER_FAILURE,
  };
};
