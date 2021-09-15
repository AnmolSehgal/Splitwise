import actionTypes from "../actionTypes";
import {} from "../actions/signUpAction";
import {
  friendListLoaderFailure,
  friendListLoaderRequest,
  friendListLoaderSuccess,
  loaderFailure,
  loaderRequest,
  loaderSuccess,
} from "../actions/loaderAction";
import { LoaderState } from "../types";

const initState: LoaderState = {
  isLoader: false,
  friendListLoader: false,
};
const loaderReducer = (
  state = initState,
  action:
    | ReturnType<typeof loaderRequest>
    | ReturnType<typeof loaderSuccess>
    | ReturnType<typeof loaderFailure>
    | ReturnType<typeof friendListLoaderRequest>
    | ReturnType<typeof friendListLoaderSuccess>
    | ReturnType<typeof friendListLoaderFailure>
) => {
  switch (action.type) {
    case actionTypes.LOADER_REQUEST:
      return { ...state, isLoader: true };
    case actionTypes.LOADER_SUCCESS:
      return { ...state, isLoader: false };
    case actionTypes.LOADER_FAILURE:
      return { ...state, isLoader: false };

    case actionTypes.FRIEND_LIST_LOADER_REQUEST:
      return { ...state, friendListLoader: true };
    case actionTypes.FRIEND_LIST_LOADER_SUCCESS:
      return { ...state, friendListLoader: false };
    case actionTypes.FRIEND_LIST_LOADER_FAILURE:
      return { ...state, friendListLoader: false };

    default:
      return { ...state };
  }
};

export default loaderReducer;
