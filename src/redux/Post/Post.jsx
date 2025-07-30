

import { baseApi } from "../baseApi";
import ShowAllPost from './../../components/dashboard/post/ShowAllPost';

const Post = baseApi.injectEndpoints({


    endpoints: (builder) => ({

        addPost: builder.mutation({
            query: (postData) => ({

                url: 'post/add',
                method: 'POST',
                body: postData,

            }),
            providesTags: ['post'],
        }),


        // SHOW ALL POST 

        getPost: builder.query({
            query: () => ({
                url: 'post/all',
                method: 'GET',

            }),

            providesTags: ['post'],

        }),

        // SINGLE POST 

         getSinglePost: builder.query({
            query: (id)=>({

                url:`post/${id}`,
                method: 'GET',

            })
         }),



        //  UPDATE POST

        UpdatePost:builder.mutation({
            query:({ id, UpdateData })=>({
                url: `post/update/${id}`,
                method:'POST',
                body: UpdateData

            }),
           invalidatesTags: ['post'],
        })




    })


})

export const { useAddPostMutation, useGetPostQuery, useGetSinglePostQuery,useUpdatePostMutation } = Post;


