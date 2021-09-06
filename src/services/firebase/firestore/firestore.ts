import firebase from "firebase/app";
import { ExpenseInfo } from "../../../store/types";

export async function addExpense(paymentDetails: ExpenseInfo) {
  const db = await firebase.firestore().collection("/payments");
  await db.doc(paymentDetails.expenseId).set(paymentDetails);
}

export async function settingUpUser(email: string, userName: string) {
  const db = await firebase.firestore().collection("/userDetails");
  await db.doc(email).set({ email: email, friends: [], userName: userName });
}

export async function userValid(email: string) {
  const db = await firebase.firestore().collection("/userDetails");
  return Promise.resolve(await db.doc(email));
}

export async function addFriendUsingEmail(email: string) {
  const db = await firebase.firestore().collection("/userDetails");
  const userData = await (
    await db.doc(localStorage.getItem("email") as string).get()
  ).data();
  const friendData = await (await db.doc(email).get()).data();
  await db.doc(localStorage.getItem("email") as string).set({
    friends: [
      ...userData?.friends,
      { userName: friendData?.userName, email: friendData?.email },
    ],
  });
  await db.doc(email).set({
    friends: [
      ...friendData?.friends,
      { userName: userData?.userName, email: userData?.email },
    ],
  });
}
