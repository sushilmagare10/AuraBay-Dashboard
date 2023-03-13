import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: ["Users", "Products"],
  endpoints: (build) => ({
    getUsers: build.query({
      query: () => `users`,
      providesTags: ["Users"],
    }),
    getProducts: build.query({
      query: () => "products",
      providesTags: ["Products"],
    }),
  }),
});

export const { useGetUsersQuery, useGetProductsQuery } = api;
