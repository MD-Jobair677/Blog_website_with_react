import Header from "@/componentUI/Header";
import FeaturedPosts from "@/componentUI/FeaturedPosts";
import Footer from "@/componentUI/Footer";
// Corrected to accept props as an object:
interface FeaturedPostsProps {
  showAll?: boolean;
}


const ViewAllPost = ({ showAll = false }: FeaturedPostsProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-10">
        <FeaturedPosts showAll={true} /> 
      </main>
      <Footer />
    </div>
  );
};

export default ViewAllPost;
