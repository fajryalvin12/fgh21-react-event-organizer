import { combineReducers } from "@reduxjs/toolkit";
import auth from "./auth";
import event from "./event";
import profile from "./profile";
import section from "./section";
import { services } from "../services";

const reducer = combineReducers({
  auth,
  event,
  profile,
  section,
  ...services,
});

export default reducer;
