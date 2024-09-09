import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const event = createApi({
  reducerPath: "query/events",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8888" }),
  endpoints: (builder) => ({
    listEvents: builder.query({
      query: () => `/events`,
    }),
    getOneEvent: builder.query({
      query: (id) => `/events/${id}`,
    }),
  }),
});

export const { useListEventsQuery, useGetOneEventQuery } = event;
