import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const locations = createApi({
  reducerPath: "query/locations",
  baseQuery: fetchBaseQuery({ baseUrl: "http://103.93.58.89:21212" }),
  endpoints: (builder) => ({
    listLocations: builder.query({
      query: () => `/locations`,
    }),
    getOneLocation: builder.query({
      query: (id) => `/locations/${id}`,
    }),
  }),
});

export const { useListLocationsQuery, useGetOneLocationQuery } = locations;
