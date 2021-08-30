import firebase from "firebase/app";
import { ExpenseInfo } from "../../../store/types";

export async function addExpense(paymentDetails: ExpenseInfo) {
  const db = await firebase.firestore().collection("/payments");
  await db.doc(paymentDetails.expenseId).set(paymentDetails);
}
