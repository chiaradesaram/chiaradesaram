import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Download } from "lucide-react";
// Using the uploaded image directly

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
                Hi,<br />
                I am<br />
                <span className="text-gradient whitespace-nowrap">Chiara de Saram</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Insight‑driven and customer‑focused, blending product strategy, business analysis, and user research to craft solutions that matter.
              </p>
            </div>
            
            {/* Floating Skills */}
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="px-4 py-2 text-sm"><span className="text-shimmer">Business Analysis</span></Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm"><span className="text-shimmer">User Research</span></Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm"><span className="text-shimmer">Process Optimization</span></Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm"><span className="text-shimmer">Product Management</span></Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm"><span className="text-shimmer">Product Operations</span></Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm"><span className="text-shimmer">CX Strategy</span></Badge>
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
              <div className="w-80 h-96 lg:w-96 lg:h-[450px] overflow-hidden relative z-10">
                <img 
                  src="/lovable-uploads/aefb496c-5639-4934-af77-54c04365a85c.png" 
                  alt="Chiara de Saram" 
                  className="w-full h-full object-cover object-top"
                />
                {/* Gradient overlay to blend into background */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80"></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-8 -left-8 bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold shadow-lg transform -rotate-12">
                UI/UX Designer
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white border-2 border-gray-200 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                8 years experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;