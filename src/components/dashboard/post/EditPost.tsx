import React, { useEffect } from 'react';


import { useParams } from 'react-router-dom';


import { useUpdatePostMutation } from '../../../redux/Post/Post.jsx'

import { useGetSinglePostQuery } from '../../../redux/Post/Post.jsx'
import { useShowAllTagQuery } from '../../../redux/Tag/Tag.jsx'
import ImagePreview from '@/components/dashboard/post/ImagePreview.tsx'


import { DashboardLayout } from '../DashboardLayout'
import { useState } from 'react';
import { set } from 'date-fns';


const EditPost = () => {

  const today = new Date().toISOString().split('T')[0];

  const { id } = useParams();
  const { data } = useGetSinglePostQuery(id);
  const { data: TagData, error } = useShowAllTagQuery();
  const SinglePostData = data?.data ?? '';
  const SingleTagData = TagData?.data ? TagData.data : [];

  // console.log(SinglePostData);
  // console.log(SingleTagData);



  const [formData, setFormData] = useState({

    title: '',
    slug: '',
    content: '',
    cover_image: '',
    tags: [],
    is_published: '',
    seo_meta: {
      title: '',
      description: '',
    },
    scheduled_at: '',
    published_at: '',
    media : '',



  });

  const [Error, setError] = useState('')

  const [UpdateData, { isSuccess, isError, isLoading }] = useUpdatePostMutation(id);


  useEffect(() => {
    if (SinglePostData) {
      setFormData({
        title: SinglePostData.title || '',
        slug: SinglePostData.slug || '',
        content: SinglePostData.content || '',
        cover_image: SinglePostData.cover_image || '',
        tags: SinglePostData.tags || [],
        is_published: SinglePostData.is_published || 'scheduled',
        scheduled_at: SinglePostData.scheduled_at || '',
        published_at: SinglePostData.published_at || '',
        seo_meta: {
          title: SinglePostData.seo_meta?.title || '',
          description: SinglePostData.seo_meta?.description || '',
        },

        media: SinglePostData.media[0]?.file_path || '',
      });
    }
  }, [SinglePostData]);

// console.log(formData.media)




  const handleChange = (e) => {
    const { name, value } = e.target;


    if (name.startsWith('seo_meta.')) {
      const field = name.split('.')[1];

      setFormData((prev) => ({
        ...prev,
        seo_meta: {
          ...prev.seo_meta,
          [field]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const updateData = new FormData(e.target);
console.log(updateData);

    updateData.append("seo_meta.title", formData.seo_meta.title);
    updateData.append("seo_meta.description", formData.seo_meta.description);
    updateData.append("_method", "PUT");

    // UpdateData.forEach(element => {
    //   console.log(element)
    // });

    // console.log(updateData);

    try {

      const response = await UpdateData({ id, UpdateData:updateData });

      // console.log(response);

    } catch ($error) {
      setError($error);
    }


  }









  return (


    <DashboardLayout>


      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md space-y-4">
        <div>
          <label htmlFor="title" className="block text-gray-700 font-medium mb-1">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"

            onChange={handleChange}
            value={


              formData.title || ''



            }



            // onChange={onChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring"
            placeholder="Enter post title"
            required
          />
        </div>
        <div>
          <label htmlFor="slug" className="block text-gray-700 font-medium mb-1">
            Slug
          </label>
          <input
            id="title"
            name="slug"
            type="text"
            value={formData.slug || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring"
            placeholder="Enter post title"
            required
          />
        </div>

        <div>
          <label htmlFor="content" className="block text-gray-700 font-medium mb-1">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            value={formData.content || ''}

            onChange={handleChange}
            rows={5}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring"
            placeholder="Enter post content"
            required
          />
        </div>






            <ImagePreview  previewContext={formData.media}/>






        <div>
          <label htmlFor="tags" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Select Tag
          </label>

          <select
            name="tags[]"
            id="tags"
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >

            {

              SingleTagData.map((Tag) => (
                <option key={Tag.id} value={Tag.id}>
                  {Tag.name}
                </option>
              ))
            }

          </select>
        </div>

        {/* Is Published */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Publish Status</label>
          <select
            name="is_published"
            value={formData.is_published}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="published">Published</option>
            <option value="scheduled">Scheduled</option>
          </select>
        </div>

        {/* SEO Meta */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">SEO Meta title</label>
          <textarea
            name="seo_meta.title"

            value={formData.seo_meta?.title || ''}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">SEO Meta Description</label>
          <textarea rows={5} className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="seo_meta.description."
            value={formData.seo_meta?.description || ''}
            onChange={handleChange}

          />
        </div>


        {/* Scheduled At */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Scheduled At</label>
          <input
            type="datetime-local"
            name="scheduled_at"
            onChange={handleChange}

            value={formData.scheduled_at}
            className="w-full border border-gray-300 rounded px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Published At */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Published At</label>
          <input
            type="datetime-local"
            name="published_at"
            onChange={handleChange}

            value={formData.published_at ? SinglePostData.published_at : today}

            className="w-full border border-gray-300 rounded px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>





        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Save Post
        </button>
      </form>



    </DashboardLayout>
  )




}

export default EditPost