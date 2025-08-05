import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Download, ArrowDown } from "lucide-react";
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const skills = ["Business Analysis", "User Research", "Process Optimization", "Product Management", "Product Operations", "Customer Experience", "Business Transformation"];
  return <section className="relative min-h-screen overflow-hidden pt-32 pb-20 flex items-center">
      {/* Wave Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/90"></div>
        
        {/* Wave layers */}
        <div className="absolute inset-0">
          {/* First wave layer */}
          <div className="absolute inset-0 opacity-30">
            <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
              <path d="M0,800 C300,700 600,750 900,650 C1050,600 1150,650 1200,600 L1200,800 Z" 
                    fill="url(#wave1)" opacity="0.1"/>
            </svg>
          </div>
          
          {/* Second wave layer */}
          <div className="absolute inset-0 opacity-20">
            <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
              <path d="M0,800 C200,720 500,680 800,720 C950,740 1100,700 1200,720 L1200,800 Z" 
                    fill="url(#wave2)" opacity="0.15"/>
            </svg>
          </div>
          
          {/* Third wave layer */}
          <div className="absolute inset-0 opacity-15">
            <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
              <path d="M0,800 C400,760 700,700 1000,760 C1100,780 1150,760 1200,770 L1200,800 Z" 
                    fill="url(#wave3)" opacity="0.1"/>
            </svg>
          </div>
        </div>
        
        {/* SVG Gradients */}
        <svg width="0" height="0">
          <defs>
            <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--secondary))" stopOpacity="0.2" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="wave3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--muted))" stopOpacity="0.1" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.03" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="space-y-10 animate-fade-in">
            {/* Main heading */}
            <div className="space-y-6 animate-fade-in" style={{
            animationDelay: '0.4s',
            animationFillMode: 'both'
          }}>
              <div className="space-y-2">
                <p className="text-lg text-muted-foreground font-medium tracking-wide">Hi there, I'm</p>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                  <span className="text-foreground">Chiara</span>
                  <br />
                  <span className="text-gradient">
                    de Saram
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
            <div className="space-y-4 animate-fade-in" style={{
            animationDelay: '0.6s',
            animationFillMode: 'both'
          }}>
              
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => <Badge key={skill} variant="secondary" className="px-4 py-2 text-sm bg-slate-700/80 text-slate-200 border border-slate-600/50 hover:bg-slate-600/80 hover:border-slate-500/60 transition-all duration-300 animate-fade-in opacity-0 backdrop-blur-sm" style={{
                animationDelay: `${0.8 + index * 0.1}s`,
                animationFillMode: 'forwards'
              }}>
                    {skill}
                  </Badge>)}
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-fade-in" style={{
            animationDelay: '1.2s',
            animationFillMode: 'both'
          }}>
              <Button size="lg" onClick={() => scrollToSection('contact')} className="group px-8 py-4 text-lg bg-primary hover:bg-primary/90 text-primary-foreground hover-glow transition-all duration-300">
                <Mail className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                Get In Touch
              </Button>
              <Button variant="outline" size="lg" className="glass-card px-8 py-4 text-lg border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300">
                <Download className="mr-3 h-5 w-5" />
                Download CV
              </Button>
            </div>

            {/* Scroll indicator */}
            <div className="flex justify-center sm:justify-start pt-8 animate-fade-in" style={{
            animationDelay: '1.4s',
            animationFillMode: 'both'
          }}>
              <button onClick={() => scrollToSection('about')} className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
                <span className="text-sm">Scroll to explore</span>
                <ArrowDown className="w-4 h-4 animate-bounce group-hover:text-primary" />
              </button>
            </div>
          </div>

          {/* Right Content - Image aligned with content */}
          <div className="flex justify-center lg:justify-end relative animate-fade-in" style={{
          animationDelay: '0.2s',
          animationFillMode: 'both'
        }}>
            <div className="relative">
              {/* Content placeholder for future image */}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;