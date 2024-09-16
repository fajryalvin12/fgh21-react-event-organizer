import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const nationalites = createApi({
  reducerPath: "query/nationalities",
  baseQuery: fetchBaseQuery({ baseUrl: "http://103.93.58.89:21212" }),
  endpoints: (builder) => ({
    showNations: builder.query({
      query: (token) => ({
        url: `/nationalities`,
        headers: {
          Authorization: "Bearer " + token,
        },
      }),
    }),
  }),
});

export const { useShowNationsQuery } = nationalites;
