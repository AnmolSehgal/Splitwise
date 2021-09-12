import actionTypes from "../actionTypes";
import { ProfileObject, ProfileStateObject } from "../types";

export const updateUserInfoRequest = ({
  email,
  name,
  oldPassword,
  newPassword,
  image,
  phoneNumber,
}: ProfileObject) => {
  return {
    type: actionTypes.UPDATE_USER_INFO_REQUEST,
    payload: {
      name: name,
      email: email,
      oldPassword: oldPassword,
      newPassword: newPassword,
      image: image,
      phoneNumber: phoneNumber,
    },
  };
};

export const updateUserInfoSuccess = ({
  image,
  name,
  email,
  phoneNumber,
}: ProfileStateObject) => {
  return {
    type: actionTypes.UPDATE_USER_INFO_SUCCESS,
    payload: {
      image: image,
      name: name,
      email: email,
      phoneNumber: phoneNumber,
    },
  };
};

export const updateUserInfoFailure = () => {
  return {
    type: actionTypes.UPDATE_USER_INFO_FAILURE,
  };
};

export const fetchUserInfoRequest = () => {
  return {
    type: actionTypes.USER_PROFILE_REQUEST,
  };
};

export const fetchUserInfoSuccess = ({
  image,
  name,
  email,
  phoneNumber,
}: ProfileStateObject) => {
  return {
    type: actionTypes.USER_PROFILE_SUCCESS,
    payload: {
      image: image,
      name: name,
      email: email,
      phoneNumber: phoneNumber,
    },
  };
};

export const fetchUserInfoFailure = () => {
  return {
    type: actionTypes.USER_PROFILE_FAILURE,
  };
};
