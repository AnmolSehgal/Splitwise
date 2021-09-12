import {
  addExpenseFailure,
  addExpenseForUnVerifiedFailure,
  addExpenseForUnVerifiedRequest,
  addExpenseForUnVerifiedSuccess,
  addExpenseRequest,
  addExpenseSuccess,
  settleAllExpenseFailure,
  settleAllExpenseForUnVerifiedFailure,
  settleAllExpenseForUnVerifiedRequest,
  settleAllExpenseForUnVerifiedSuccess,
  settleAllExpenseRequest,
  settleAllExpenseSuccess,
  settleExpenseFailure,
  settleExpenseForUnVerifiedFailure,
  settleExpenseForUnVerifiedRequest,
  settleExpenseForUnVerifiedSuccess,
  settleExpenseRequest,
  settleExpenseSuccess,
} from "../actions/expenseActions";
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
import actionTypes from "../actionTypes";
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
    | ReturnType<typeof addExpenseRequest>
    | ReturnType<typeof addExpenseSuccess>
    | ReturnType<typeof addExpenseFailure>
    | ReturnType<typeof addExpenseForUnVerifiedRequest>
    | ReturnType<typeof addExpenseForUnVerifiedSuccess>
    | ReturnType<typeof addExpenseForUnVerifiedFailure>
    | ReturnType<typeof settleExpenseRequest>
    | ReturnType<typeof settleExpenseSuccess>
    | ReturnType<typeof settleExpenseFailure>
    | ReturnType<typeof settleExpenseForUnVerifiedRequest>
    | ReturnType<typeof settleExpenseForUnVerifiedSuccess>
    | ReturnType<typeof settleExpenseForUnVerifiedFailure>
    | ReturnType<typeof settleAllExpenseRequest>
    | ReturnType<typeof settleAllExpenseSuccess>
    | ReturnType<typeof settleAllExpenseFailure>
    | ReturnType<typeof settleAllExpenseForUnVerifiedRequest>
    | ReturnType<typeof settleAllExpenseForUnVerifiedSuccess>
    | ReturnType<typeof settleAllExpenseForUnVerifiedFailure>
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

    case actionTypes.ADD_EXPENSE_REQUEST:
      return { ...state };

    case actionTypes.ADD_EXPENSE_SUCCESS:
      const friendsData = state.friends.map((friend) => friend);
      const index = state.friends.findIndex((friend) => {
        return friend.friendUID === action.payload.friendUID;
      });
      friendsData[index].paymentDetails.push(action.payload.details);
      return {
        ...state,
        friends: [...friendsData],
      };

    case actionTypes.ADD_EXPENSE_FAILURE:
      return {
        ...state,
      };

    case actionTypes.ADD_EXPENSE_FOR_UNVERIFIED_REQUEST:
      return { ...state };

    case actionTypes.ADD_EXPENSE_FOR_UNVERIFIED_SUCCESS:
      const friends = state.friends.map((friend) => friend);
      const idx = state.friends.findIndex((friend) => {
        return friend.friendUID === action.payload.friendUID;
      });
      friends[idx].paymentDetails.push(action.payload.details);
      return {
        ...state,
        friends: [...friends],
      };

    case actionTypes.ADD_EXPENSE_FOR_UNVERIFIED_FAILURE:
      return {
        ...state,
      };

    case actionTypes.SETTLE_EXPENSE_REQUEST:
      return { ...state };
    case actionTypes.SETTLE_EXPENSE_SUCCESS:
      const data = state.friends.map((friend) => friend);

      const findex = state.friends.findIndex((friend) => {
        return friend.friendUID === action.payload.friendUID;
      });

      const expIndex = data[findex].paymentDetails.findIndex(
        (data) => data.expenseId === action.payload.expenseId
      );

      data[findex].paymentDetails[expIndex].settleStatus = true;
      return {
        ...state,
        friends: [...data],
      };
    case actionTypes.SETTLE_EXPENSE_FAILURE:
      return {
        ...state,
      };

    case actionTypes.SETTLE_EXPENSE_FOR_UNVERIFIED_REQUEST:
      return { ...state };

    case actionTypes.SETTLE_EXPENSE_FOR_UNVERIFIED_SUCCESS:
      const frienddata = state.friends.map((friend) => friend);

      const fIdx = state.friends.findIndex((friend) => {
        return friend.friendUID === action.payload.friendUID;
      });
      const expIdx = frienddata[fIdx].paymentDetails.findIndex(
        (data) => data.expenseId === action.payload.expenseId
      );
      frienddata[fIdx].paymentDetails[expIdx].settleStatus = true;
      return {
        ...state,
        friends: [...frienddata],
      };

    case actionTypes.SETTLE_EXPENSE_FOR_UNVERIFIED_FAILURE:
      return {
        ...state,
      };

    case actionTypes.SETTLE_EXPENSE_ALL_REQUEST:
      return { ...state };
    case actionTypes.SETTLE_EXPENSE_ALL_SUCCESS:
      const friend_data = state.friends.map((friend) => friend);

      const f_index = state.friends.findIndex((friend) => {
        return friend.friendUID === action.payload.friendUID;
      });

      friend_data[f_index].paymentDetails = friend_data[
        f_index
      ].paymentDetails.map((data) => {
        return {
          expenseId: data.expenseId,
          title: data.title,
          description: data.description,
          payerUID: data.payerUID,
          payerAmount: data.payerAmount,
          friendAmount: data.friendAmount,
          totalAmount: data.totalAmount,
          settleStatus: true,
        };
      });

      return {
        ...state,
        friends: [...friend_data],
      };
    case actionTypes.SETTLE_EXPENSE_ALL_FAILURE:
      return {
        ...state,
      };

    case actionTypes.SETTLE_EXPENSE_ALL_FOR_UNVERIFIED_REQUEST:
      return { ...state };

    case actionTypes.SETTLE_EXPENSE_ALL_FOR_UNVERIFIED_SUCCESS:
      const f_data = state.friends.map((friend) => friend);

      const f_Idx = state.friends.findIndex((friend) => {
        return friend.friendUID === action.payload.friendUID;
      });
      f_data[f_Idx].paymentDetails = f_data[f_Idx].paymentDetails.map(
        (data) => {
          return {
            expenseId: data.expenseId,
            title: data.title,
            description: data.description,
            payerUID: data.payerUID,
            payerAmount: data.payerAmount,
            friendAmount: data.friendAmount,
            totalAmount: data.totalAmount,
            settleStatus: true,
          };
        }
      );

      return {
        ...state,
        friends: [...f_data],
      };

    case actionTypes.SETTLE_EXPENSE_ALL_FOR_UNVERIFIED_FAILURE:
      return {
        ...state,
      };
    default:
      return { ...state };
  }
};

export default friendsReducer;
