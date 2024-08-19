import { combineReducers } from "@reduxjs/toolkit";
import auth from "./auth";
import event from "./event";
import profile from "./profile";
import section from "./section";

const reducer = combineReducers({
  auth,
  event,
  profile,
  section,
});

export default reducer;
