import actionTypes from "../actionTypes/actionTypes";

export const addFriendUsingEmailRequest = (email: string) => {
  return {
    type: actionTypes.ADD_FRIEND_REQUEST,
    payload: {
      email: email,
    },
  };
};
