import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { remakeData, RiMObject, rimUrl } from '../shared/constants/api';

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
    getMultipleCardsByIds: build.query({
      query: (idsArray) => {
        const ids = idsArray.join(',');
        return {
          url: `/character/${ids}`,
        };
      },
      transformResponse: (response: Array<RiMObject> | RiMObject) => remakeData(response),
    }),
  }),
});

export const { useGetCardsQuery, useGetCardByIdQuery, useGetMultipleCardsByIdsQuery } = rimApi;
