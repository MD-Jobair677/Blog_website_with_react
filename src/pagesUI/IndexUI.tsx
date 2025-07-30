import Header from "@/componentUI/Header";
import Hero from "@/componentUI/Hero";
import FeaturedPosts from "@/componentUI/FeaturedPosts";
import Newsletter from "@/componentUI/Newsletter";
import Footer from "@/componentUI/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeaturedPosts />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
