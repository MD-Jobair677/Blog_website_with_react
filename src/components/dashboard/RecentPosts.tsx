import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, MessageSquare, Calendar, MoreHorizontal } from "lucide-react";

interface Post {
  id: string;
  title: string;
  status: 'published' | 'draft' | 'scheduled';
  views: number;
  comments: number;
  publishedAt: string;
  thumbnail?: string;
}

const mockPosts: Post[] = [
  {
    id: '1',
    title: 'Getting Started with React Hooks',
    status: 'published',
    views: 1240,
    comments: 23,
    publishedAt: '2024-01-15',
  },
  {
    id: '2',
    title: 'Advanced TypeScript Patterns',
    status: 'published',
    views: 890,
    comments: 12,
    publishedAt: '2024-01-12',
  },
  {
    id: '3',
    title: 'Building Modern UIs with Tailwind',
    status: 'draft',
    views: 0,
    comments: 0,
    publishedAt: '2024-01-10',
  },
  {
    id: '4',
    title: 'State Management in 2024',
    status: 'scheduled',
    views: 0,
    comments: 0,
    publishedAt: '2024-01-20',
  },
];

function getStatusColor(status: Post['status']) {
  switch (status) {
    case 'published':
      return 'bg-success text-success-foreground';
    case 'draft':
      return 'bg-muted text-muted-foreground';
    case 'scheduled':
      return 'bg-warning text-warning-foreground';
    default:
      return 'bg-muted text-muted-foreground';
  }
}

export function RecentPosts() {
  return (
    <Card className="shadow-soft">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Posts</CardTitle>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {mockPosts.map((post) => (
          <div key={post.id} className="flex items-center justify-between p-4 border border-border/50 rounded-lg hover:bg-muted/30 transition-colors">
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-medium text-foreground truncate pr-4">
                  {post.title}
                </h3>
                <Badge 
                  className={`${getStatusColor(post.status)} text-xs shrink-0`}
                >
                  {post.status}
                </Badge>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {new Date(post.publishedAt).toLocaleDateString()}
                </div>
                {post.status === 'published' && (
                  <>
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {post.views.toLocaleString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageSquare className="w-3 h-3" />
                      {post.comments}
                    </div>
                  </>
                )}
              </div>
            </div>
            
            <Button variant="ghost" size="sm" className="shrink-0 ml-2">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}