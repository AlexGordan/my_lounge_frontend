import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { RootReducer } from "./reducers/root";

const logger = createLogger();

export const Store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(...[thunk, logger]))
);
