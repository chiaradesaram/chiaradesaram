import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Download } from "lucide-react";
// Using the uploaded image directly

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#F8F8F8' }}>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
                Hi, I am<br />
                <span className="text-gradient whitespace-nowrap">Chiara de Saram</span>
              </h1>
              
              <p className="text-xl leading-relaxed max-w-lg" style={{ color: '#4A4A3A' }}>
                Insight‑driven and customer‑focused, blending product strategy, business analysis, and user research to craft solutions that matter.
              </p>
            </div>
            
            {/* Core Expertise Areas */}
            <div className="grid grid-cols-2 gap-4 max-w-md">
              {[
                "Business Transformation",
                "Customer Experience", 
                "Process",
                "Technology Solutions"
              ].map((expertise, index) => (
                <div 
                  key={expertise}
                  className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm border border-primary/20 p-4 hover:from-primary/20 hover:to-primary/10 transition-all duration-500 animate-fade-in opacity-0"
                  style={{
                    animationDelay: `${index * 200}ms`,
                    animationFillMode: 'forwards'
                  }}
                >
                  <div className="relative z-10">
                    <div className="text-sm font-semibold text-primary mb-1 group-hover:scale-105 transition-transform duration-300">
                      {expertise}
                    </div>
                    <div className="h-1 w-8 bg-gradient-to-r from-primary to-primary/50 rounded-full group-hover:w-12 transition-all duration-300"></div>
                  </div>
                  
                  {/* Animated background element */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating dots animation */}
                  <div className="absolute top-2 right-2 w-2 h-2 bg-primary/30 rounded-full group-hover:scale-150 group-hover:bg-primary/50 transition-all duration-300"></div>
                </div>
              ))}
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-3"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>
          </div>
          
          {/* Right Content - Photo */}
          <div className="flex justify-center lg:justify-end relative">
            <div className="relative">
              {/* Profile Photo */}
              <div className="w-96 h-[450px] lg:w-[450px] lg:h-[550px] overflow-hidden relative z-10">
                <img 
                  src="/lovable-uploads/aefb496c-5639-4934-af77-54c04365a85c.png" 
                  alt="Chiara de Saram" 
                  className="w-full h-full object-cover object-top"
                />
                {/* Gradient overlay to blend into background */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80"></div>
              </div>
              
              {/* Floating Elements removed */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;