import { createApi } from "@reduxjs/toolkit/query/react";

export const categories = createApi({
  reducerPath: "query/categories",
});
