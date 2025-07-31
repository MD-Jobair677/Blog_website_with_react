import React, { useState } from 'react';
import { MessageCircle, Reply, Heart, MoreHorizontal } from 'lucide-react';
import { Button } from '@/componentUI/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/componentUI/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from "@/componentUI/ui/badge";

interface Reply {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  timestamp: string;
  likes: number;
}

interface Comment {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  timestamp: string;
  likes: number;
  replies: Reply[];
}

const mockComments: Comment[] = [
  {
    id: '1',
    author: {
      name: 'Alex Chen',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    content: 'Great article! I especially loved the section about AI-powered development tools. GitHub Copilot has been a game-changer for my workflow.',
    timestamp: '2 hours ago',
    likes: 12,
    replies: [
      {
        id: '1-1',
        author: {
          name: 'Sarah Johnson',
          avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b890?w=150&h=150&fit=crop&crop=face'
        },
        content: 'Thanks Alex! I totally agree about GitHub Copilot. It has really transformed how I approach coding.',
        timestamp: '1 hour ago',
        likes: 5
      }
    ]
  },
  {
    id: '2',
    author: {
      name: 'Maria Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    },
    content: 'The PWA section was very insightful. We are considering implementing PWA for our next project. Any specific frameworks you would recommend?',
    timestamp: '4 hours ago',
    likes: 8,
    replies: []
  },
  {
    id: '3',
    author: {
      name: 'David Kim',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    content: 'WebAssembly is definitely the future! We have been experimenting with it for our data visualization tools and the performance gains are incredible.',
    timestamp: '6 hours ago',
    likes: 15,
    replies: []
  }
];

const Comments = () => {
  const [comments, setComments] = useState<Comment[]>(mockComments);
  const [newComment, setNewComment] = useState('');
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState('');

  const handleAddComment = () => {
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: Date.now().toString(),
      author: {
        name: 'You',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face'
      },
      content: newComment,
      timestamp: 'Just now',
      likes: 0,
      replies: []
    };

    setComments([comment, ...comments]);
    setNewComment('');
  };

  const handleAddReply = (commentId: string) => {
    if (!replyContent.trim()) return;

    const reply: Reply = {
      id: Date.now().toString(),
      author: {
        name: 'You',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face'
      },
      content: replyContent,
      timestamp: 'Just now',
      likes: 0
    };

    setComments(comments.map(comment => 
      comment.id === commentId 
        ? { ...comment, replies: [...comment.replies, reply] }
        : comment
    ));
    setReplyContent('');
    setReplyingTo(null);
  };

  const CommentItem = ({ comment, isReply = false }: { comment: Comment | Reply, isReply?: boolean }) => (
    <div className={`flex space-x-4 ${isReply ? 'ml-12 mt-4' : ''}`}>
      <Avatar className="h-10 w-10 flex-shrink-0">
        <AvatarImage src={comment.author.avatar} alt={comment.author.name} />
        <AvatarFallback>{comment.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
      </Avatar>
      
      <div className="flex-1 space-y-3">
        <div className="bg-card rounded-lg p-4 border">
          <div className="flex items-center space-x-2 mb-2">
            <h4 className="font-semibold text-blog-text">{comment.author.name}</h4>
            <span className="text-sm text-blog-text-light">{comment.timestamp}</span>
          </div>
          <p className="text-blog-text leading-relaxed">{comment.content}</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="text-blog-text-light hover:text-blog-primary">
            <Heart className="h-4 w-4 mr-1" />
            {comment.likes}
          </Button>
          {!isReply && (
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-blog-text-light hover:text-blog-primary"
              onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
            >
              <Reply className="h-4 w-4 mr-1" />
              Reply
            </Button>
          )}
        </div>

        {!isReply && replyingTo === comment.id && (
          <div className="space-y-3 mt-4">
            <Textarea
              placeholder="Write a reply..."
              value={replyContent}
              onChange={(e) => setReplyContent(e.target.value)}
              className="min-h-[100px]"
            />
            <div className="flex space-x-2">
              <Button 
                onClick={() => handleAddReply(comment.id)}
                disabled={!replyContent.trim()}
                className="bg-blog-primary hover:bg-blog-primary-light text-white"
              >
                Reply
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => {
                  setReplyingTo(null);
                  setReplyContent('');
                }}
              >
                Cancel
              </Button>
            </div>
          </div>
        )}

        {!isReply && 'replies' in comment && comment.replies.length > 0 && (
          <div className="space-y-4">
            {comment.replies.map((reply) => (
              <CommentItem key={reply.id} comment={reply} isReply={true} />
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Comments Header */}
      <div className="flex items-center space-x-2">
        <MessageCircle className="h-5 w-5 text-blog-primary" />
        <h3 className="text-xl font-bold text-blog-text">
          Comments ({comments.length})
        </h3>
      </div>

      {/* Add Comment Form */}
      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            <h4 className="font-semibold text-blog-text">Leave a comment</h4>
            <Textarea
              placeholder="Share your thoughts..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="min-h-[120px]"
            />
            <div className="flex justify-end">
              <Button 
                onClick={handleAddComment}
                disabled={!newComment.trim()}
                className="bg-blog-primary hover:bg-blog-primary-light text-white"
              >
                Post Comment
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Comments List */}
      <div className="space-y-8">
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>

      {comments.length === 0 && (
        <div className="text-center py-12">
          <MessageCircle className="h-12 w-12 text-blog-text-light mx-auto mb-4" />
          <p className="text-blog-text-light">No comments yet. Be the first to share your thoughts!</p>
        </div>
      )}
    </div>
  );
};

export default Comments;