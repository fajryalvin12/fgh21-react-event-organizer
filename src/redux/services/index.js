import { event } from "./event";
import { wishlist } from "./wishlist";
import { nationalites } from "./nationalities";

export const services = {
  [event.reducerPath]: event.reducer,
  [wishlist.reducerPath]: wishlist.reducer,
  [nationalites.reducerPath]: nationalites.reducer,
};

export const rtkMiddlewares = [
  event.middleware,
  wishlist.middleware,
  nationalites.middleware,
];
