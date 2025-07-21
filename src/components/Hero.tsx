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
      {/* Bright Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 via-lime-300 to-green-300"></div>
      </div>
      
      {/* Geometric Shapes */}
      <div className="absolute inset-0 z-5">
        {/* Large Circle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-400 rounded-full opacity-60"></div>
        
        {/* Triangular Shape */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-r from-slate-800 to-slate-900 transform skew-y-1"></div>
        
        {/* Small accent circles */}
        <div className="absolute top-20 right-20 w-16 h-16 bg-emerald-500 rounded-full opacity-80"></div>
        <div className="absolute bottom-32 left-16 w-8 h-8 bg-yellow-400 rounded-full"></div>
      </div>
      
      {/* Floating Skill Labels */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 bg-white px-4 py-2 rounded-lg shadow-lg text-slate-800 font-medium">
          Business Analysis
        </div>
        <div className="absolute top-1/3 right-1/4 bg-emerald-500 text-white px-4 py-2 rounded-lg shadow-lg font-medium">
          Process Optimisation
        </div>
        <div className="absolute bottom-1/3 left-1/5 bg-white px-4 py-2 rounded-lg shadow-lg text-slate-800 font-medium">
          User Research
        </div>
        <div className="absolute bottom-1/4 right-1/5 bg-yellow-400 text-slate-800 px-4 py-2 rounded-lg shadow-lg font-medium">
          Product Operations
        </div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-30 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Description Box */}
          <div className="bg-orange-300 p-6 rounded-lg shadow-lg text-slate-800 max-w-2xl mx-auto mb-12">
            <p className="text-lg leading-relaxed">
              I'm a Consultant who blends business analysis, CX, and user research to craft 
              tools that solve the <em className="font-semibold">right</em> problems. With customer needs at the heart of every 
              decision, I help teams transform insights into powerful, usable, and measurable 
              outcomes.
            </p>
          </div>
          
          {/* Profile Photo */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img 
                  src={profilePlaceholder} 
                  alt="Chiara de Saram" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Green accent behind photo */}
              <div className="absolute -z-10 top-4 left-4 w-64 h-64 md:w-80 md:h-80 bg-emerald-400 rounded-full"></div>
            </div>
          </div>
          
          {/* Stats positioned around photo */}
          <div className="relative">
            <div className="absolute -top-20 -left-32 bg-white px-6 py-3 rounded-lg shadow-lg text-slate-800">
              <div className="text-2xl font-bold text-blue-600">6</div>
              <div className="text-sm">Projects</div>
            </div>
            <div className="absolute -top-20 -right-32 bg-white px-6 py-3 rounded-lg shadow-lg text-slate-800">
              <div className="text-2xl font-bold text-blue-600">8 Years of</div>
              <div className="text-sm">Experience</div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-800 mt-16">
            Chiara de Saram
          </h1>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;