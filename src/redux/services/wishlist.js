import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const wishlist = createApi({
  reducerPath: "query/wishlist",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8888" }),
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
