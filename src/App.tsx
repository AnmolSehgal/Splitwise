import React from "react";
import firebase from "firebase";
import "firebase/auth";
import { ConnectedRouter } from "connected-react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import history from "./store/history";
import Navbar from "./components/navbarComponent/Navbar";
import Routes from "./routes";
import { GlobalState, ProfileStateObject } from "./store/types";
import { fetchUserInfoSuccess } from "./store/actions/profileActions";
import { signOutRequest } from "./store/actions/signOut";
import {
  userLoginStatusFailure,
  userLoginStatusSuccess,
} from "./store/actions/signInAction";
function App() {
  const userLogin = useSelector(
    (state: GlobalState) => state.signIn.isLoggedIn
  );

  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user !== null) {
        const userData = {
          image: user.photoURL,
          name: user.displayName,
          email: user.email,
          phoneNumber: user.phoneNumber,
        };
        dispatch(fetchUserInfoSuccess(userData as ProfileStateObject));
      } else {
        dispatch(signOutRequest());
      }
    });
    if (localStorage.getItem("uid")) dispatch(userLoginStatusSuccess());
    else dispatch(userLoginStatusFailure());
  }, [dispatch, userLogin]);

  return (
    <ConnectedRouter history={history}>
      <Navbar />
      <Routes />
    </ConnectedRouter>
  );
}

export default App;
