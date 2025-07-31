import React, { useState } from 'react';
import CommentItem from "./CommentItem"
interface User {
  id: number;
  name: string;
  avatar: string; // URL
}

interface Comment {
  id: number;
  text: string;
  user: User;
  created_at: string;
  replies: Comment[];
}

interface Post {
  id: number;
  title: string;
  content: string;
  cover_image?: string;
}

type SinglePostProps = {
  post: Post;
};

const currentUser: User = {
  id: 99,
  name: 'You',
  avatar: 'https://i.pravatar.cc/150?u=currentuser', // placeholder
};

const SinglePostWithComments: React.FC<SinglePostProps> = ({ post }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentText, setCommentText] = useState('');

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    const newComment: Comment = {
      id: Date.now(),
      text: commentText,
      user: currentUser,
      created_at: new Date().toISOString(),
      replies: [],
    };

    setComments([newComment, ...comments]);
    setCommentText('');
  };

  const handleReplySubmit = (parentId: number, replyText: string) => {
    if (!replyText.trim()) return;

    const updatedComments = comments.map((comment) => {
      if (comment.id === parentId) {
        return {
          ...comment,
          replies: [
            ...comment.replies,
            {
              id: Date.now(),
              text: replyText,
              user: currentUser,
              created_at: new Date().toISOString(),
              replies: [],
            },
          ],
        };
      }
      return comment;
    });

    setComments(updatedComments);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
      {/* Cover Image */}
      {post.cover_image && (
        <img
          src={post.cover_image}
          alt={post.title}
          className="w-full h-64 object-cover rounded mb-4"
        />
      )}

      {/* Title and Content */}
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-800 mb-6">{post.content}</p>

      {/* Comment Form */}
      <form onSubmit={handleCommentSubmit} className="mb-6">
        <textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Write a comment..."
          className="w-full p-3 border rounded focus:outline-none focus:ring"
          rows={3}
        ></textarea>
        <button
          type="submit"
          className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Post Comment
        </button>
      </form>

      {/* Comment List */}
      <div>
        <h2 className="text-lg font-semibold mb-3">Comments ({comments.length})</h2>
        {comments.length === 0 ? (
          <p className="text-gray-500">No comments yet.</p>
        ) : (
          <ul className="space-y-4">
            {comments.map((comment) => (
              <CommentItem
                key={comment.id}
                comment={comment}
                onReply={(replyText) => handleReplySubmit(comment.id, replyText)}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SinglePostWithComments;
