import { configureStore } from "@reduxjs/toolkit";
import { rtkMiddlewares } from "./services";
import reducer from "./reducers";

export const store = configureStore({
  reducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rtkMiddlewares),
});
