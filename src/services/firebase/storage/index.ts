import firebase from "firebase";
import "firebase/storage";

export const uploadImage = async (image: File) => {
  const ref = await firebase.storage().ref();
  await ref.child(`Avatars/${image.name}`).put(image);
  return await ref.child(`Avatars/${image.name}`).getDownloadURL();
};
