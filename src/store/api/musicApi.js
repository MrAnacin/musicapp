import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const musicApi = createApi({
  
  reducerPath: "musicApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://painassasin.online/",
  }),
  endpoints: (builder) => ({
    getAllTracks: builder.query({
      query: () => 'catalog/track/all'      
    }), 

    getSelectMusic: builder.query({
      // вместо 2 доблжен быть динамический id
      query: () => 'catalog/selection/2'      
    }),

    postReg: builder.mutation({
      query: (body) => ({
        url: 'user/signup/',
        method: 'POST',
        body,
      })      
    }),
    postLogin: builder.mutation({
      query: (body) => ({
        url: 'user/login/',
        method: 'POST',
        body,
      })      
    }),

    postToken: builder.mutation({
      query: (body) => ({
        url: 'user/token/',
        method: 'POST',
        body,
      })      
    }),

  }),
});

export const { useGetAllTracksQuery, useGetSelectMusicQuery, usePostRegMutation, usePostLoginMutation, usePostTokenMutation } = musicApi;