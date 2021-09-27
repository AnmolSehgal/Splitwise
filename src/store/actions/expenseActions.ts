import actionTypes from "../actionTypes";
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

// Add Expense actions for verified users

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
      date: Number(new Date()),
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
  date,
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
        date: date,
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

//Add Expense actions for unverified users

export const addExpenseForUnVerifiedFailure = () => {
  return {
    type: actionTypes.ADD_EXPENSE_FOR_UNVERIFIED_FAILURE,
  };
};

export const addExpenseForUnVerifiedRequest = (
  details: ExpenseDetails,
  userUID: string,
  friendUID: string
) => {
  return {
    type: actionTypes.ADD_EXPENSE_FOR_UNVERIFIED_REQUEST,
    payload: {
      ...details,
      expenseId: "pay#" + uuid(),
      settleStatus: false,
      userUID: userUID,
      friendUID: friendUID,
      date: Number(new Date()),
    },
  };
};
export const addExpenseForUnVerifiedSuccess = ({
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
  date,
}: AddExpenseInterface) => {
  return {
    type: actionTypes.ADD_EXPENSE_FOR_UNVERIFIED_SUCCESS,
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
        date: date,
      },
      friendUID: friendUID,
    },
  };
};

//Settle Expense actions for verified users

export const settleExpenseRequest = (
  expenseId: string,
  userUID: string,
  friendUID: string
) => {
  return {
    type: actionTypes.SETTLE_EXPENSE_REQUEST,
    payload: {
      expenseId: expenseId,
      userUID: userUID,
      friendUID: friendUID,
    },
  };
};
export const settleExpenseSuccess = (
  expenseId: string,
  userUID: string,
  friendUID: string
) => {
  return {
    type: actionTypes.SETTLE_EXPENSE_SUCCESS,
    payload: {
      expenseId: expenseId,
      userUID: userUID,
      friendUID: friendUID,
    },
  };
};

export const settleExpenseFailure = () => {
  return {
    type: actionTypes.SETTLE_EXPENSE_FAILURE,
  };
};

//Settle Expense actions for unverified users

export const settleExpenseForUnVerifiedFailure = () => {
  return {
    type: actionTypes.SETTLE_EXPENSE_FOR_UNVERIFIED_FAILURE,
  };
};

export const settleExpenseForUnVerifiedRequest = (
  expenseId: string,
  userUID: string,
  friendUID: string
) => {
  return {
    type: actionTypes.SETTLE_EXPENSE_FOR_UNVERIFIED_REQUEST,
    payload: {
      expenseId: expenseId,
      userUID: userUID,
      friendUID: friendUID,
    },
  };
};
export const settleExpenseForUnVerifiedSuccess = (
  expenseId: string,
  userUID: string,
  friendUID: string
) => {
  return {
    type: actionTypes.SETTLE_EXPENSE_FOR_UNVERIFIED_SUCCESS,
    payload: {
      expenseId: expenseId,
      userUID: userUID,
      friendUID: friendUID,
    },
  };
};

export const settleAllExpenseRequest = (userUID: string, friendUID: string) => {
  return {
    type: actionTypes.SETTLE_EXPENSE_ALL_REQUEST,
    payload: {
      userUID: userUID,
      friendUID: friendUID,
    },
  };
};
export const settleAllExpenseSuccess = (userUID: string, friendUID: string) => {
  return {
    type: actionTypes.SETTLE_EXPENSE_ALL_SUCCESS,
    payload: {
      userUID: userUID,
      friendUID: friendUID,
    },
  };
};

export const settleAllExpenseFailure = () => {
  return {
    type: actionTypes.SETTLE_EXPENSE_ALL_FAILURE,
  };
};

//Settle Expense actions for unverified users

export const settleAllExpenseForUnVerifiedFailure = () => {
  return {
    type: actionTypes.SETTLE_EXPENSE_ALL_FOR_UNVERIFIED_FAILURE,
  };
};

export const settleAllExpenseForUnVerifiedRequest = (
  userUID: string,
  friendUID: string
) => {
  return {
    type: actionTypes.SETTLE_EXPENSE_ALL_FOR_UNVERIFIED_REQUEST,
    payload: {
      userUID: userUID,
      friendUID: friendUID,
    },
  };
};
export const settleAllExpenseForUnVerifiedSuccess = (
  userUID: string,
  friendUID: string
) => {
  return {
    type: actionTypes.SETTLE_EXPENSE_ALL_FOR_UNVERIFIED_SUCCESS,
    payload: {
      userUID: userUID,
      friendUID: friendUID,
    },
  };
};

//check user action

export const checkUserRequest = (email: string) => {
  return {
    type: actionTypes.CHECK_USER_REQUEST,
    payload: {
      email: email,
    },
  };
};
