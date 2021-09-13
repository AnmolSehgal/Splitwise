import {
  addExpenseFailure,
  addExpenseRequest,
  addExpenseSuccess,
} from "../actions/expenseActions";
import actionTypes from "../actionTypes/actionTypes";
import { ExpenseInfo } from "../types";

export interface ExpenseState {
  expensesList: ExpenseInfo[];
  isExpense: boolean;
}

const initState: ExpenseState = {
  expensesList: [],
  isExpense: true,
};

const expenseReducer = (
  state = initState,
  action:
    | ReturnType<typeof addExpenseRequest>
    | ReturnType<typeof addExpenseSuccess>
    | ReturnType<typeof addExpenseFailure>
) => {
  switch (action.type) {
    case actionTypes.ADD_PAYMENT_REQUEST:
      return { ...state };
    case actionTypes.ADD_PAYMENT_SUCCESS:
      return {
        ...state,
        expensesList: [...state.expensesList, action.payload.details],
      };
    case actionTypes.ADD_PAYMENT_FAILURE:
      return {
        ...state,
        isExpense: false,
      };
    default:
      return { ...state };
  }
};

export default expenseReducer;
