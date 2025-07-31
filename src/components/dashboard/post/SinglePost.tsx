import React from "react";
import { useParams, Link } from "react-router-dom";
import { DashboardLayout } from "../DashboardLayout";
import { useGetSinglePostQuery } from "../../../redux/Post/Post.jsx";

const SinglePost = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetSinglePostQuery(id);
  const singlePost = data?.data;
  const author = singlePost?.user;

  if (isLoading) {
    return (
      <DashboardLayout>
        <div className="flex justify-center items-center h-64">
          <p className="text-gray-500 text-lg animate-pulse">Loading post...</p>
        </div>
      </DashboardLayout>
    );
  }

  if (isError || !singlePost) {
    return (
      <DashboardLayout>
        <div className="flex justify-center items-center h-64">
          <p className="text-red-500 text-lg font-semibold">⚠️ Post data not found!</p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <main className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8">
        {/* Post Title */}
        <h1 className="text-4xl font-extrabold mb-6 text-gray-900 tracking-tight">
          {singlePost.title}
        </h1>

        {/* Cover Image */}
        <div className="mb-8 rounded-lg overflow-hidden shadow-md border border-gray-200">
          <img
            src={
              singlePost.media && singlePost.media.length > 0
                ? singlePost.media[0].file_path
                : "/default-image.png"
            }
            alt={singlePost.title}
            className="w-full object-cover max-h-96"
          />
        </div>

        {/* Post Content */}
        <article className="prose prose-lg max-w-none text-gray-700 mb-12">
          <div dangerouslySetInnerHTML={{ __html: singlePost.content }} />
        </article>

        {/* Post Meta */}
        <section className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-600">
          <PostMeta label="Slug" value={singlePost.slug} />
          <PostMeta label="Published" value={singlePost.is_published ? "Yes" : "No"} />
          <PostMeta label="Scheduled At" value={singlePost.scheduled_at || "—"} />
          <PostMeta label="Created At" value={new Date(singlePost.created_at).toLocaleDateString()} />
          <PostMeta label="Updated At" value={new Date(singlePost.updated_at).toLocaleDateString()} />
        </section>

        {/* Author Info */}
        {author && (
          <section className="flex items-center gap-6 border-t border-gray-200 pt-6 mb-8">
            <img
              src={author.avatar || "/default-avatar.png"}
              alt={author.name}
              className="w-20 h-20 rounded-full border-2 border-blue-500"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{author.name}</h3>
              <p className="text-gray-500">{author.email}</p>
              {author.email_verified_at && (
                <p className="text-green-600 font-semibold text-sm mt-1">Email Verified</p>
              )}
            </div>
          </section>
        )}

        {/* Edit Button */}
        <div className="text-right">
          <Link
            to={`/edit/post/${singlePost.id}`}
            className={`inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition-colors duration-300 ${
              isLoading ? "opacity-50 cursor-not-allowed pointer-events-none" : ""
            }`}
          >
            {isLoading ? "Loading..." : "Edit Post"}
          </Link>
        </div>
      </main>
    </DashboardLayout>
  );
};

export default SinglePost;

const PostMeta = ({ label, value }: { label: string; value: string }) => (
  <div className="bg-gray-50 rounded-md p-4 shadow-sm text-center">
    <h4 className="font-semibold text-gray-700">{label}</h4>
    <p className="mt-1 text-gray-900">{value || "—"}</p>
  </div>
);
