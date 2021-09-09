import actionTypes from "../actionTypes/actionTypes";
import { v4 as uuid } from "uuid";
import { AddExpenseInterface } from "../types";

export interface ExpenseDetails {
  title: string;
  description: string;
  payerAmount: number;
  totalAmount: number;
  friendAmount: number;
  payerUID: string;
}

export const addExpenseRequest = (
  details: ExpenseDetails,
  userUID: string,
  friendUID: string
) => {
  return {
    type: actionTypes.ADD_EXPENSE_REQUEST,
    payload: {
      ...details,
      expenseId: "pay#" + uuid(),
      settleStatus: false,
      userUID: userUID,
      friendUID: friendUID,
    },
  };
};
export const addExpenseSuccess = ({
  friendUID,
  payerUID,
  userUID,
  expenseId,
  title,
  description,
  payerAmount,
  totalAmount,
  friendAmount,
  settleStatus,
}: AddExpenseInterface) => {
  return {
    type: actionTypes.ADD_EXPENSE_SUCCESS,
    payload: {
      details: {
        payerUID: payerUID,
        userUID: userUID,
        expenseId: expenseId,
        title: title,
        description: description,
        payerAmount: payerAmount,
        totalAmount: totalAmount,
        friendAmount: friendAmount,
        settleStatus: settleStatus,
      },
      friendUID: friendUID,
    },
  };
};

export const addExpenseFailure = () => {
  return {
    type: actionTypes.ADD_EXPENSE_FAILURE,
  };
};

export const checkUserRequest = (email: string) => {
  return {
    type: actionTypes.CHECK_USER_REQUEST,
    payload: {
      email: email,
    },
  };
};
