import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { rimUrl } from '../shared/constants/api-urls';

export const rimApi = createApi({
  reducerPath: 'rimApi',
  baseQuery: fetchBaseQuery({ baseUrl: rimUrl }),
  endpoints: (build) => ({
    getCards: build.query({
      query: (arg) => {
        return {
          url: '/character',
          params: arg,
        };
      },
    }),
    getCardById: build.query({
      query: (id) => {
        return {
          url: `/character/${id}`,
        };
      },
    }),
  }),
});

export const { useGetCardsQuery, useGetCardByIdQuery } = rimApi;
