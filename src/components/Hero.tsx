import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Download, ArrowDown, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = [
    "Business Analysis", "User Research", "Process Optimization", 
    "Product Management", "Product Operations", "Customer Experience", 
    "Business Transformation"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Main background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-muted/30"></div>
        
        {/* Floating orbs */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-secondary/10 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-glow-pulse"></div>
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="space-y-10 animate-fade-in">
            {/* Status indicator */}
            <div className="flex items-center gap-3 animate-fade-in" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
              <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-muted-foreground">Available for new opportunities</span>
              </div>
            </div>

            {/* Main heading */}
            <div className="space-y-6 animate-fade-in" style={{animationDelay: '0.4s', animationFillMode: 'both'}}>
              <div className="space-y-2">
                <p className="text-lg text-muted-foreground font-medium tracking-wide">Hi there, I'm</p>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                  <span className="text-foreground">Chiara</span>
                  <br />
                  <span className="text-gradient relative">
                    de Saram
                    <Sparkles className="absolute -top-2 -right-8 w-6 h-6 text-primary animate-pulse" />
                  </span>
                </h1>
              </div>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Insight‑driven and customer‑focused, blending 
                <span className="text-primary font-medium"> product strategy</span>, 
                <span className="text-primary font-medium"> business analysis</span>, and 
                <span className="text-primary font-medium"> user research</span> to craft solutions that matter.
              </p>
            </div>
            
            {/* Skills cloud */}
            <div className="space-y-4 animate-fade-in" style={{animationDelay: '0.6s', animationFillMode: 'both'}}>
              <p className="text-sm text-muted-foreground font-medium">Expertise Areas</p>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <Badge 
                    key={skill}
                    variant={index % 2 === 0 ? "secondary" : "outline"} 
                    className="glass-card px-4 py-2 text-sm hover:scale-105 transition-transform duration-300 animate-fade-in opacity-0"
                    style={{
                      animationDelay: `${0.8 + (index * 0.1)}s`,
                      animationFillMode: 'forwards'
                    }}
                  >
                    <span className="text-shimmer">{skill}</span>
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-fade-in" style={{animationDelay: '1.2s', animationFillMode: 'both'}}>
              <Button 
                size="lg" 
                onClick={() => scrollToSection('contact')}
                className="group px-8 py-4 text-lg bg-primary hover:bg-primary/90 text-primary-foreground hover-glow transition-all duration-300"
              >
                <Mail className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="glass-card px-8 py-4 text-lg border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
              >
                <Download className="mr-3 h-5 w-5" />
                Download CV
              </Button>
            </div>

            {/* Scroll indicator */}
            <div className="flex justify-center sm:justify-start pt-8 animate-fade-in" style={{animationDelay: '1.4s', animationFillMode: 'both'}}>
              <button 
                onClick={() => scrollToSection('about')}
                className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
              >
                <span className="text-sm">Scroll to explore</span>
                <ArrowDown className="w-4 h-4 animate-bounce group-hover:text-primary" />
              </button>
            </div>
          </div>
          
          {/* Right Content - Enhanced Photo */}
          <div className="flex justify-center lg:justify-end relative animate-fade-in" style={{animationDelay: '0.8s', animationFillMode: 'both'}}>
            <div className="relative group">
              {/* Photo container */}
              <div className="relative w-80 h-96 lg:w-96 lg:h-[500px] overflow-hidden rounded-3xl">
                {/* Glassmorphism frame */}
                <div className="absolute inset-0 glass-card rounded-3xl z-10 pointer-events-none"></div>
                
                {/* Profile Photo */}
                <img 
                  src="/lovable-uploads/aefb496c-5639-4934-af77-54c04365a85c.png" 
                  alt="Chiara de Saram - Product Strategy & Business Analysis Expert" 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating accent elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-glow-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/15 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
              
              {/* Achievement badge */}
              <div className="absolute top-6 -left-6 glass-card px-4 py-2 rounded-xl animate-float" style={{animationDelay: '3s'}}>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium text-foreground">8+ Years</span>
                </div>
                <p className="text-xs text-muted-foreground">Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;