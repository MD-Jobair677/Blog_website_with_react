import Header from "@/componentUI/Header";
import Hero from "@/componentUI/Hero";
import FeaturedPosts from "@/componentUI/FeaturedPosts";
import Newsletter from "@/componentUI/Newsletter";
import Footer from "@/componentUI/Footer";
import { useState } from "react";

// interface FeaturedPostsProps {
//   showAll?: boolean;
//   searchTerm?: string
// }
const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="min-h-screen bg-background">
      <Header   searchTerm={searchTerm} onSearch={setSearchTerm}/>
      <main>
        <Hero />
        <FeaturedPosts showAll={false} />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
