import firebase from "firebase/app";
import { AddExpenseInterface, UserData } from "../../../store/types";
import { v4 as uuid } from "uuid";

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
  return (await db.doc(localStorage.getItem("uid") as string).get()).data();
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

export async function addExpense({
  friendUID,
  payerUID,
  userUID,
  expenseId,
  title,
  description,
  payerAmount,
  totalAmount,
  friendAmount,
  settleStatus,
}: AddExpenseInterface) {
  const db = await firebase.firestore().collection("/userDetails");
  const userData = (await db.doc(userUID).get()).data() as UserData;
  const obj = {
    payerAmount: payerAmount,
    payerUID: payerUID,
    expenseId: expenseId,
    title: title,
    description: description,
    totalAmount: totalAmount,
    friendAmount: friendAmount,
    settleStatus: settleStatus,
  };
  const index = userData.friends.findIndex((friend) => {
    return friendUID === friend.friendUID;
  });
  const friendData = (await db.doc(friendUID).get()).data() as UserData;
  const fIndex = friendData.friends.findIndex((friend) => {
    return userUID === friend.friendUID;
  });

  if (index >= 0 && fIndex >= 0) {
    userData.friends[index].paymentDetails.push(obj);
    friendData.friends[index].paymentDetails.push(obj);
    await db.doc(userUID).update({ friends: userData.friends });
    await db.doc(friendUID).update({ friends: friendData.friends });
  }
}
