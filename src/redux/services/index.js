import { event } from "./event";

export const services = {
  [event.reducerPath]: event.reducer,
};

export const rtkMiddlewares = [event.middleware];
