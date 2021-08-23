import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { logger } from "redux-logger";
import { routerMiddleware } from "connected-react-router";

import combineReducer from "./reducers";
import rootSaga from "./saga";
import history from "./history";

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
  combineReducer,
  applyMiddleware(logger, sagaMiddleWare, routerMiddleware(history))
);

sagaMiddleWare.run(rootSaga);

export default store;
