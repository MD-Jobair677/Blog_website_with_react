import { useParams } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, User, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Header from "@/componentUI/Header";
import Footer from "@/componentUI/Footer";
// import Comments from "@/componentUI/Comments";

// Mock data - in real app this would come from API
const mockPost = {
    id: "1",
    title: "The Future of Web Development: Trends to Watch in 2024",
    content: `
    <p>Web development is evolving at an unprecedented pace, and 2024 promises to bring exciting new trends and technologies that will reshape how we build and interact with web applications.</p>

    <h2>1. AI-Powered Development Tools</h2>
    <p>Artificial Intelligence is revolutionizing the development process. From code generation to automated testing, AI tools are becoming indispensable for modern developers. GitHub Copilot, ChatGPT, and other AI assistants are changing how we write code, debug issues, and even design user interfaces.</p>

    <h2>2. Progressive Web Apps (PWAs) Evolution</h2>
    <p>Progressive Web Apps continue to bridge the gap between web and native applications. With improved offline capabilities, better performance, and enhanced user experiences, PWAs are becoming the go-to solution for businesses looking to reach users across all platforms.</p>

    <h2>3. WebAssembly (WASM) Adoption</h2>
    <p>WebAssembly is gaining traction as a way to run high-performance applications in the browser. From gaming to data visualization, WASM opens up new possibilities for web applications that were previously only possible with native software.</p>

    <h2>4. Serverless Architecture</h2>
    <p>The serverless trend continues to grow, with platforms like Vercel, Netlify, and AWS Lambda making it easier than ever to deploy scalable applications without managing infrastructure. This approach reduces costs and improves scalability for many types of applications.</p>

    <h2>Conclusion</h2>
    <p>The web development landscape is more exciting than ever. As these trends continue to evolve, developers who stay current with new technologies and best practices will be best positioned to build the next generation of web applications.</p>
  `,
    category: "Technology",
    readTime: "8 min read",
    publishedAt: "March 15, 2024",
    author: {
        name: "Sarah Johnson",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b890?w=150&h=150&fit=crop&crop=face",
        bio: "Senior Frontend Developer with 8+ years of experience in React, TypeScript, and modern web technologies."
    },
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&fit=crop",
    tags: ["Web Development", "Technology", "Future", "AI", "PWA"]
};

const BlogPost = () => {
    const { id } = useParams();

    return (
        <div className="min-h-screen bg-background">
            {/* <Header /> */}

            <main className="pt-8">
                {/* Back Button */}
                <div className="container mx-auto px-4 mb-8">
                    <Button variant="ghost" className="p-0 h-auto font-medium text-blog-text hover:text-blog-primary">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Blog
                    </Button>
                </div>

                {/* Hero Image */}
                <div className="container mx-auto px-4 mb-8">
                    <div className="relative h-64 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                        <img
                            src={mockPost.image}
                            alt={mockPost.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    </div>
                </div>

                {/* Article Content */}
                <div className="container mx-auto px-4 max-w-4xl">
                    <article className="bg-card rounded-2xl p-8 lg:p-12 shadow-sm border">
                        {/* Category Badge */}
                        <Badge className="bg-blog-primary hover:bg-blog-primary-light text-white mb-6">
                            {mockPost.category}
                        </Badge>

                        {/* Title */}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blog-text mb-6 leading-tight">
                            {mockPost.title}
                        </h1>

                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-6 text-blog-text-light mb-8">
                            <div className="flex items-center space-x-2">
                                <Clock className="h-4 w-4" />
                                <span>{mockPost.readTime}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Calendar className="h-4 w-4" />
                                <span>{mockPost.publishedAt}</span>
                            </div>
                        </div>

                        <Separator className="mb-8" />

                        {/* Author Info */}
                        <div className="flex items-start space-x-4 mb-8 p-6 bg-blog-background rounded-lg border">
                            <Avatar className="h-16 w-16">
                                <AvatarImage src={mockPost.author.avatar} alt={mockPost.author.name} />
                                <AvatarFallback>{mockPost.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div>
                                <h3 className="font-semibold text-blog-text mb-1">{mockPost.author.name}</h3>
                                <p className="text-blog-text-light text-sm">{mockPost.author.bio}</p>
                            </div>
                        </div>

                        {/* Content */}
                        <div
                            className="prose prose-lg max-w-none text-blog-text
                prose-headings:text-blog-text prose-headings:font-bold
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
                prose-p:mb-6 prose-p:leading-relaxed
                prose-strong:text-blog-text prose-strong:font-semibold"
                            dangerouslySetInnerHTML={{ __html: mockPost.content }}
                        />

                        <Separator className="my-8" />

                        {/* Tags */}
                        <div className="flex flex-wrap items-center gap-2">
                            <Tag className="h-4 w-4 text-blog-text-light mr-2" />
                            {mockPost.tags.map((tag, index) => (
                                <Badge key={index} variant="secondary" className="text-sm">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    </article>



                </div>
            </main>

            <Footer />
        </div>
    );
};

export default BlogPost;