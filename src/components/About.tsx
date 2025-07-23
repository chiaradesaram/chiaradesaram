import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Zap, Target, Users } from "lucide-react";
const About = () => {
  const stats = [{
    number: "8+",
    label: "Years",
    subtitle: "Experience"
  }, {
    number: "7",
    label: "Client",
    subtitle: "Engagements"
  }, {
    number: "Startups to Fortune 500",
    label: "",
    subtitle: "Scale Range"
  }];
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
  }, {
    icon: Zap,
    title: "Growth-Minded",
    description: "Always learning and adapting to new challenges"
  }];
  return <section id="about" className="py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-glow-pulse"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              About <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>

          {/* Glassmorphism Stats Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="glass-card group relative rounded-2xl p-8 text-center transition-all duration-500 hover:scale-105 hover-glow animate-fade-in opacity-0"
                style={{
                  animationDelay: `${index * 200}ms`,
                  animationFillMode: 'both'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-4xl font-bold text-gradient mb-3 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground">
                    {stat.label && <div className="font-medium text-foreground/80 mb-1">{stat.label}</div>}
                    {stat.subtitle && <div className="text-sm opacity-70">{stat.subtitle}</div>}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Approach Section */}
            <div className="glass-card rounded-2xl p-8 space-y-8 hover-glow transition-all duration-300">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold flex items-center gap-3 animate-fade-in">
                  <div className="w-2 h-8 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
                  My Approach
                </h3>
                <div className="space-y-6 text-muted-foreground leading-relaxed animate-fade-in" style={{animationDelay: '200ms', animationFillMode: 'both'}}>
                  <p className="text-lg">
                    I bring a unique perspective to solving customer problems, shaped by a career spanning business, economics, and technology.
                  </p>
                  <p>
                    My background in economics gave me an analytical mindset that peaked my love for data and insights, and constant experimentation. Running my family business taught me how decisions affect real operations, people, and outcomes.
                  </p>
                  <p>
                    When I moved into tech, I immersed myself in a wide variety of industries and technology, feeding a deep curiosity and a habit of constant learning. Over eight years, from early‑stage ventures to global enterprises, I've seen that the best solutions come from understanding customer problems at their core and testing until we get them right.
                  </p>
                  <p>
                    I blend business analysis, research, and process improvement to help teams create products that make a real impact.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 animate-fade-in" style={{animationDelay: '400ms', animationFillMode: 'both'}}>
                  <Badge variant="secondary" className="px-4 py-2 glass bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
                    Multiple Industries
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2 glass bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/20 transition-colors">
                    Startups → Fortune 500
                  </Badge>
                </div>
              </div>
            </div>

            {/* Values Section */}
            <div className="glass-card rounded-2xl p-8 space-y-6 hover-glow transition-all duration-300">
              <h3 className="text-2xl font-semibold flex items-center gap-3 animate-fade-in" style={{animationDelay: '300ms', animationFillMode: 'both'}}>
                <div className="w-1.5 h-6 bg-gradient-to-b from-secondary to-primary rounded-full"></div>
                Core Values
              </h3>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <div 
                    key={index} 
                    className="group flex items-start gap-4 py-3 px-4 rounded-xl bg-muted/20 hover:bg-muted/30 transition-all duration-300 animate-fade-in opacity-0"
                    style={{
                      animationDelay: `${(index * 100) + 500}ms`,
                      animationFillMode: 'forwards'
                    }}
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                    <div>
                      <span className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                        {value.title}
                      </span>
                      <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>;
};
export default About;