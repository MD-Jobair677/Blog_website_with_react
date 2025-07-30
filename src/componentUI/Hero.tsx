import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=1920&h=1080&fit=crop')`
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blog-primary/20 via-black/40 to-black/60" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 text-white/30">
        <Sparkles className="h-6 w-6" />
      </div>
      <div className="absolute bottom-20 right-10 text-white/30">
        <Sparkles className="h-8 w-8" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6 border border-white/20">
            <Sparkles className="h-4 w-4 mr-2" />
            Welcome to BlogHub
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Discover Amazing
            <span className="block bg-gradient-to-r from-blog-primary-light to-white bg-clip-text text-transparent">
              Stories & Ideas
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Join thousands of readers exploring the latest in technology, design, business, and lifestyle. 
            Start your journey of discovery today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-blog-primary hover:bg-blog-primary-light text-white px-8 py-4 text-lg font-medium group"
            >
              Start Reading
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/30 bg-transparent text-white hover:bg-white/10 backdrop-blur-sm hover:text-white px-8 py-4 text-lg font-medium"
            >
              Browse Categories
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-md">10K+</div>
              <div className="text-white/80">Articles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-md">50K+</div>
              <div className="text-white/80">Readers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-md">1K+</div>
              <div className="text-white/80">Authors</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;