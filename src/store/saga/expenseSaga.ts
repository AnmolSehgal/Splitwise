import { put, takeEvery, takeLatest } from "@redux-saga/core/effects";
import {
  addExpense,
  addExpenseForUnVerfiedUser,
  settleAllExpense,
  settleAllExpenseForUnVerfiedUser,
  settleExpense,
  settleExpenseForUnVerfiedUser,
  userValid,
} from "../../services/firebase/firestore";
import {
  addExpenseRequest,
  addExpenseSuccess,
  addExpenseFailure,
  checkUserRequest,
  addExpenseForUnVerifiedRequest,
  addExpenseForUnVerifiedSuccess,
  addExpenseForUnVerifiedFailure,
  settleExpenseRequest,
  settleExpenseSuccess,
  settleExpenseFailure,
  settleExpenseForUnVerifiedRequest,
  settleExpenseForUnVerifiedSuccess,
  settleExpenseForUnVerifiedFailure,
  settleAllExpenseForUnVerifiedRequest,
  settleAllExpenseForUnVerifiedSuccess,
  settleAllExpenseRequest,
  settleAllExpenseSuccess,
} from "../actions/expenseActions";
import actionTypes from "../actionTypes";

function* addExpenseSaga({ payload }: ReturnType<typeof addExpenseRequest>) {
  try {
    yield addExpense(payload);
    yield put(addExpenseSuccess(payload));
  } catch (error) {
    console.log(error);
    yield put(addExpenseFailure());
  }
}

function* addExpenseSagaForUnVerified({
  payload,
}: ReturnType<typeof addExpenseForUnVerifiedRequest>) {
  try {
    yield addExpenseForUnVerfiedUser(payload);
    yield put(addExpenseForUnVerifiedSuccess(payload));
  } catch (error) {
    console.log(error);
    yield put(addExpenseForUnVerifiedFailure());
  }
}

function* settleExpenseSaga({
  payload,
}: ReturnType<typeof settleExpenseRequest>) {
  try {
    yield settleExpense(payload.userUID, payload.friendUID, payload.expenseId);
    yield put(
      settleExpenseSuccess(
        payload.expenseId,
        payload.userUID,
        payload.friendUID
      )
    );
  } catch (error) {
    yield put(settleExpenseFailure());
  }
}

function* settleExpenseSagaForUnVerified({
  payload,
}: ReturnType<typeof settleExpenseForUnVerifiedRequest>) {
  try {
    yield settleExpenseForUnVerfiedUser(
      payload.userUID,
      payload.friendUID,
      payload.expenseId
    );
    yield put(
      settleExpenseForUnVerifiedSuccess(
        payload.expenseId,
        payload.userUID,
        payload.friendUID
      )
    );
  } catch (error) {
    console.log(error);
    yield put(settleExpenseForUnVerifiedFailure());
  }
}

function* settleAllExpenseSaga({
  payload,
}: ReturnType<typeof settleAllExpenseRequest>) {
  try {
    yield settleAllExpense(payload.userUID, payload.friendUID);
    yield put(settleAllExpenseSuccess(payload.userUID, payload.friendUID));
  } catch (error) {
    yield put(settleExpenseFailure());
  }
}

function* settleAllExpenseSagaForUnVerified({
  payload,
}: ReturnType<typeof settleAllExpenseForUnVerifiedRequest>) {
  try {
    yield settleAllExpenseForUnVerfiedUser(payload.userUID, payload.friendUID);
    yield put(
      settleAllExpenseForUnVerifiedSuccess(payload.userUID, payload.friendUID)
    );
  } catch (error) {
    console.log(error);
    yield put(settleExpenseForUnVerifiedFailure());
  }
}

function* checkValidUser({
  payload,
}: ReturnType<typeof checkUserRequest>): Generator {
  try {
    //console.log("hello from user saga");
    yield userValid(payload.email);
  } catch (error) {
    console.log(error);
  }
}

const expenseSaga = [
  takeEvery(actionTypes.ADD_EXPENSE_REQUEST, addExpenseSaga),
  takeLatest(actionTypes.CHECK_USER_REQUEST, checkValidUser),
  takeLatest(
    actionTypes.ADD_EXPENSE_FOR_UNVERIFIED_REQUEST,
    addExpenseSagaForUnVerified
  ),
  takeLatest(actionTypes.SETTLE_EXPENSE_REQUEST, settleExpenseSaga),
  takeLatest(
    actionTypes.SETTLE_EXPENSE_FOR_UNVERIFIED_REQUEST,
    settleExpenseSagaForUnVerified
  ),
  takeLatest(actionTypes.SETTLE_EXPENSE_ALL_REQUEST, settleAllExpenseSaga),
  takeLatest(
    actionTypes.SETTLE_EXPENSE_ALL_FOR_UNVERIFIED_REQUEST,
    settleAllExpenseSagaForUnVerified
  ),
];

export default expenseSaga;
