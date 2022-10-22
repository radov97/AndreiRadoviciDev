import { combineReducers } from "redux";
import navbarReducer from "./navbar-events";

const allReducers = combineReducers({
  navbar: navbarReducer,
});

export default allReducers;
