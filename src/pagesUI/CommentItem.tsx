import React, { useState } from 'react';

type CommentItemProps = {
  comment: Comment;
  onReply: (replyText: string) => void;
};

const CommentItem: React.FC<CommentItemProps> = ({ comment, onReply }) => {
  const [replyText, setReplyText] = useState('');
  const [showReplyBox, setShowReplyBox] = useState(false);

  return (
    <li className="border p-4 rounded">
      <div className="flex items-start gap-3 mb-2">
        {/* <img
          src={comment.user.avatar}
          alt='shovo'
          className="w-10 h-10 rounded-full object-cover"
        /> */}
        <div>
          <p className="font-semibold"></p>
          <p className="text-sm text-gray-700">title</p>
          {/* <span className="text-xs text-gray-400">{new Date(comment.created_at).toLocaleString()}</span> */}
          <div>
            <button
              onClick={() => setShowReplyBox(!showReplyBox)}
              className="text-sm text-blue-500 mt-1"
            >
              {showReplyBox ? 'Cancel' : 'Reply'}
            </button>
          </div>
        </div>
      </div>

      {/* Reply box */}
      {showReplyBox && (
        <div className="ml-12 mt-2">
          <textarea
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Write a reply..."
            className="w-full p-2 border rounded"
            rows={2}
          ></textarea>
          <button
            onClick={() => {
              onReply(replyText);
              setReplyText('');
              setShowReplyBox(false);
            }}
            className="mt-1 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
          >
            Reply
          </button>
        </div>
      )}

      {/* Reply list */}
      {/* {comment.replies.length > 0 && (
        <ul className="ml-12 mt-3 space-y-2">
          {comment.replies.map((reply) => (
            <li key={reply.id} className="flex gap-3 items-start">
              <img
                src={reply.user.avatar}
                alt={reply.user.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-sm">{reply.user.name}</p>
                <p className="text-sm text-gray-700">{reply.text}</p>
                <span className="text-xs text-gray-400">
                  {new Date(reply.created_at).toLocaleString()}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )} */}
    </li>
  );
};


export default CommentItem