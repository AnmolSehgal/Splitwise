import actionTypes from "../actionTypes/actionTypes";
import { v4 as uuid } from "uuid";
import { ExpenseInfo } from "../types";

export interface expenseDetails {
  title: string;
  description: string;
  totalAmount: number;
  friend: string;
  friendUid?: string;
  friendAmount: number;
  userAmount: number;
  paidBy: string;
}

export const addExpenseRequest = (details: expenseDetails) => {
  return {
    type: actionTypes.ADD_PAYMENT_REQUEST,
    payload: {
      ...details,
      expenseId: "pay#" + uuid(),
      settleStatus: false,
      date: new Date(),
      settleDate: undefined,
    },
  };
};
export const addExpenseSuccess = (details: ExpenseInfo) => {
  return {
    type: actionTypes.ADD_PAYMENT_SUCCESS,
    payload: { details: details },
  };
};

export const addExpenseFailure = () => {
  return {
    type: actionTypes.ADD_PAYMENT_FAILURE,
  };
};
