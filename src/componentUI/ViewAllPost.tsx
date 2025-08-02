import Header from "@/componentUI/Header";
import FeaturedPosts from "@/componentUI/FeaturedPosts";
import Footer from "@/componentUI/Footer";
import { useState } from "react";
// Corrected to accept props as an object:
interface FeaturedPostsProps {
  showAll?: boolean;
  searchTerm?: string
}


const ViewAllPost = ({ showAll = false }: FeaturedPostsProps) => {
   const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="min-h-screen bg-background">
      <Header searchTerm={searchTerm} onSearch={setSearchTerm} />
      <main className="pt-10">
        <FeaturedPosts showAll={true}  SearchItem={searchTerm}/> 
      </main> 
      <Footer />
    </div>
  );
};

export default ViewAllPost;
