import BlogCard from "./BlogCard";
import { useGetPostQuery } from '@/redux/Post/Post.jsx'











const FeaturedPosts = () => {



  const { data, isLoading } = useGetPostQuery();
  const PostData = data?.data?.data ?? [];
  const currentPage = data?.data?.data?.current_page;
  const lastPage = data?.data?.data?.last_page;











  const featuredPosts = [
    {
      id: "1",
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt: "Explore the cutting-edge technologies and methodologies that are shaping the future of web development. From AI integration to serverless architectures, discover what's next.",
      category: "Technology",
      readTime: "8 min read",
      publishedAt: "Dec 15, 2023",
      author: {
        name: "Sarah Chen",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
      },
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=600&fit=crop",
      featured: true
    },
    {
      id: "2",
      title: "Mastering Design Systems: A Complete Guide",
      excerpt: "Learn how to create, implement, and maintain design systems that scale across your entire organization.",
      category: "Design",
      readTime: "12 min read",
      publishedAt: "Dec 12, 2023",
      author: {
        name: "Alex Rivera",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
      },
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop"
    },
    {
      id: "3",
      title: "Building Sustainable Startups in 2024",
      excerpt: "The key strategies for creating environmentally conscious and profitable business models.",
      category: "Business",
      readTime: "6 min read",
      publishedAt: "Dec 10, 2023",
      author: {
        name: "Maya Patel",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
      },
      image: "https://images.unsplash.com/photo-1664575602276-acd2d426b3a5?w=800&h=600&fit=crop"
    },
    {
      id: "4",
      title: "The Art of Minimalist Living",
      excerpt: "Discover how embracing minimalism can lead to a more fulfilling and peaceful lifestyle.",
      category: "Lifestyle",
      readTime: "5 min read",
      publishedAt: "Dec 8, 2023",
      author: {
        name: "David Kim",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop"
    }
  ];

  const recentPosts = [
    {
      id: "5",
      title: "AI in Creative Industries: Revolution or Evolution?",
      excerpt: "Examining how artificial intelligence is transforming creative workflows and what it means for artists and designers.",
      category: "Technology",
      readTime: "7 min read",
      publishedAt: "Dec 14, 2023",
      author: {
        name: "Emma Thompson",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
      },
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop"
    },
    {
      id: "6",
      title: "Remote Work: Building Culture from Distance",
      excerpt: "Strategies for maintaining team cohesion and company culture in a distributed workforce.",
      category: "Business",
      readTime: "9 min read",
      publishedAt: "Dec 11, 2023",
      author: {
        name: "Carlos Rodriguez",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
      },
      image: "https://images.unsplash.com/photo-1664575599618-8f6bd76fc670?w=800&h=600&fit=crop"
    }
  ];

  return (
    <section className="py-16 bg-blog-surface">
      <div className="container mx-auto px-4">
        {/* Featured Posts */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-blog-text">Featured Stories</h2>
            <a href="/featured" className="text-blog-primary hover:text-blog-primary-light font-medium">
              View All →
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main featured post */}
            <div className="lg:col-span-2">
              <BlogCard post={featuredPosts[0]} variant="featured" />
            </div>

            {/* Side featured posts */}
            <div className="space-y-8">
              {featuredPosts.slice(1, 3).map((post) => (
                <BlogCard key={post.id} post={post} variant="compact" />
              ))}
            </div>
          </div>
        </div>

        {/* Recent Posts */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-blog-text">Latest Articles</h2>
            <a href="/recent" className="text-blog-primary hover:text-blog-primary-light font-medium">
              View All →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PostData.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;