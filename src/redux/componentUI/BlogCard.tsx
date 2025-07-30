import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Clock, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string;
  author: {
    name: string;
    avatar: string;
  };
  image: string;
  featured?: boolean;
}

interface BlogCardProps {
  post: BlogPost;
  variant?: "default" | "featured" | "compact";
}

const BlogCard = ({ post, variant = "default" }: BlogCardProps) => {
  const isFeature = variant === "featured";
  const isCompact = variant === "compact";

  return (
    <Card className={cn(
      "group cursor-pointer transition-all duration-300 hover:shadow-lg border-0 bg-card",
      "hover:transform hover:-translate-y-1",
      isFeature && "lg:col-span-2 lg:row-span-2"
    )}>
      <div className={cn(
        "relative overflow-hidden rounded-t-lg",
        isFeature ? "h-64 lg:h-80" : isCompact ? "h-48" : "h-56"
      )}>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        
        {/* Category Badge */}
        <Badge className="absolute top-4 left-4 bg-blog-primary hover:bg-blog-primary-light text-white">
          {post.category}
        </Badge>
      </div>

      <CardContent className={cn("p-6", isCompact && "p-4")}>
        {/* Meta info */}
        <div className="flex items-center space-x-4 text-sm text-blog-text-light mb-3">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{post.readTime}</span>
          </div>
          <span>•</span>
          <span>{post.publishedAt}</span>
        </div>

        {/* Title */}
        <h3 className={cn(
          "font-bold text-blog-text mb-3 line-clamp-2 group-hover:text-blog-primary transition-colors",
          isFeature ? "text-2xl lg:text-3xl" : isCompact ? "text-lg" : "text-xl"
        )}>
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className={cn(
          "text-blog-text-light mb-4 line-clamp-3",
          isFeature ? "text-lg" : "text-base"
        )}>
          {post.excerpt}
        </p>

        {/* Author and Read More */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src={post.author.avatar} alt={post.author.name} />
              <AvatarFallback>{post.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium text-blog-text">{post.author.name}</span>
          </div>

          <div className="flex items-center text-blog-primary text-sm font-medium group-hover:text-blog-primary-light transition-colors">
            Read More
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;