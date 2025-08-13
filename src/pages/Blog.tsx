import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Blog = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: postsRef, isVisible: postsVisible } = useScrollReveal();

  const vibeProjects = [
    {
      id: 1,
      name: "Local Basket",
      description: "A food waste reduction platform connecting consumers with surplus food from local businesses.",
      problem: "Transforms food waste from an environmental and economic burden into affordable, quality meals for consumers.",
      category: "Sustainability",
      tech: ["React", "Supabase", "Tailwind"],
      url: "https://localbasket.lovable.app",
      gradient: "from-green-500 to-emerald-600",
      icon: "🥗",
      bgPattern: "organic"
    },
    {
      id: 2,
      name: "TaskFlow Pro",
      description: "An intelligent task management system with AI-powered priority suggestions and team collaboration features.",
      problem: "Eliminates productivity bottlenecks by automatically organizing tasks and optimizing team workflows.",
      category: "Productivity",
      tech: ["React", "AI Integration", "Real-time Sync"],
      url: "https://taskflow-pro.lovable.app",
      gradient: "from-blue-500 to-indigo-600",
      icon: "✅",
      bgPattern: "geometric"
    },
    {
      id: 3,
      name: "MoodSpace",
      description: "A mental wellness companion app that tracks mood patterns and provides personalized mindfulness exercises.",
      problem: "Makes mental health support accessible through data-driven insights and personalized wellness recommendations.",
      category: "Wellness",
      tech: ["React", "Data Visualization", "PWA"],
      url: "https://moodspace.lovable.app",
      gradient: "from-purple-500 to-pink-600",
      icon: "🧘‍♀️",
      bgPattern: "waves"
    },
    {
      id: 4,
      name: "QuickPoll",
      description: "Real-time polling and survey platform for instant feedback collection with beautiful data visualization.",
      problem: "Streamlines decision-making processes by enabling rapid feedback collection and instant result analysis.",
      category: "Engagement",
      tech: ["React", "Real-time", "Charts"],
      url: "https://quickpoll.lovable.app",
      gradient: "from-orange-500 to-red-600",
      icon: "📊",
      bgPattern: "ripples"
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
                Vibe Projects
              </h1>
              <Zap className="w-8 h-8 text-secondary animate-bounce" />
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Fun little apps I've built to solve real problems. Each one is a quick experiment in turning ideas into working solutions.
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
                    <div className={`w-full h-full bg-gradient-to-br ${project.gradient}`} />
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
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-sm font-medium text-muted-foreground">Tech Stack</span>
                        <div className="h-px flex-1 bg-border" />
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="outline" 
                            className="text-xs px-3 py-1 bg-background/50 text-foreground border border-border hover:bg-muted hover:border-primary/40 transition-all duration-200"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      
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