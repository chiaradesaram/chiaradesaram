import React from "react";
import { Badge } from "@/components/ui/badge";
import { Heart, Zap, Target, Users } from "lucide-react";
const About = () => {
  const values = [{
    icon: Heart,
    title: "Customer-Centric",
    description: "Customer needs at the heart of every decision"
  }, {
    icon: Target,
    title: "Problem Solver",
    description: "Focus on solving the right problems, not just any problems"
  }, {
    icon: Zap,
    title: "Results-Driven",
    description: "Transform insights into measurable outcomes"
  }, {
    icon: Users,
    title: "Team Enabler",
    description: "Swiss army knife helping product teams succeed"
  }];
  return <section id="about" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">My Approach</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With 8 years of experience spanning startups to Fortune 500 companies, 
                I've learned that the best products come from deeply understanding customer needs 
                and translating those insights into actionable strategies.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I love all things product and act as a Swiss army knife for teams, 
                bringing together business analysis, user research, and process optimization 
                to help bring good products to life.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="px-3 py-1">8 Years Experience</Badge>
                <Badge variant="secondary" className="px-3 py-1">6 Major Projects</Badge>
                <Badge variant="secondary" className="px-3 py-1">Startups → Fortune 500</Badge>
                <Badge variant="secondary" className="px-3 py-1">Multiple Industries</Badge>
              </div>
            </div>

            <div className="relative">
              {/* Diamond/Cross arrangement with staggered animations */}
              <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
                {/* Top center */}
                <div className="col-start-2 animate-fade-in opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards]">
                  <div className="text-center group cursor-pointer">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20">
                      {React.createElement(values[0].icon, { className: "h-8 w-8 text-primary" })}
                    </div>
                    <h4 className="font-semibold mb-2 text-lg">{values[0].title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {values[0].description}
                    </p>
                  </div>
                </div>
                
                {/* Middle left */}
                <div className="col-start-1 row-start-2 animate-[slide-in-right_0.6s_ease-out] opacity-0 [animation-delay:0.4s] [animation-fill-mode:forwards] [transform:translateX(-100%)]">
                  <div className="text-center group cursor-pointer">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20">
                      {React.createElement(values[1].icon, { className: "h-8 w-8 text-primary" })}
                    </div>
                    <h4 className="font-semibold mb-2 text-lg">{values[1].title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {values[1].description}
                    </p>
                  </div>
                </div>
                
                {/* Middle right */}
                <div className="col-start-3 row-start-2 animate-[slide-in-right_0.6s_ease-out] opacity-0 [animation-delay:0.6s] [animation-fill-mode:forwards] [transform:translateX(100%)] [animation-direction:reverse]">
                  <div className="text-center group cursor-pointer">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20">
                      {React.createElement(values[2].icon, { className: "h-8 w-8 text-primary" })}
                    </div>
                    <h4 className="font-semibold mb-2 text-lg">{values[2].title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {values[2].description}
                    </p>
                  </div>
                </div>
                
                {/* Bottom center */}
                <div className="col-start-2 row-start-3 animate-[fade-in_0.6s_ease-out,scale-in_0.4s_ease-out] opacity-0 [animation-delay:0.8s] [animation-fill-mode:forwards]">
                  <div className="text-center group cursor-pointer">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20">
                      {React.createElement(values[3].icon, { className: "h-8 w-8 text-primary" })}
                    </div>
                    <h4 className="font-semibold mb-2 text-lg">{values[3].title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {values[3].description}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Decorative connecting lines */}
              <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full opacity-10">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(var(--primary))" />
                      <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 50% 20% L 20% 50% L 50% 80% L 80% 50% Z"
                    stroke="url(#lineGradient)"
                    strokeWidth="1"
                    fill="none"
                    className="animate-[fade-in_1s_ease-out] opacity-0 [animation-delay:1s] [animation-fill-mode:forwards]"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">Why Work With Me?</h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              I don't just analyze business requirements or conduct user research in isolation. 
              I bring these disciplines together to ensure that every product decision is backed 
              by both business logic and real user needs, creating solutions that are not only 
              viable but truly valuable.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default About;