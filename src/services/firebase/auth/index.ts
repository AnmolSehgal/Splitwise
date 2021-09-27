import firebase from "firebase";
import "firebase/auth";
import { ProfileObject } from "../../../store/types";
import { settingUpUser } from "../firestore";
import { uploadImage } from "../storage";

export const signInAuth = async (email: string, password: string) => {
  const data = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password);
  return {
    uid: data.user?.uid,
    userName: data.user?.displayName,
    email: data.user?.email,
  };
};

export const signUpAuth = async (
  email: string,
  password: string,
  fullName: string
) => {
  if (!fullName) throw new Error("Please enter user name");
  if (!email) throw new Error("Please enter user email");
  const userLogin = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);
  const user = await firebase.auth().currentUser;
  await user?.updateProfile({ displayName: fullName });
  const uid = userLogin.user?.uid;
  await settingUpUser(uid as string, email, fullName);
  return {
    uid: userLogin.user?.uid,
    userName: fullName,
    email: userLogin.user?.email,
  };
};

export const updateProfile = async ({
  image,
  newPassword,
  name,
  oldPassword,
  email,
  phoneNumber,
}: ProfileObject) => {
  const user = await firebase.auth().currentUser;
  if (name && user !== null) {
    await user.updateProfile({ displayName: name });
  }
  if (image && user !== null) {
    const imgUrl = await uploadImage(image);
    await user.updateProfile({ photoURL: imgUrl });
  }
  if (newPassword && user !== null) {
    await signInAuth(user.email as string, oldPassword as string).then(() => {
      user.updatePassword(newPassword);
    });
  }
  let data = {};
  if (user !== null) {
    data = {
      image: user.photoURL,
      name: user.displayName,
      email: user.email,
      phoneNumber: user.phoneNumber,
    };
  }
  return data;
};

export async function userSignOut() {
  await firebase.auth().signOut();
}
