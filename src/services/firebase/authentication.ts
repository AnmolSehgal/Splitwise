import firebase from "firebase";
import "firebase/auth";

export const signInAuth = async (email: string, password: string) => {
  const data = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password);
  console.log(data);
};

export const signUpAuth = async (
  email: string,
  password: string,
  fullName: string
) => {
  const data = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);
  console.log(data);
};
