import firebase from "firebase/app";
import { ExpenseInfo, UserData } from "../../../store/types";
import { v4 as uuid } from "uuid";

export async function addExpense(paymentDetails: ExpenseInfo) {
  const db = await firebase.firestore().collection("/payments");
  await db.doc(paymentDetails.expenseId).set(paymentDetails);
}

export async function settingUpUser(
  uid: string,
  email: string,
  userName: string
) {
  const db = await firebase.firestore().collection("/userDetails");
  await db
    .doc(uid)
    .set({ uid: uid, email: email, friends: [], userName: userName });
}

export async function userValid(email: string) {
  const db = await firebase.firestore().collection("/userDetails");
  return Promise.resolve(await db.doc(email));
}

export async function addFriendUsingEmail(email: string) {
  const db = await firebase.firestore().collection("/userDetails");
  const userData = (await (
    await db.doc(localStorage.getItem("uid") as string).get()
  ).data()) as UserData;

  const data = await (await db.get()).docs;
  const friendDoc = await data.filter((doc) => {
    const data = doc.data();
    return data.email === email;
  });
  if (!friendDoc) throw new Error("Invalid Email");
  const friendData = (await friendDoc[0].data()) as UserData;
  console.log(friendData);
  if (
    userData.friends.findIndex((data) => {
      return data.friendUID === friendData.uid;
    }) < 0
  ) {
    await db.doc(localStorage.getItem("uid") as string).update({
      friends: firebase.firestore.FieldValue.arrayUnion({
        userName: friendData.userName,
        paymentDetails: [],
        isVerified: true,
        friendUID: friendData.uid,
      }),
    });
    await db.doc(friendData.uid).update({
      friends: firebase.firestore.FieldValue.arrayUnion({
        userName: userData.userName,
        paymentDetails: [],
        isVerified: true,
        friendUID: localStorage.getItem("uid"),
      }),
    });
  }

  //if (
  //   userData.friends.findIndex((data) => {
  //     return data.friendUID === friendData.uid;
  //   }) < 0
  // )
  //   throw new Error("UserExist");
}

export async function addFriendUsingName(name: string) {
  const uid = uuid();
  const db = await firebase.firestore().collection("/userDetails");
  await db.doc(localStorage.getItem("uid") as string).update({
    friends: firebase.firestore.FieldValue.arrayUnion({
      userName: name,
      isVerified: false,
      paymentDetails: [],
      friendUID: uid,
    }),
  });
  return (await (
    await db.doc(localStorage.getItem("uid") as string).get()
  ).data()) as UserData;
}

export async function getUserFriends() {
  const db = await firebase.firestore().collection("/userDetails");
  return (await (
    await db.doc(localStorage.getItem("uid") as string).get()
  ).data()) as UserData;
}
