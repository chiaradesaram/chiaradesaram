import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Sparkles, Zap, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import tailsUpImage from "@/assets/project-tailsup.jpg";
import compoundLabImage from "@/assets/project-compoundlab.jpg";

const Blog = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: postsRef, isVisible: postsVisible } = useScrollReveal();
  const { ref: blogRef, isVisible: blogVisible } = useScrollReveal();

  const vibeProjects = [
    {
      id: 1,
      name: "Local Basket",
      description: "A food waste reduction platform connecting consumers with surplus food from local businesses.",
      problem: "Transforms food waste from an environmental and economic burden into affordable, quality meals for consumers.",
      category: "Sustainability",
      tech: ["React", "Supabase", "Tailwind"],
      url: "https://localbasket.lovable.app",
      gradient: "from-emerald-400 to-emerald-600",
      icon: "🥗",
      bgPattern: "organic"
    },
    {
      id: 2,
      name: "TailsUp",
      description: "Connects users with verified animal rescues, volunteer opportunities, and donation channels. Every donation is tracked, every organization is verified, every impact is measured. Features a novel supply chain connecting restaurants/hotels with excess food to animal charities.",
      problem: "People want to help animals but don't know where to start or which organizations to trust. Lack of transparency in charity donations, fragmented volunteering opportunities, and food waste from businesses that could benefit animal rescues.",
      category: "Social Impact",
      tech: ["React", "Donation Tracking", "Verification System"],
      url: "#",
      gradient: "from-emerald-500 to-teal-600",
      icon: "🐾",
      bgPattern: "organic",
      image: tailsUpImage
    },
    {
      id: 3,
      name: "CompoundLab",
      description: "Teaches personal finance through interactive video tutorials, compound interest calculators, mortgage calculators, and retirement planning tools. Users can compare bank accounts, investment options, and build personalized financial portfolios with educational guidance.",
      problem: "Financial illiteracy leaves people unprepared for major life decisions like buying homes, saving for retirement, or choosing investments. Complex financial concepts are often poorly explained, and people lack practical tools to experiment with different scenarios before making real financial commitments.",
      category: "FinTech",
      tech: ["React", "Financial Calculators", "Educational Tools"],
      url: "#",
      gradient: "from-teal-400 to-cyan-600",
      icon: "💰",
      bgPattern: "geometric",
      image: compoundLabImage
    }
  ];

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
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-primary animate-pulse" />
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Vibe Projects & Insights
              </h1>
              <Zap className="w-8 h-8 text-secondary animate-bounce" />
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Fun apps I've built to solve real problems, plus insights on UX research, service design, and process improvement.
            </p>
          </div>
        </div>
      </section>

      {/* Vibe Projects */}
      <section className="pb-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div
            ref={postsRef}
            className={`transition-all duration-700 delay-200 ${
              postsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {vibeProjects.map((project, index) => (
                <Card 
                  key={project.id} 
                  className="group relative overflow-hidden border border-border bg-card hover:bg-card/50 hover:border-primary/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                  style={{
                    animationDelay: `${index * 150}ms`
                  }}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-br ${project.gradient}`} />
                    )}
                  </div>
                  
                  {/* Animated gradient border */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur`} />
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.gradient}`} />
                  
                  <CardHeader className="relative p-6 pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="text-4xl animate-bounce">{project.icon}</div>
                        <div>
                          <Badge className={`bg-gradient-to-r ${project.gradient} text-white border-0 shadow-lg`}>
                            {project.category}
                          </Badge>
                        </div>
                      </div>
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group/link opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                      >
                        <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                      </a>
                    </div>
                    
                    <CardTitle className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                      {project.name}
                    </CardTitle>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>
                    
                    {/* Problem section with fun styling */}
                    <div className="bg-muted/30 rounded-lg p-4 border border-border/50">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-sm font-semibold text-foreground">Problem Solved</span>
                      </div>
                      <p className="text-sm text-muted-foreground italic">
                        {project.problem}
                      </p>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="relative p-6 pt-0">
                    <div className="space-y-4">
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block w-full"
                      >
                        <Button className={`w-full bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white border-0 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group/btn`}>
                          <span>Try It Live</span>
                          <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Divider between sections */}
            <div className="text-center mt-16 mb-16">
              <div className="flex items-center justify-center gap-4">
                <div className="h-px bg-gradient-to-r from-transparent to-border flex-1" />
                <div className="text-2xl">✨</div>
                <div className="h-px bg-gradient-to-l from-transparent to-border flex-1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="pb-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div
            ref={blogRef}
            className={`transition-all duration-700 delay-400 ${
              blogVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Blog Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent mb-6">
                Insights & Resources
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Deep dives into UX research, service design, and process improvement methodologies.
              </p>
            </div>

            <div className="relative">
              {/* Coming Soon Overlay */}
              <div className="absolute inset-0 z-50 flex items-start justify-center pt-16 bg-background/90 backdrop-blur-sm rounded-lg">
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
                    I'm working on exciting content for you. Check back soon for insights on all things product and CX.
                  </p>
                </div>
              </div>
              
              <div className="space-y-12 max-w-2xl mx-auto opacity-30">
                {blogPosts.map((post, index) => (
                  <Card 
                    key={post.id} 
                    className="group sticky top-20 transform transition-all duration-300 ease-out overflow-hidden border border-border bg-card hover:bg-card/50 hover:border-primary/20 shadow-lg hover:shadow-xl"
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

            {/* Fun footer message */}
            <div className="text-center mt-16 p-8 bg-muted/30 rounded-2xl border border-border/50">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                More Coming Soon!
              </h3>
              <p className="text-muted-foreground">
                These are just the beginning. Always experimenting with new ideas and turning them into reality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;