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

export const friendListLoaderRequest = () => {
  return {
    type: actionTypes.FRIEND_LIST_LOADER_REQUEST,
  };
};

export const friendListLoaderSuccess = () => {
  return {
    type: actionTypes.FRIEND_LIST_LOADER_SUCCESS,
  };
};

export const friendListLoaderFailure = () => {
  return {
    type: actionTypes.FRIEND_LIST_LOADER_FAILURE,
  };
};
