import React from 'react';

import { useState } from 'react';
import { useAddPostMutation } from '../../../redux/Post/Post.jsx'
import { DashboardLayout } from '../DashboardLayout'
import { useShowAllTagQuery } from '../../../redux/Tag/Tag.jsx'
import ImagePreview from '@/components/dashboard/post/ImagePreview.tsx'


const AddPost = () => {

  const [addPostData, { isError, isSuccess, isLoading }] = useAddPostMutation()
  const { data, error } = useShowAllTagQuery();


  const TagData = data?.data ? data.data : [];



  const [Error, setError] = useState('')


  const [formData, setFormData] = useState({
    seo_meta: {
      title: "",
      description: "",
    },
  });




  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    data.append("seo_meta.title", formData.seo_meta.title);
    data.append("seo_meta.description", formData.seo_meta.description);



    try {

      const response = await addPostData(data)

    } catch (error) {


      setError(error);

    }

  };









  return (


    <DashboardLayout>
      <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-xl rounded-lg border">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">📝 Add New Post</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">Title</label>
            <input
              type="text"
              name="title"

              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Slug */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">Slug</label>
            <input
              type="text"
              name="slug"

              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Excerpt */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">Excerpt</label>
            <textarea
              name="excerpt"


              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Content */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">Content</label>
            <textarea
              name="content"

              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>



          <ImagePreview  />





          <div>
            <label htmlFor="tags" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Select Tag
            </label>

            <select
              name="tags[]"
              id="tags"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {TagData.map((tag) => (
                <option key={tag.id} value={tag.id}>
                  {tag.name}
                </option>
              ))}
            </select>
          </div>











          {/* Is Published */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">Publish Status</label>
            <select
              name="is_published"

              className="w-full border border-gray-300 rounded px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="published">Published</option>
              <option value="scheduled">Scheduled</option>
            </select>
          </div>

          {/* SEO Meta */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">SEO Meta (JSON)</label>
            <textarea
              name="seo_meta[]"

              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">SEO Meta title</label>
            <textarea
              name="seo_meta[title]"
              value={formData.seo_meta['title']}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  seo_meta: {
                    ...formData['seo_meta'],
                    title: e.target.value,
                  },
                })
              }
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">SEO Meta description</label>
            <textarea
              name="seo_meta[description]"
              value={formData.seo_meta['description']}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  seo_meta: {
                    ...formData['seo_meta'],
                    description: e.target.value,
                  },
                })
              }
            />
          </div>

          {/* Scheduled At */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">Scheduled At</label>
            <input
              type="datetime-local"
              name="scheduled_at"

              className="w-full border border-gray-300 rounded px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Published At */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">Published At</label>
            <input
              type="datetime-local"
              name="published_at"

              className="w-full border border-gray-300 rounded px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-all"
            >
              Submit Post
            </button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  )




}

export default AddPost