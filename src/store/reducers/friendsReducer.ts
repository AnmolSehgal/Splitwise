import {
  addFriendUsingEmailFailure,
  addFriendUsingEmailRequest,
  addFriendUsingEmailSuccess,
  addFriendUsingNameFailure,
  addFriendUsingNameRequest,
  addFriendUsingNameSuccess,
} from "../actions/addFriendAction";
import actionTypes from "../actionTypes/actionTypes";
import { Friend } from "../types";

export interface FriendState {
  friends: Friend[];
  isExpense: boolean;
}

const initState: FriendState = {
  friends: [],
  isExpense: true,
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
) => {
  switch (action.type) {
    case actionTypes.ADD_FRIEND_USING_NAME_REQUEST:
      return { ...state };
    case actionTypes.ADD_FRIEND_USING_NAME_SUCCESS:
      return {
        ...state,
        friend: [action.payload.friends],
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
        friend: [action.payload.friends],
      };
    case actionTypes.ADD_FRIEND_EMAIL_FAILURE:
      return {
        ...state,
      };
    default:
      return { ...state };
  }
};

export default friendsReducer;
