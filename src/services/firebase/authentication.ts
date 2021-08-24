import firebase from "firebase";
import "firebase/auth";
import { fetchUserInfoSuccess } from "../../store/actions/profileActions";

import store from "../../store/store";
import { ProfileObject, ProfileStateObject } from "../../store/types";
import { uploadImage } from "./storage/storage";

export const signInAuth = async (email: string, password: string) => {
  const data = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password);
  return data.user?.uid;
};

export const signUpAuth = async (
  email: string,
  password: string,
  fullName: string
) => {
  const userLogin = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);
  const user = await firebase.auth().currentUser;
  await user?.updateProfile({ displayName: fullName });
  await firebase.auth().currentUser?.displayName;
  return userLogin.user?.uid;
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
    console.log(user.displayName);
    data = {
      image: user.photoURL,
      name: user.displayName,
      email: user.email,
      phoneNumber: user.phoneNumber,
    };
  }
  return data;
};

export const fetchUserProfile = async () => {
  return await firebase.auth().onAuthStateChanged((user) => {
    if (user !== null) {
      const userData = {
        image: user.photoURL,
        name: user.displayName,
        email: user.email,
        phoneNumber: user.phoneNumber,
      };
      store.dispatch(fetchUserInfoSuccess(userData as ProfileStateObject));
    } else return {};
  });
};

export async function userSignOut() {
  await firebase.auth().signOut();
}
