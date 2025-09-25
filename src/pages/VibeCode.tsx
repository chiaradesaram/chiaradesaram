import { useEffect } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

import tailsUpImage from "@/assets/project-tailsup.jpg";
import compoundLabImage from "@/assets/project-compoundlab.jpg";
import localBasketImage from "@/assets/project-localbasket.jpg";
import spanishBoostImage from "@/assets/project-spanishboost.jpg";
import saxJamImage from "@/assets/project-saxjam.jpg";
import simplyLaunchImage from "@/assets/project-simplylaunch.jpg";

const VibeCode = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollReveal();

  const vibeProjects = [
    {
      id: 1,
      name: "Local Basket",
      description: "A food waste reduction platform connecting consumers with surplus food from local businesses. (Prototype)",
      problem: "Transforms food waste from an environmental and economic burden into affordable, quality meals for consumers.",
      category: "Sustainability",
      url: "https://localbasket.lovable.app",
      gradient: "from-emerald-400 to-emerald-600",
      image: localBasketImage
    },
    {
      id: 2,
      name: "SimplyLaunch",
      description: "Simplifies starting a business in Sri Lanka with easy-to-use tools, guides, and resources. (Prototype)",
      problem: "Early-stage entrepreneurs struggle to find clear guidance and tools on starting a business in Sri Lanka.",
      category: "Business",
      url: "https://simplylaunch.lovable.app",
      gradient: "from-blue-400 to-green-600",
      image: simplyLaunchImage
    },
    {
      id: 3,
      name: "TailsUp",
      description: "Connects users with verified animal rescues, volunteer opportunities, and donation channels. Every donation is tracked, every organization is verified, every impact is measured. Features a novel supply chain connecting restaurants/hotels with excess food to animal charities. (Prototype)",
      problem: "People want to help animals but don't know which organizations to trust or where to start, plus food wastage from businesses could be routed to animal rescues.",
      category: "Social Impact",
      url: "https://tailsup.lovable.app",
      gradient: "from-emerald-500 to-teal-600",
      image: tailsUpImage
    },
    {
      id: 4,
      name: "CompoundLab",
      description: "Teaches personal finance through interactive video tutorials, compound interest calculators, mortgage calculators, and retirement planning tools. Users can compare bank accounts, investment options, and build personalized financial portfolios with educational guidance.",
      problem: "Financial illiteracy leaves people unprepared for major decisions like buying homes or retirement planning, with complex concepts poorly explained and no practical tools to test scenarios.",
      category: "FinTech",
      url: "https://compoundlab.lovable.app",
      gradient: "from-teal-400 to-cyan-600",
      image: compoundLabImage
    },
    {
      id: 5,
      name: "Spanish Boost",
      description: "A Spanish learning tool with revision, translation features, and interactive quizzes for a more rounded learning approach than traditional apps.",
      problem: "Built as a personal tool to help my own Spanish learning journey.",
      category: "Education",
      url: "https://spanishboost.lovable.app",
      gradient: "from-orange-400 to-red-600",
      image: spanishBoostImage
    },
    {
      id: 6,
      name: "SaxJam",
      description: "A saxophone learning tool with practice tools, technique exercises, and music theory lessons.",
      problem: "Built as a personal tool to help my own saxophone learning journey. Free, quality resources were hard to find.",
      category: "Music Education",
      url: "https://saxjam.lovable.app",
      gradient: "from-purple-400 to-indigo-600",
      image: saxJamImage
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
                Vibe Code Playground
              </h1>
              <Zap className="w-8 h-8 text-secondary animate-bounce" />
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl">
              These aren't polished apps — they're sketches, thoughts, and vibe-coded tools I built in my free time to explore problems that fascinate me.
            </p>
          </div>
        </div>
      </section>

      {/* Vibe Projects */}
      <section className="pb-24 px-6">
        <div className="container mx-auto max-w-6xl">          
          <div
            ref={projectsRef}
            className={`transition-all duration-700 delay-200 ${
              projectsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="grid grid-cols-1 gap-8">
              {vibeProjects.map((project, index) => (
                <Card 
                  key={project.id} 
                  className="group relative overflow-hidden border border-border bg-gradient-to-br from-card to-card/50 hover:from-card/80 hover:to-card/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 rounded-2xl"
                  style={{
                    animationDelay: `${index * 150}ms`
                  }}
                >
                  {/* Gradient border effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl pointer-events-none`} />
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.gradient} rounded-t-2xl pointer-events-none`} />
                  
                  {/* Mobile Layout */}
                  <div className="md:hidden">
                    {/* Mobile Image Section */}
                    <div className="relative h-48 overflow-hidden rounded-t-2xl">
                      <img 
                        src={project.image} 
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 pointer-events-none`} />
                      <div className="absolute top-4 left-4">
                        <Badge className={`bg-gradient-to-r ${project.gradient} text-white border-0 shadow-md text-sm px-3 py-1`}>
                          {project.category}
                        </Badge>
                      </div>
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="absolute top-4 right-4 opacity-60 hover:opacity-100 transition-opacity duration-300 hover:scale-110 transform"
                      >
                        <ExternalLink className="w-5 h-5 text-white drop-shadow-lg" />
                      </a>
                    </div>
                    
                    {/* Mobile Content Section */}
                    <div className="p-6 space-y-4">
                      <h3 className="text-xl font-bold text-foreground leading-tight">
                        {project.description.split('.')[0]}
                      </h3>
                      
                      <div className="text-sm font-medium text-muted-foreground opacity-80">
                        {project.name}
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {project.problem}
                      </p>
                      
                      <Button
                        asChild
                        className="relative z-10 pointer-events-auto w-full bg-card-foreground text-card hover:bg-card-foreground/90 border border-border hover:border-primary/40 transition-all duration-300 px-6 py-2 rounded-xl"
                      >
                        <a 
                          href={project.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label={`Open ${project.name} app in a new tab`}
                        >
                          <span>View App</span>
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className="hidden md:flex items-stretch h-full min-h-[320px]">
                    {/* Left Content Section */}
                    <div className="flex-1 p-6 flex flex-col justify-between">
                      {/* Header */}
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <Badge className={`bg-gradient-to-r ${project.gradient} text-white border-0 shadow-md text-sm px-3 py-1`}>
                            {project.category}
                          </Badge>
                          <a 
                            href={project.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="opacity-60 hover:opacity-100 transition-opacity duration-300 hover:scale-110 transform"
                          >
                            <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                          </a>
                        </div>
                        
                        {/* Main Heading */}
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 leading-tight">
                          {project.description.split('.')[0]}
                        </h3>
                        
                        {/* App Name Label */}
                        <div className="text-base font-medium text-muted-foreground mb-4 opacity-80">
                          {project.name}
                        </div>
                        
                        {/* Description */}
                        <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                          {project.problem}
                        </p>
                      </div>
                      
                      {/* Bottom Section */}
                      <div>
                        <Button
                          asChild
                          className="relative z-10 pointer-events-auto bg-card-foreground text-card hover:bg-card-foreground/90 border border-border hover:border-primary/40 transition-all duration-300 px-6 py-2 rounded-xl"
                        >
                          <a 
                            href={project.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label={`Open ${project.name} app in a new tab`}
                          >
                            <span>View App</span>
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </a>
                        </Button>
                      </div>
                    </div>
                    
                    {/* Right Visual Section */}
                    <div className="w-64 relative">
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent to-card/20 pointer-events-none" />
                      <img 
                        src={project.image} 
                        alt={project.name}
                        className="w-full h-full object-cover rounded-r-2xl"
                      />
                      {/* Overlay gradient for better text readability */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 rounded-r-2xl pointer-events-none`} />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VibeCode;