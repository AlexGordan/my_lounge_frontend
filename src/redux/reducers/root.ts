import { combineReducers } from "redux";
import { appReducer } from "./app";

export const RootReducer = combineReducers({
  appReducer,
});
