// eslint-disable-next-line
import { put, takeEvery, takeLatest } from "@redux-saga/core/effects";
import {
  // eslint-disable-next-line
  addExpense,
  userValid,
} from "../../services/firebase/firestore/firestore";
import {
  // eslint-disable-next-line
  addExpenseRequest,
  // eslint-disable-next-line
  addExpenseSuccess,
  // eslint-disable-next-line
  addExpenseFailure,
  checkUserRequest,
} from "../actions/expenseActions";
import actionTypes from "../actionTypes/actionTypes";

// function* addExpenseSaga({ payload }: ReturnType<typeof addExpenseRequest>) {
//   try {
//     yield addExpense(payload);
//     yield put(addExpenseSuccess(payload));
//   } catch (error) {
//     yield put(addExpenseFailure());
//   }
// }

function* checkValidUser({
  payload,
}: ReturnType<typeof checkUserRequest>): Generator {
  try {
    console.log("hello from user saga");
    yield userValid(payload.email);
  } catch (error: any) {
    console.log(error.message);
  }
}

const expenseSaga = [
  // takeEvery(actionTypes.ADD_PAYMENT_REQUEST, addExpenseSaga),
  takeLatest(actionTypes.CHECK_USER_REQUEST, checkValidUser),
];

export default expenseSaga;
