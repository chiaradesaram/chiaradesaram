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
      tags: ["User Testing", "UX Research", "Methodology"]
    },
    {
      id: 2,
      title: "Customer Journey Mapping Templates",
      description: "Ready-to-use templates and frameworks for creating detailed customer journey maps that drive actionable insights and improve user experience.",
      category: "Service Design",
      readTime: "12 min read",
      date: "2024-01-10",
      tags: ["Journey Mapping", "Templates", "Service Design"]
    },
    {
      id: 3,
      title: "Process Improvement Framework for Digital Transformation",
      description: "A step-by-step approach to identifying inefficiencies and implementing sustainable process improvements in digital environments.",
      category: "Process Design",
      readTime: "10 min read",
      date: "2024-01-05",
      tags: ["Process Improvement", "Digital Transformation", "Framework"]
    },
    {
      id: 4,
      title: "Design Thinking Workshop Tools & Techniques",
      description: "Practical tools and facilitation techniques for running effective design thinking workshops that generate innovative solutions.",
      category: "Design Thinking",
      readTime: "6 min read",
      date: "2023-12-28",
      tags: ["Design Thinking", "Workshop", "Facilitation"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
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
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-6">
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
            className={`transition-all duration-700 delay-200 ${
              postsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="grid gap-8">
              {blogPosts.map((post, index) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary">{post.category}</Badge>
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
                    <CardTitle className="text-2xl mb-3">{post.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {post.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="default" className="w-full sm:w-auto">
                      Read Article
                    </Button>
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