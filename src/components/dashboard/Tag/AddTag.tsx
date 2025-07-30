import React, { useState } from 'react';
import { useAddTagMutation } from '@/redux/Tag/Tag.jsx';
import { DashboardLayout } from '../DashboardLayout';
import { useShowAllTagQuery } from '@/redux/Tag/Tag.jsx';
import Index from '@/pages/Index';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AddTag = () => {
  interface ValidationErrors {
    name?: string[];
  }

  const [errors, setErrors] = useState<ValidationErrors>({});
  const navigate = useNavigate();
  const [TagData, { isLoading }] = useAddTagMutation();
  const { data ,refetch } = useShowAllTagQuery()

  // const allTagData = data?.data ? data?.data : [];
  const allTagData = Array.isArray(data?.data) ? data.data : data ?? [];


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {

      await TagData(formData).unwrap();
      setErrors({});
      e.currentTarget.reset();
      refetch()
    } catch (error) {
      if (error?.data?.errors) {
        setErrors(error.data.errors);
      }
    }
 


  };

  

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Tag Add Form */}
          <div className="bg-white shadow-md rounded p-6">
            <h2 className="text-xl font-semibold mb-4">Add New Tag</h2>
            <form onSubmit={handleSubmit}>
              <label className="block mb-2 text-gray-700 font-medium">Tag Name</label>
              <div className="flex">
                <input
                  type="text"
                  name="name"
                  className={`flex-1 px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'
                    } rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="Enter tag"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-r-md hover:bg-blue-700"
                  disabled={isLoading}
                >
                  {isLoading ? 'Adding...' : 'Add'}
                </button>
              </div>
              {/* Error Message */}
              {errors.name &&
                errors.name.map((msg, index) => (
                  <p key={index} className="text-red-500 text-sm mt-1">
                    {msg}
                  </p>
                ))}
            </form>
          </div>

          {/* Right: Tag Table */}
          <div className="bg-white shadow-md rounded p-6">
            <h2 className="text-xl font-semibold mb-4">Tag List</h2>
            <table className="w-full table-auto border border-gray-300">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="border px-4 py-2">#</th>
                  <th className="border px-4 py-2">Tag</th>
                  <th className="border px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>


                {
                  allTagData.length === 0 ? (

                    <tr>No Tag Found</tr>




                  ) : (


                    allTagData.map((tag, Index) => (

                      <tr key={Index}>
                        <td className="border px-4 py-2">{Index + 1}</td>
                        <td className="border px-4 py-2">{tag.name}</td>
                        <td className="border px-4 py-2 space-x-2">
                     
                       
                      <Link className="px-4 py-2 bg-blue-600 text-white rounded" to={`/edit/tag/${tag.id}`}>Edit</Link>
                      <Link className="px-4 py-2 bg-red-600 text-white rounded" to={`/edit/tag/${tag.id}`}>Delete</Link>

    

                      
                         
                        </td>
                      </tr>



                    ))

                  )
                }








              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AddTag;
