import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Linkedin, Github } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profilePlaceholder from "@/assets/profile-placeholder.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dark Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Profile Photo */}
          <div className="flex justify-center mb-8">
            <div className="futuristic-border w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
              <img 
                src={profilePlaceholder} 
                alt="Chiara de Saram" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Chiara de Saram
          </h1>
          
          <p className="text-xl md:text-2xl font-light opacity-90 max-w-3xl mx-auto leading-relaxed">
            Business Analyst & Consultant who blends business analysis, CX, and user research 
            to craft tools that solve the <em className="text-yellow-300 font-medium">right</em> problems
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-lg">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2">
              <span className="font-semibold">8</span> Years Experience
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2">
              <span className="font-semibold">6</span> Major Projects
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2">
              Startups → Fortune 500
            </div>
          </div>
          
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            With customer needs at the heart of every decision, I help teams transform 
            insights into powerful, usable, and measurable outcomes.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;