import firebase from "firebase/app";
import { PaymentInfo } from "../../../store/types";

export async function addPayment(paymentDetails: PaymentInfo) {
  const db = await firebase.firestore().collection("/payments");
  await db.doc(paymentDetails.paymentId).set(paymentDetails);
}
