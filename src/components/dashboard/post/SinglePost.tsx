import React from 'react';
import { useParams } from 'react-router-dom';
import { DashboardLayout } from '../DashboardLayout';
import { useGetSinglePostQuery } from '../../../redux/Post/Post.jsx'
const SinglePost = () => {
  const { id } = useParams();

  const { data } = useGetSinglePostQuery(id);

  // console.log(data?.data);

  const singlePost = data?.data ?? '';
  // console.log(singlePost['user'].name);

 const Author = singlePost['user'] ?? '';

 console.log(Author.name)

  return (
    <DashboardLayout>
      <div className="container mx-auto mt-4">
        <h2 className="text-2xl font-bold mb-4">Single Post Details</h2>
        <table className="table-auto border-collapse w-full border border-gray-400">


          {
            SinglePost.length !== null ?

              (
                <tbody>

                  <tr className="bg-gray-100">
                    <td className="border px-4 py-2 font-semibold">Title</td>
                    <td className="border px-4 py-2">{singlePost.title}</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-semibold">Slug</td>
                    <td className="border px-4 py-2">{singlePost.slug}</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="border px-4 py-2 font-semibold">Content</td>
                    <td className="border px-4 py-2">{singlePost.content}</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-semibold">is_published At</td>
                    <td className="border px-4 py-2">{singlePost.is_published}</td>
                  </tr>
                  <tr>


                    <td className="border px-4 py-2 font-semibold">scheduled At</td>
                    <td className="border px-4 py-2">{singlePost.scheduled_at}</td>
                  </tr>



                  <div>

                    <h1 className='border px-4 py-2 font-semibold'>Author</h1>

                    <h1 className='border px-4 py-2 font-semibold'>{Author.name}</h1>
                    <h1 className='border px-4 py-2 font-semibold'>{Author.email}</h1>
              
                  </div>
                 
                </tbody>


              )


              





              :




              (

                  <tbody>

                  <tr className="bg-gray-100">
                    <td className="border px-4 py-2 font-semibold">Data Not found !</td>
                  
                  </tr>
                 

                </tbody>

              )






              
          }









        </table>
      </div>
    </DashboardLayout>
  );
};

export default SinglePost;
