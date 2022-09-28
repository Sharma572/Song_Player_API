import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
        headers.set('X-RapidAPI-Key', '612e2e3841msh5026a11c004915ap13cbcfjsn7302e6393905')
    return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({query: () => '/charts/world'}),   
  }),
});

export const {
  useGetTopChartsQuery,
} = shazamCoreApi;