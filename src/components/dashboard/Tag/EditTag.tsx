import React, { useEffect, useState } from 'react';





import { useEditTagMutation } from '@/redux/Tag/Tag.jsx'
import { useSingleTagQuery } from '@/redux/Tag/Tag.jsx'



import { DashboardLayout } from '../DashboardLayout'
import { useParams, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const EditTag = () => {


  interface ValidationErrors {
    name?: string[];
  }

  const [errors, setErrors] = useState<ValidationErrors>({});


  const Navigate = useNavigate()

  const { id } = useParams();



  const [UpdateTagData, { isLoading, isError, isSuccess }] = useEditTagMutation();
  const { data } = useSingleTagQuery(id);

  const SingTagData = data?.data ?? '';


  const [fromData, setFormData] = useState({
    name: '',
  });
  console.log(fromData);

  useEffect(() => {

    if (SingTagData) {
      setFormData({
        name: SingTagData.name || '',
      })
    };



  }, [SingTagData])

  if (isSuccess) {
    Navigate('/show/all/tag')
  }


  const handleChange = (e) => {

    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,

    }))

  }



  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await UpdateTagData({ id, UpdateTagData: fromData }).unwrap();
      setErrors({});
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
            <h2 className="text-xl font-semibold mb-4">Edit  Tag</h2>
            <form onSubmit={handleSubmit}>
              <label className="block mb-2 text-gray-700 font-medium">Tag Name</label>
              <div className="flex">
                <input
                  type="text"
                  name="name"

                  onChange={handleChange}
                  value={fromData.name}
                  className={`flex-1 px-4 py-2 border 'border-red-500' : 'border-gray-300'
                    } rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="Enter tag"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-r-md hover:bg-blue-700"
                  disabled={isLoading}
                >
                  {isLoading ? 'Editing...' : 'Edit'}
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
        </div>
      </div>
    </DashboardLayout>
  )




}

export default EditTag