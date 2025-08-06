import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

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
    <div className="min-h-screen bg-background">
      <Navigation />
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
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
              Insights & Resources
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
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
            className={`relative transition-all duration-700 delay-200 ${
              postsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Temporary Coming Soon Overlay */}
            <div className="absolute inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm rounded-lg">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                  Coming Soon
                </h3>
                <p className="text-muted-foreground text-lg max-w-md">
                  I'm working on exciting content for you. Check back soon for insights on UX research, service design, and process improvement.
                </p>
              </div>
            </div>
            
            <div className="space-y-12 max-w-2xl mx-auto opacity-30">
              {blogPosts.map((post, index) => (
                <Card 
                  key={post.id} 
                  className="group sticky top-20 transform transition-all duration-300 ease-out overflow-hidden border border-border bg-blog-card hover:bg-blog-card-hover hover:border-primary/20 shadow-lg hover:shadow-xl hover-glow"
                  style={{
                    zIndex: index + 1,
                    transform: `translateY(${index * -10}px)`
                  }}
                >
                  {/* Subtle top accent */}
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary" />
                  
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-card/90 text-card-foreground border border-border hover:bg-card">
                        {post.category}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="relative p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center text-sm text-muted-foreground space-x-4">
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
                    <CardTitle className="text-xl text-card-foreground mb-3 leading-tight">
                      {post.title}
                    </CardTitle>
                    <p className="text-muted-foreground leading-relaxed">
                      {post.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="relative p-6 pt-0">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-muted-foreground">Tags</span>
                        <div className="h-px flex-1 bg-border" />
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                          <Badge 
                            key={tag} 
                            variant="outline" 
                            className="text-xs px-3 py-1 bg-muted/50 text-muted-foreground border border-border hover:bg-muted hover:border-primary/40 transition-all duration-200"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
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