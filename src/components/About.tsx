import { Card, CardContent } from "@/components/ui/card";
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
                
                
                <Badge variant="secondary" className="px-3 py-1">Startups → Fortune 500</Badge>
                <Badge variant="secondary" className="px-3 py-1">Multiple Industries</Badge>
              </div>
            </div>

            <div className="space-y-8">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-4 animate-fade-in opacity-0 group"
                  style={{ 
                    animationDelay: `${index * 150}ms`,
                    animationFillMode: 'forwards'
                  }}
                >
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <value.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-foreground">{value.title}</span>
                    <span className="text-xs text-muted-foreground ml-2">— {value.description}</span>
                  </div>
                </div>
              ))}
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