import { createApi } from "@reduxjs/toolkit/query";


import { baseApi } from "../baseApi"







const Tag = baseApi.injectEndpoints({


    endpoints: (builder) => ({


        showAllTag: builder.query({
            query: () => ({
                url: 'tag/all',
                method: "GET",
                
            }),

            providesTags: ['tag'],


        }),


        AddTag: builder.mutation({

            query: (TagData) => ({
                url: 'tag/add',
                method: 'POST',
                body: TagData
            }),
            invalidatesTags: ['tag'],

        }),


        EditTag: builder.mutation({

            query: ({ id, UpdateTagData }) => ({
                url: `tag/update/${id}`,
                method: 'PUT',
                body: UpdateTagData
            }),

            invalidatesTags: ['tag']

        }),


        singleTag: builder.query({
            query: (id) => ({
                url: `tag/${id}`,
                method: "GET",

            }),

            providesTags: ['tag'],


        }),










    })

})

export const { useShowAllTagQuery, useAddTagMutation, useEditTagMutation,useSingleTagQuery } = Tag;