import {
  fetchUserInfoFailure,
  fetchUserInfoRequest,
  fetchUserInfoSuccess,
  updateUserInfoFailure,
  updateUserInfoRequest,
  updateUserInfoSuccess,
} from "../actions/profileActions";
import actionTypes from "../actionTypes/actionTypes";
import { ProfileStateObject } from "../types";

const initState: ProfileStateObject = {
  name: "",
  email: "",
  image: "",
  phoneNumber: "",
};

const profileReducer = (
  state = initState,
  action:
    | ReturnType<typeof updateUserInfoRequest>
    | ReturnType<typeof updateUserInfoSuccess>
    | ReturnType<typeof updateUserInfoFailure>
    | ReturnType<typeof fetchUserInfoRequest>
    | ReturnType<typeof fetchUserInfoSuccess>
    | ReturnType<typeof fetchUserInfoFailure>
) => {
  switch (action.type) {
    case actionTypes.UPDATE_USER_INFO_REQUEST:
      return { ...state };
    case actionTypes.UPDATE_USER_INFO_SUCCESS:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        phoneNumber: action.payload.phoneNumber,
        image: action.payload.image,
      };

    case actionTypes.UPDATE_USER_INFO_FAILURE:
      return { ...state };

    case actionTypes.USER_PROFILE_REQUEST:
      return { ...state };

    case actionTypes.USER_PROFILE_SUCCESS:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        phoneNumber: action.payload.phoneNumber,
        image: action.payload.image,
      };

    case actionTypes.USER_PROFILE_FAILURE:
      return { ...state };
    default:
      return { ...state };
  }
};

export default profileReducer;
