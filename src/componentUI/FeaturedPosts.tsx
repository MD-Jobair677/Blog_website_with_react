import BlogCard from "./BlogCard";
import { useGetPostQuery } from '@/redux/Post/Post.jsx'
import { Link } from "react-router-dom";







interface FeaturedPostsProps {
  showAll?: boolean;
    SearchItem?: string;
}

const FeaturedPosts = ({ showAll = true, SearchItem = '' }: FeaturedPostsProps) => {
  const { data, isLoading } = useGetPostQuery();
  const PostData = data?.data?.data ?? [];

  const postsToShow = showAll ? PostData : PostData.slice(0, 4);

//  console.log(SearchItem)
  
  let filterData = postsToShow;

  if (SearchItem) {
    filterData = postsToShow.filter((post) =>
      post.title.toLowerCase().includes(SearchItem.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(SearchItem.toLowerCase())
    );
  }

  return (
    <section className="py-16 bg-blog-surface">
      <div className="container mx-auto px-4">
 
        <div className="mb-16">
          {showAll ? (
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-blog-text">Latest Articles</h2>
              <Link to="/" className="text-blog-primary hover:text-blog-primary-light font-medium">
                ← Back to Home
              </Link>
            </div>
          ) : (
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-blog-text">Latest Articles</h2>
              <Link to="/view/all/post" className="text-blog-primary hover:text-blog-primary-light font-medium">
                View All →
              </Link>
            </div>
          )}

        
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filterData.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;