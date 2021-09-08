import {
  addFriendUsingEmailFailure,
  addFriendUsingEmailRequest,
  addFriendUsingEmailSuccess,
  addFriendUsingNameFailure,
  addFriendUsingNameRequest,
  addFriendUsingNameSuccess,
  getFriendsFailure,
  getFriendsRequest,
  getFriendsSuccess,
} from "../actions/friendAction";
import actionTypes from "../actionTypes/actionTypes";
import { Friend } from "../types";

export interface FriendState {
  friends: Friend[];
}

const initState: FriendState = {
  friends: [],
};

const friendsReducer = (
  state = initState,
  action:
    | ReturnType<typeof addFriendUsingEmailRequest>
    | ReturnType<typeof addFriendUsingEmailSuccess>
    | ReturnType<typeof addFriendUsingEmailFailure>
    | ReturnType<typeof addFriendUsingNameRequest>
    | ReturnType<typeof addFriendUsingNameSuccess>
    | ReturnType<typeof addFriendUsingNameFailure>
    | ReturnType<typeof getFriendsRequest>
    | ReturnType<typeof getFriendsSuccess>
    | ReturnType<typeof getFriendsFailure>
) => {
  switch (action.type) {
    case actionTypes.ADD_FRIEND_USING_NAME_REQUEST:
      return { ...state };
    case actionTypes.ADD_FRIEND_USING_NAME_SUCCESS:
      return {
        ...state,
        friends: [...action.payload.friends],
      };
    case actionTypes.ADD_FRIEND_USING_NAME_FAILURE:
      return {
        ...state,
      };
    case actionTypes.ADD_FRIEND_EMAIL_REQUEST:
      return { ...state };
    case actionTypes.ADD_FRIEND_EMAIL_SUCCESS:
      return {
        ...state,
        friends: [...action.payload.friends],
      };
    case actionTypes.ADD_FRIEND_EMAIL_FAILURE:
      return {
        ...state,
      };
    case actionTypes.GET_USER_FRIENDS_REQUEST:
      return { ...state };
    case actionTypes.GET_USER_FRIENDS_SUCCESS:
      return {
        ...state,
        friends: [...action.payload.friends],
      };
    case actionTypes.GET_USER_FRIENDS_FAILURE:
      return {
        ...state,
      };
    default:
      return { ...state };
  }
};

export default friendsReducer;