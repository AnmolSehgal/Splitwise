import actionTypes from "../actionTypes";
import {} from "../actions/signUpAction";
import {
  loaderFailure,
  loaderRequest,
  loaderSuccess,
} from "../actions/loaderAction";
import { LoaderState } from "../types";

const initState: LoaderState = {
  isLoader: false,
};
const loaderReducer = (
  state = initState,
  action:
    | ReturnType<typeof loaderRequest>
    | ReturnType<typeof loaderSuccess>
    | ReturnType<typeof loaderFailure>
) => {
  switch (action.type) {
    case actionTypes.LOADER_REQUEST:
      return { ...state, isLoader: true };
    case actionTypes.LOADER_SUCCESS:
      return { ...state, isLoader: false };
    case actionTypes.LOADER_FAILURE:
      return { ...state, isLoader: false };
    default:
      return { ...state };
  }
};

export default loaderReducer;
