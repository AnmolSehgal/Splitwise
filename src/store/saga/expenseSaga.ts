import { put, takeEvery, takeLatest } from "@redux-saga/core/effects";
import {
  addExpense,
  userValid,
} from "../../services/firebase/firestore/firestore";
import {
  addExpenseRequest,
  addExpenseSuccess,
  addExpenseFailure,
  checkUserRequest,
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

function* checkValidUser({
  payload,
}: ReturnType<typeof checkUserRequest>): Generator {
  try {
    console.log("hello from user saga");
    const data = yield userValid(payload.email);
    yield console.log(data);
  } catch (error) {
    console.log(error);
  }
}

const expenseSaga = [
  takeEvery(actionTypes.ADD_PAYMENT_REQUEST, addExpenseSaga),
  takeLatest(actionTypes.CHECK_USER_REQUEST, checkValidUser),
];

export default expenseSaga;
