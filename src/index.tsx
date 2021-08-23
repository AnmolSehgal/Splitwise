import React from "react";
import { Provider } from "react-redux";
import firebase from "firebase/app";
import "firebase/analytics";

import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import firebaseConfig from "./services/firebase/firebaseConfig";
import store from "./store/store";

console.log(process.env);

firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
