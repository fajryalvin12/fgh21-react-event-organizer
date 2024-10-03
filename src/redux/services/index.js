import { event } from "./event";
import { wishlist } from "./wishlist";
import { nationalites } from "./nationalities";
import { locations } from "./locations";
import { categories } from "./categories";

export const services = {
  [event.reducerPath]: event.reducer,
  [wishlist.reducerPath]: wishlist.reducer,
  [nationalites.reducerPath]: nationalites.reducer,
  [locations.reducerPath]: locations.reducer,
  [categories.reducerPath]: categories.reducer,
};

export const rtkMiddlewares = [
  event.middleware,
  wishlist.middleware,
  locations.middleware,
  nationalites.middleware,
  categories.middleware,
];
