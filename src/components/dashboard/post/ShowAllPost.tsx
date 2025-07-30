
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DashboardLayout } from '../DashboardLayout'
import { useGetPostQuery } from '../../../redux/Post/Post.jsx'



const ActionMenu = ({ id, onView, onEdit, onDelete }) => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  // console.log(id)


  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setShow(!show)}
        className="text-gray-600 hover:text-black font-bold text-lg px-2"
        aria-haspopup="true"
        aria-expanded={show}
      >
        ...
      </button>

      {show && (
        <div
          className="absolute right-0 mt-2 w-36 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg z-50"
          role="menu"
        >
          <button
            onClick={() => {
              setShow(false);
              navigate(`/post/${id}`);
            }}
            className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
            role="menuitem"
          >
            👁️ View
          </button>
          <button
            onClick={() => {
              setShow(false);
             navigate(`/edit/post/${id}`);
            }}
            className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
            role="menuitem"
          >
            ✏️ Edit
          </button>
          <button
            onClick={() => {
              setShow(false);
              onDelete();
            }}
            className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
            role="menuitem"
          >
            🗑️ Delete
          </button>
        </div>
      )}
    </div>
  );
};









const ShowAllPost = () => {

  const { data, isLoading } = useGetPostQuery();


  const PostData = data?.data?.data ?? [];
  const currentPage = data?.data?.data?.current_page;
  const lastPage = data?.data?.data?.last_page;
  // console.log(PostData)

  PostData.map((post)=>(

console.log(post.media[0]?.file_path)
 

  )

  )


  // PostData.forEach((post) => {
  //   if (post.media && post.media.length > 0) {
  //     console.log(post.media[0].file_path);
  //   }
  // });






  return (


    <DashboardLayout>

      <div className="max-w-6xl mx-auto mt-10 p-6 bg-white shadow-xl rounded-lg border">
        <h2 className="text-xl font-bold mb-4 text-gray-800">📋 All Posts</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-200 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Title</th>
                <th className="border border-gray-300 px-4 py-2 text-left">content</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Image</th>
                <th className="border border-gray-300 px-4 py-2 text-center">Status</th>
                <th className="border border-gray-300 px-4 py-2 text-center">Scheduled At</th>
                <th className="border border-gray-300 px-4 py-2 text-center">Published At</th>
                <th className="border border-gray-300 px-4 py-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {PostData.length > 0 ? (
                PostData.map((post) => (
                  <tr key={post.id} className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">{post.title}</td>
                    <td className="border border-gray-300 px-4 py-2">{post.excerpt}</td>


                    <td className="border border-gray-300 px-4 py-2">

                  <img width={100} src={post.media[0]?.file_path} alt="" />


                    </td>



                    <td className="border border-gray-300 px-4 py-2 text-center capitalize">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold 
                      ${post.is_published === "published"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                          }`}
                      >
                        {post.is_published}
                      </span>
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {post.scheduled_at ? new Date(post.scheduled_at).toLocaleString() : "—"}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {post.published_at ? new Date(post.published_at).toLocaleString() : "—"}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      <ActionMenu id={post.id}
                        onView={() => alert(`View post id: ${post.id}`)}
                        onEdit={() => alert(`Edit post id: ${post.id}`)}
                        onDelete={() => {
                          if (window.confirm("Are you sure to delete this post?")) {
                            alert(`Deleted post id: ${post.id}`);
                          }
                        }}
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="text-center py-4 text-gray-500">
                    No posts found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>







      </div>

    </DashboardLayout>
  )




}

export default ShowAllPost