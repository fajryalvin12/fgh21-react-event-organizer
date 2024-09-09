import { event } from "./event";
import { wishlist } from "./wishlist";

export const services = {
  [event.reducerPath]: event.reducer,
  [wishlist.reducerPath]: wishlist.reducer,
};

export const rtkMiddlewares = [event.middleware, wishlist.middleware];
