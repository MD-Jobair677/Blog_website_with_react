import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Sparkles } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blog-primary/5 to-blog-primary-light/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blog-primary/10 rounded-full mb-6">
            <Mail className="h-8 w-8 text-blog-primary" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-blog-text mb-4">
            Never Miss a Story
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-blog-text-light mb-8 max-w-2xl mx-auto">
            Get the latest articles, insights, and updates delivered straight to your inbox. 
            Join over 50,000 readers who trust our weekly newsletter.
          </p>

          {/* Newsletter Form */}
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-white border-border focus:border-blog-primary"
              />
              <Button className="bg-blog-primary hover:bg-blog-primary-light text-white px-8 whitespace-nowrap">
                Subscribe Now
              </Button>
            </div>
            <p className="text-sm text-blog-text-light mt-3">
              No spam, unsubscribe at any time. Read our{" "}
              <a href="/privacy" className="text-blog-primary hover:underline">
                Privacy Policy
              </a>
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-border">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blog-primary/10 rounded-full mb-4">
                <Sparkles className="h-6 w-6 text-blog-primary" />
              </div>
              <h3 className="font-semibold text-blog-text mb-2">Weekly Digest</h3>
              <p className="text-blog-text-light text-sm">
                Curated selection of the best articles every week
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blog-primary/10 rounded-full mb-4">
                <Sparkles className="h-6 w-6 text-blog-primary" />
              </div>
              <h3 className="font-semibold text-blog-text mb-2">Exclusive Content</h3>
              <p className="text-blog-text-light text-sm">
                Access to subscriber-only articles and insights
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blog-primary/10 rounded-full mb-4">
                <Sparkles className="h-6 w-6 text-blog-primary" />
              </div>
              <h3 className="font-semibold text-blog-text mb-2">Early Access</h3>
              <p className="text-blog-text-light text-sm">
                Be the first to read new articles before they go public
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;