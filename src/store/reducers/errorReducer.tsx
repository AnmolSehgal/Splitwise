import { ErrorState } from "../types";
import actionTypes from "../actionTypes/actionTypes";
import { showErrorRequest, hideErrorRequest } from "../actions/errorsActions";

const initState: ErrorState = {
  showError: false,
  errorMessage: "",
};
const errorReducer = (
  state = initState,
  action:
    | ReturnType<typeof showErrorRequest>
    | ReturnType<typeof hideErrorRequest>
) => {
  switch (action.type) {
    case actionTypes.SHOW_ERROR_REQUEST:
      return {
        ...state,
        showError: true,
        errorMessage: action.payload.errorMessage,
      };
    case actionTypes.HIDE_ERROR_REQUEST: {
      return {
        ...state,
        showError: false,
        errorMessage: "",
      };
    }
    default:
      return { ...state };
  }
};

export default errorReducer;
