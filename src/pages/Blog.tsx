import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: postsRef, isVisible: postsVisible } = useScrollReveal();

  const blogPosts = [
    {
      id: 1,
      title: "User Testing Catalog: Essential Methods for UX Research",
      description: "A comprehensive guide to different user testing methodologies, when to use them, and how to implement them effectively in your design process.",
      category: "UX Research",
      readTime: "8 min read",
      date: "2024-01-15",
      tags: ["User Testing", "UX Research", "Methodology"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=240&fit=crop&crop=center"
    },
    {
      id: 2,
      title: "Customer Journey Mapping Templates",
      description: "Ready-to-use templates and frameworks for creating detailed customer journey maps that drive actionable insights and improve user experience.",
      category: "Service Design",
      readTime: "12 min read",
      date: "2024-01-10",
      tags: ["Journey Mapping", "Templates", "Service Design"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=240&fit=crop&crop=center"
    },
    {
      id: 3,
      title: "Process Improvement Framework for Digital Transformation",
      description: "A step-by-step approach to identifying inefficiencies and implementing sustainable process improvements in digital environments.",
      category: "Process Design",
      readTime: "10 min read",
      date: "2024-01-05",
      tags: ["Process Improvement", "Digital Transformation", "Framework"],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=240&fit=crop&crop=center"
    },
    {
      id: 4,
      title: "Design Thinking Workshop Tools & Techniques",
      description: "Practical tools and facilitation techniques for running effective design thinking workshops that generate innovative solutions.",
      category: "Design Thinking",
      readTime: "6 min read",
      date: "2023-12-28",
      tags: ["Design Thinking", "Workshop", "Facilitation"],
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=240&fit=crop&crop=center"
    }
  ];

  return (
    <div className="min-h-screen bg-white">{/* Force light theme */}
      {/* Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div
            ref={headerRef}
            className={`transition-all duration-700 ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Link to="/">
              <Button variant="ghost" className="mb-8 -ml-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6">
              Insights & Resources
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl">
              Practical guides, templates, and insights on UX research, service design, and process improvement.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="pb-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div
            ref={postsRef}
            className={`transition-all duration-700 delay-200 ${
              postsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="space-y-6 max-w-2xl mx-auto">
              {blogPosts.map((post, index) => (
                <Card 
                  key={post.id} 
                  className="group sticky top-20 transform transition-all duration-300 ease-out overflow-hidden border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 shadow-lg hover:shadow-xl"
                  style={{
                    zIndex: index + 1,
                    transform: `translateY(${index * -20}px)`
                  }}
                >
                  {/* Subtle top accent */}
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-slate-300" />
                  
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-slate-800 border border-slate-200 hover:bg-white">
                        {post.category}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="relative p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center text-sm text-slate-500 space-x-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-xl text-slate-800 mb-3 leading-tight">
                      {post.title}
                    </CardTitle>
                    <p className="text-slate-600 leading-relaxed">
                      {post.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="relative p-6 pt-0">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-slate-500">Tags</span>
                        <div className="h-px flex-1 bg-slate-200" />
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                          <Badge 
                            key={tag} 
                            variant="outline" 
                            className="text-xs px-3 py-1 bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100 hover:border-slate-300 transition-all duration-200"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button className="w-full bg-slate-800 hover:bg-slate-700 text-white">
                        Read Article
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;