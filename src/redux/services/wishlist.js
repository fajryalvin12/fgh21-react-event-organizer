import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const wishlist = createApi({
  reducerPath: "query/wishlist",
  baseQuery: fetchBaseQuery({ baseUrl: "http://103.93.58.89:21212" }),
  endpoints: (builder) => ({
    showWishlist: builder.query({
      query: (token) => ({
        url: `/wishlist`,
        headers: {
          Authorization: "Bearer " + token,
        },
      }),
    }),
    makeWishlist: builder.query({
      query: (id, token) => ({
        url: `/wishlist`,
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
        },
        eventId: parseInt(id),
      }),
    }),
  }),
});

export const { useShowWishlistQuery, useMakeWishlistQuery } = wishlist;
