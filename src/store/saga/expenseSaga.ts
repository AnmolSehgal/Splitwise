import { put, takeEvery } from "@redux-saga/core/effects";
import { addExpense } from "../../services/firebase/firestore/firestore";
import {
  addExpenseRequest,
  addExpenseSuccess,
  addExpenseFailure,
} from "../actions/expenseActions";
import actionTypes from "../actionTypes/actionTypes";

function* addExpenseSaga({ payload }: ReturnType<typeof addExpenseRequest>) {
  try {
    yield addExpense(payload);
    yield put(addExpenseSuccess(payload));
  } catch (error) {
    yield put(addExpenseFailure());
  }
}

const expenseSaga = [
  takeEvery(actionTypes.ADD_PAYMENT_REQUEST, addExpenseSaga),
];

export default expenseSaga;
