import actionTypes from "../actionTypes/actionTypes";
import { v4 as uuid } from "uuid";
import { PaymentInfo } from "../types";

export interface PaymentDetails {
  title: string;
  description: string;
  totalAmount: number;
  friend: string;
  friendUid?: string;
  friendAmount: number;
  userAmount: string;
  paidBy: string;
}

export const addPaymentRequest = (details: PaymentDetails) => {
  return {
    type: actionTypes.ADD_PAYMENT_REQUEST,
    payload: {
      ...details,
      paymentId: "pay#" + uuid(),
      settleStatus: false,
      date: new Date(),
      settleDate: undefined,
    },
  };
};
export const addPaymentSuccess = (details: PaymentInfo) => {
  return {
    type: actionTypes.ADD_PAYMENT_SUCCESS,
    payload: { ...details },
  };
};

export const addPaymentFailure = () => {
  return {
    type: actionTypes.ADD_PAYMENT_FAILURE,
  };
};
