import { configureStore } from "@reduxjs/toolkit";
import { rtkMiddlewares } from "./services";
import reducer from "./reducers";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "profile"],
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rtkMiddlewares),
});
