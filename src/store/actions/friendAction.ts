import actionTypes from "../actionTypes";
export const addFriendUsingEmailRequest = (email: string) => {
  return {
    type: actionTypes.ADD_FRIEND_EMAIL_REQUEST,
    payload: {
      email: email,
    },
  };
};

export const addFriendUsingEmailSuccess = (data: any) => {
  return {
    type: actionTypes.ADD_FRIEND_EMAIL_SUCCESS,
    payload: {
      friends: data.friends,
    },
  };
};

export const addFriendUsingEmailFailure = () => {
  return {
    type: actionTypes.ADD_FRIEND_EMAIL_FAILURE,
  };
};

export const addFriendUsingNameRequest = (name: string) => {
  return {
    type: actionTypes.ADD_FRIEND_USING_NAME_REQUEST,
    payload: {
      userName: name,
    },
  };
};

export const addFriendUsingNameSuccess = (data: any) => {
  return {
    type: actionTypes.ADD_FRIEND_USING_NAME_SUCCESS,
    payload: {
      friends: data.friends,
    },
  };
};

export const addFriendUsingNameFailure = () => {
  return {
    type: actionTypes.ADD_FRIEND_USING_NAME_FAILURE,
  };
};

export const getFriendsRequest = () => {
  return {
    type: actionTypes.GET_USER_FRIENDS_REQUEST,
  };
};

export const getFriendsSuccess = (data: any) => {
  return {
    type: actionTypes.GET_USER_FRIENDS_SUCCESS,
    payload: {
      friends: data.friends,
    },
  };
};

export const getFriendsFailure = () => {
  return {
    type: actionTypes.GET_USER_FRIENDS_FAILURE,
  };
};
