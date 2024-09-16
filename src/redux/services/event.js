import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const event = createApi({
  reducerPath: "query/events",
  baseQuery: fetchBaseQuery({ baseUrl: "http://103.93.58.89:21212" }),
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
