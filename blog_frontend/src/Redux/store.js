import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import logger from "redux-logger";
import reducer from "./reducers";

const middleware = [thunk, logger];


export default function configureStore(initialState) {
  const store = createStore(reducer,initialState,applyMiddleware(...middleware));
  return store;

}
