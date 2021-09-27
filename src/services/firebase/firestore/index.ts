import firebase from "firebase/app";
import { AddExpenseInterface, UserData } from "../../../store/types";
import { v4 as uuid } from "uuid";
import { UID } from "../../../utils/constants/appConstant";

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
    await db.doc(localStorage.getItem(UID) as string).get()
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
    await db.doc(localStorage.getItem(UID) as string).update({
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
        friendUID: localStorage.getItem(UID),
      }),
    });
  } else {
    throw new Error("Friend already exists.");
  }

  return (await db.doc(localStorage.getItem(UID) as string).get()).data();
}

export async function addFriendUsingName(name: string) {
  const uid = uuid();
  const db = await firebase.firestore().collection("/userDetails");
  await db.doc(localStorage.getItem(UID) as string).update({
    friends: firebase.firestore.FieldValue.arrayUnion({
      userName: name,
      isVerified: false,
      paymentDetails: [],
      friendUID: uid,
    }),
  });
  return (await (
    await db.doc(localStorage.getItem(UID) as string).get()
  ).data()) as UserData;
}

export async function getUserFriends() {
  const db = await firebase.firestore().collection("/userDetails");
  return (await (
    await db.doc(localStorage.getItem(UID) as string).get()
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
  date,
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
    date: date,
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
    friendData.friends[fIndex].paymentDetails.push(obj);
    await db.doc(userUID).update({ friends: userData.friends });
    await db.doc(friendUID).update({ friends: friendData.friends });
  }
}

export async function addExpenseForUnVerfiedUser({
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
  date,
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
    date: date,
  };
  const index = userData.friends.findIndex((friend) => {
    return friendUID === friend.friendUID;
  });

  if (index >= 0) {
    userData.friends[index].paymentDetails.push(obj);
    await db.doc(userUID).update({ friends: userData.friends });
  }
}

export async function settleExpense(
  userUID: string,
  friendUID: string,
  expenseId: string
) {
  const db = await firebase.firestore().collection("/userDetails");
  const userData = (await db.doc(userUID).get()).data() as UserData;
  const index = userData.friends.findIndex((friend) => {
    return friendUID === friend.friendUID;
  });
  const friendData = (await db.doc(friendUID).get()).data() as UserData;
  const fIndex = friendData.friends.findIndex((friend) => {
    return userUID === friend.friendUID;
  });

  if (index >= 0 && fIndex >= 0) {
    const userPaymentIndex = userData.friends[index].paymentDetails.findIndex(
      (val) => val.expenseId === expenseId
    );
    const friendPaymentIndex = friendData.friends[
      fIndex
    ].paymentDetails.findIndex((val) => val.expenseId === expenseId);
    if (userPaymentIndex >= 0 && friendPaymentIndex >= 0) {
      userData.friends[index].paymentDetails[userPaymentIndex].settleStatus =
        !userData.friends[index].paymentDetails[userPaymentIndex].settleStatus;

      friendData.friends[fIndex].paymentDetails[
        friendPaymentIndex
      ].settleStatus =
        !friendData.friends[fIndex].paymentDetails[friendPaymentIndex]
          .settleStatus;
      await db.doc(userUID).update({ friends: userData.friends });
      await db.doc(friendUID).update({ friends: friendData.friends });
    }
  }
}

export async function settleExpenseForUnVerfiedUser(
  userUID: string,
  friendUID: string,
  expenseId: string
) {
  const db = await firebase.firestore().collection("/userDetails");
  const userData = (await db.doc(userUID).get()).data() as UserData;
  const index = userData.friends.findIndex((friend) => {
    return friendUID === friend.friendUID;
  });
  if (index >= 0) {
    const userPaymentIndex = userData.friends[index].paymentDetails.findIndex(
      (val) => val.expenseId === expenseId
    );
    if (userPaymentIndex >= 0) {
      userData.friends[index].paymentDetails[userPaymentIndex].settleStatus =
        !userData.friends[index].paymentDetails[userPaymentIndex].settleStatus;

      await db.doc(userUID).update({ friends: userData.friends });
    }
  }
}

export async function settleAllExpense(userUID: string, friendUID: string) {
  const db = await firebase.firestore().collection("/userDetails");
  const userData = (await db.doc(userUID).get()).data() as UserData;
  const index = userData.friends.findIndex((friend) => {
    return friendUID === friend.friendUID;
  });
  const friendData = (await db.doc(friendUID).get()).data() as UserData;
  const fIndex = friendData.friends.findIndex((friend) => {
    return userUID === friend.friendUID;
  });

  userData.friends[index].paymentDetails = userData.friends[
    index
  ].paymentDetails.map((data) => {
    return {
      expenseId: data.expenseId,
      title: data.title,
      description: data.description,
      payerUID: data.payerUID,
      payerAmount: data.payerAmount,
      friendAmount: data.friendAmount,
      totalAmount: data.totalAmount,
      settleStatus: true,
      date: data.date,
    };
  });
  friendData.friends[fIndex].paymentDetails = friendData.friends[
    fIndex
  ].paymentDetails.map((data) => {
    return {
      expenseId: data.expenseId,
      title: data.title,
      description: data.description,
      payerUID: data.payerUID,
      payerAmount: data.payerAmount,
      friendAmount: data.friendAmount,
      totalAmount: data.totalAmount,
      settleStatus: true,
      date: data.date,
    };
  });

  await db.doc(userUID).update({ friends: userData.friends });
  await db.doc(friendUID).update({ friends: friendData.friends });
}

export async function settleAllExpenseForUnVerfiedUser(
  userUID: string,
  friendUID: string
) {
  const db = await firebase.firestore().collection("/userDetails");
  const userData = (await db.doc(userUID).get()).data() as UserData;
  const index = userData.friends.findIndex((friend) => {
    return friendUID === friend.friendUID;
  });

  userData.friends[index].paymentDetails = userData.friends[
    index
  ].paymentDetails.map((data) => {
    return {
      expenseId: data.expenseId,
      title: data.title,
      description: data.description,
      payerUID: data.payerUID,
      payerAmount: data.payerAmount,
      friendAmount: data.friendAmount,
      totalAmount: data.totalAmount,
      settleStatus: true,
      date: data.date,
    };
  });

  await db.doc(userUID).update({ friends: userData.friends });
}
