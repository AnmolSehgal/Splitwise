import firebase from "firebase/app";
import { ExpenseInfo, UserData } from "../../../store/types";
import { v4 as uuid } from "uuid";

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
  const relationId = uuid();
  const db = await firebase.firestore().collection("/userDetails");
  const userData = (await (
    await db.doc(localStorage.getItem("email") as string).get()
  ).data()) as UserData;
  const friendData = (await (await db.doc(email).get()).data()) as UserData;

  if (
    userData.friends.findIndex((data) => {
      return data.email === email;
    }) < 0
  ) {
    await db.doc(localStorage.getItem("email") as string).update({
      friends: firebase.firestore.FieldValue.arrayUnion({
        userName: friendData.userName,
        email: friendData.email,
        relationId: relationId,
      }),
    });

    await db.doc(email).update({
      friends: firebase.firestore.FieldValue.arrayUnion({
        userName: userData.userName,
        email: userData.email,
        relationId: relationId,
      }),
    });

    return (await (
      await db.doc(localStorage.getItem("email") as string).get()
    ).data()) as UserData;
  }
}

export async function addFriendUsingName(name: string) {
  const relationId = uuid();
  const db = await firebase.firestore().collection("/userDetails");
  await db.doc(localStorage.getItem("email") as string).update({
    friends: firebase.firestore.FieldValue.arrayUnion({
      userName: name,
      email: null,
      relationId,
    }),
  });
  return (await (
    await db.doc(localStorage.getItem("email") as string).get()
  ).data()) as UserData;
}
