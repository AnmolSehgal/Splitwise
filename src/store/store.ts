import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { logger } from "redux-logger";
import { routerMiddleware } from "connected-react-router";

import combineReducer from "./reducers";
import rootSaga from "./saga";
import history from "./history";

const sagaMiddleWare = createSagaMiddleware();
const middleWares = [sagaMiddleWare, routerMiddleware(history)];

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development")
  middleWares.push(logger);

const store = createStore(combineReducer, applyMiddleware(...middleWares));

sagaMiddleWare.run(rootSaga);

export default store;
