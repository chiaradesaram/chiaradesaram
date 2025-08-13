import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Download, ArrowDown } from "lucide-react";
import { useTypewriter } from "@/hooks/use-typewriter";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const { displayText: typewriterText, isComplete } = useTypewriter("Chiara de Saram", 80, 800);
  const skills = ["Business Analysis", "User Research", "Process Optimization", "Product Management", "Product Operations", "Customer Experience", "Business Transformation"];

  return (
    <section className="relative min-h-screen overflow-hidden pt-32 pb-20 flex items-center">
      {/* Enhanced 3D Wave Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base gradient with more depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/98"></div>
        
        {/* Animated Wave layers with enhanced 3D effect */}
        <div className="absolute inset-0">
          {/* First wave layer - deepest with subtle shadow */}
          <div className="absolute inset-0 animate-wave-slow">
            <svg className="absolute bottom-0 left-0 w-[120%] h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
              <path d="M0,800 C300,500 600,550 900,450 C1050,400 1150,450 1200,400 L1200,800 Z" 
                    fill="url(#wave1)" opacity="0.35"/>
              <path d="M0,800 C300,505 600,555 900,455 C1050,405 1150,455 1200,405 L1200,800 Z" 
                    fill="url(#wave1-shadow)" opacity="0.22"/>
            </svg>
          </div>
          
          {/* Second wave layer - mid depth */}
          <div className="absolute inset-0 animate-wave-medium">
            <svg className="absolute bottom-0 left-0 w-[110%] h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
              <path d="M0,800 C200,520 500,480 800,520 C950,540 1100,500 1200,520 L1200,800 Z" 
                    fill="url(#wave2)" opacity="0.28"/>
              <path d="M0,800 C200,525 500,485 800,525 C950,545 1100,505 1200,525 L1200,800 Z" 
                    fill="url(#wave2-shadow)" opacity="0.16"/>
            </svg>
          </div>
          
          {/* Third wave layer - upper mid */}
          <div className="absolute inset-0 animate-wave-fast">
            <svg className="absolute bottom-0 left-0 w-[115%] h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
              <path d="M0,800 C400,560 700,500 1000,560 C1100,580 1150,560 1200,570 L1200,800 Z" 
                    fill="url(#wave3)" opacity="0.24"/>
              <path d="M0,800 C400,565 700,505 1000,565 C1100,585 1150,565 1200,575 L1200,800 Z" 
                    fill="url(#wave3-highlight)" opacity="0.12"/>
            </svg>
          </div>
          
          {/* Fourth wave layer - surface level */}
          <div className="absolute inset-0 animate-wave-reverse">
            <svg className="absolute bottom-0 left-0 w-[125%] h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
              <path d="M0,800 C150,620 450,580 750,620 C900,640 1050,600 1200,620 L1200,800 Z" 
                    fill="url(#wave4)" opacity="0.19"/>
              <path d="M0,800 C150,625 450,585 750,625 C900,645 1050,605 1200,625 L1200,800 Z" 
                    fill="url(#wave4-highlight)" opacity="0.09"/>
            </svg>
          </div>
          
          {/* Fifth wave layer - very subtle background */}
          <div className="absolute inset-0 animate-wave-subtle">
            <svg className="absolute bottom-0 left-0 w-[130%] h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
              <path d="M0,800 C250,680 550,640 850,680 C980,700 1120,680 1200,690 L1200,800 Z" 
                    fill="url(#wave5)" opacity="0.15"/>
            </svg>
          </div>
          
          {/* Sixth wave layer - atmospheric top layer */}
          <div className="absolute inset-0 animate-wave-gentle">
            <svg className="absolute bottom-0 left-0 w-[140%] h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
              <path d="M0,800 C180,720 480,700 780,720 C920,730 1080,710 1200,720 L1200,800 Z" 
                    fill="url(#wave6)" opacity="0.12"/>
            </svg>
          </div>
        </div>
        
        {/* Enhanced SVG Gradients with 3D effects */}
        <svg width="0" height="0">
          <defs>
            {/* Primary wave with subtle depth */}
            <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(220, 15%, 25%)" stopOpacity="1" />
              <stop offset="50%" stopColor="hsl(220, 12%, 20%)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="hsl(220, 10%, 15%)" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="wave1-shadow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(220, 8%, 8%)" stopOpacity="1" />
              <stop offset="100%" stopColor="hsl(220, 5%, 5%)" stopOpacity="0.5" />
            </linearGradient>

            {/* Second wave with muted tones */}
            <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(215, 12%, 22%)" stopOpacity="1" />
              <stop offset="100%" stopColor="hsl(218, 10%, 18%)" stopOpacity="0.7" />
            </linearGradient>
            <linearGradient id="wave2-shadow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(215, 8%, 10%)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="hsl(218, 5%, 8%)" stopOpacity="0.4" />
            </linearGradient>

            {/* Third wave - very subtle */}
            <linearGradient id="wave3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(210, 10%, 20%)" stopOpacity="1" />
              <stop offset="100%" stopColor="hsl(212, 8%, 16%)" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="wave3-highlight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(210, 15%, 30%)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="hsl(212, 12%, 25%)" stopOpacity="0.3" />
            </linearGradient>

            {/* Fourth wave - atmospheric */}
            <linearGradient id="wave4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(225, 8%, 18%)" stopOpacity="1" />
              <stop offset="100%" stopColor="hsl(220, 6%, 14%)" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="wave4-highlight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(225, 12%, 28%)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="hsl(220, 10%, 22%)" stopOpacity="0.2" />
            </linearGradient>

            {/* Fifth wave - barely visible depth */}
            <linearGradient id="wave5" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(230, 6%, 16%)" stopOpacity="1" />
              <stop offset="100%" stopColor="hsl(225, 4%, 12%)" stopOpacity="0.4" />
            </linearGradient>

            {/* Sixth wave - atmospheric top layer */}
            <linearGradient id="wave6" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(235, 5%, 15%)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="hsl(230, 3%, 11%)" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="space-y-10">
            {/* Main heading with typewriter effect */}
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-lg text-muted-foreground font-medium tracking-wide opacity-0 animate-[fade-in_0.8s_ease-out_0.2s_forwards]">Hi there, I'm</p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight min-h-[1.2em]">
                  <span className="text-foreground">
                    {typewriterText}
                    <span className="animate-pulse">|</span>
                  </span>
                </h1>
              </div>
              
              {isComplete && (
                <p className="text-xl text-muted-foreground leading-relaxed max-w-xl opacity-0 animate-[fade-in_1s_ease-out_0.2s_forwards]">
                  Insight‑driven and customer‑focused, blending 
                  <span className="text-primary font-medium"> product strategy</span>, 
                  <span className="text-primary font-medium"> business analysis</span>, and 
                  <span className="text-primary font-medium"> user research</span> to craft solutions that matter.
                </p>
              )}
            </div>
            
            {/* Skills cloud with staggered animations */}
            {isComplete && (
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {skills.map((skill, index) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="px-2 py-1 md:px-4 md:py-2 text-xs md:text-sm bg-slate-700/80 text-slate-200 border border-slate-600/50 hover:bg-slate-600/80 hover:border-slate-500/60 transition-all duration-300 backdrop-blur-sm opacity-0"
                      style={{
                        animation: `slide-up 0.6s ease-out ${0.4 + index * 0.1}s forwards, scale-in 0.4s ease-out ${0.4 + index * 0.1}s forwards`
                      }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            
            {/* CTA Buttons with dramatic entrance */}
            {isComplete && (
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection("contact")} 
                  className="group px-8 py-4 text-lg bg-primary hover:bg-primary/90 text-primary-foreground hover-glow transition-all duration-300 opacity-0 animate-[slide-in-right_0.8s_ease-out_1.4s_forwards,scale-in_0.6s_ease-out_1.4s_forwards] transform translate-x-8"
                >
                  <Mail className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Get In Touch
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="glass-card px-8 py-4 text-lg border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 opacity-0 animate-[slide-in-right_0.8s_ease-out_1.6s_forwards,scale-in_0.6s_ease-out_1.6s_forwards] transform translate-x-8"
                  onClick={() => {
                    window.open("https://drive.google.com/file/d/1JfX2IaHz3h6Ag94QDDulmf5TZbmRiEll/view?usp=sharing", "_blank");
                  }}
                >
                  <Download className="mr-3 h-5 w-5" />
                  Download CV
                </Button>
              </div>
            )}

            {/* Scroll indicator with bounce entrance */}
            {isComplete && (
              <div className="flex justify-center sm:justify-start pt-8">
                <button 
                  onClick={() => scrollToSection("about")} 
                  className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group opacity-0 animate-[fade-in_0.8s_ease-out_2s_forwards,bounce_0.6s_ease-out_2.2s_forwards]"
                >
                  <span className="text-sm">Scroll to explore</span>
                  <ArrowDown className="w-4 h-4 animate-bounce group-hover:text-primary" />
                </button>
              </div>
            )}
          </div>

          {/* Right Content - Image aligned with content */}
          <div className="flex justify-center lg:justify-end relative opacity-0 animate-[fade-in_1s_ease-out_0.1s_forwards,scale-in_0.8s_ease-out_0.1s_forwards]">
            <div className="relative">
              {/* Content placeholder for future image */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
