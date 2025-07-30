

import { createSlice } from '@reduxjs/toolkit';

import { baseApi } from './../baseApi';





const Registration = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        registerUser: builder.mutation({
            query: (userData) => ({
                url: '/register',
                method: 'POST',
                body: userData,
            }),
            invalidatesTags: ['User'],
        }),

        // Login endpoint
        loginUser: builder.mutation({
            query: (credentials) => ({
                url: '/login',
                method: 'POST',
                body: credentials,
            }),
            invalidatesTags: ['User'],
        }),

           logout: builder.mutation({
            query: () => ({
                url: '/user/logout',
                method: 'POST',
            }),


        })

    }),



   

});

export const { useRegisterUserMutation, useLoginUserMutation ,useLogoutMutation } = Registration;