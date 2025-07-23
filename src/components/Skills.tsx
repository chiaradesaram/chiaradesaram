import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Users, Cog, Search, Layers, TrendingUp, Zap, Target } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      icon: BarChart3,
      title: "Business Analysis",
      description: "Stakeholder Interviews, Process Mapping, Requirements Gathering"
    },
    {
      icon: Search,
      title: "User Research", 
      description: "User Interviews, Usability Testing, Analytics, A/B Testing"
    },
    {
      icon: Cog,
      title: "Process Optimization",
      description: "Workflow Design, Efficiency Improvements, Automation"
    },
    {
      icon: Layers,
      title: "Product Management",
      description: "Roadmapping, Prioritization, Feature Planning, Stakeholder Management"
    },
    {
      icon: Target,
      title: "Product Operations",
      description: "Team Coordination, Tool Integration, Process Design, Analytics"
    },
    {
      icon: TrendingUp,
      title: "Customer Experience",
      description: "Journey Mapping, Service Design, Experience Strategy"
    },
    {
      icon: Zap,
      title: "Business Transformation",
      description: "Change Management, Digital Transformation, Strategic Planning"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-background/95 to-secondary/10">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building products for humans with a lean mindset and deep understanding of user needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Card 
                  key={index} 
                  className="group h-full bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                >
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 group-hover:border-primary/30 transition-colors duration-300">
                        <Icon className="h-5 w-5 text-primary group-hover:text-accent transition-colors duration-300" />
                      </div>
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                        {skill.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 text-sm leading-relaxed">
                      {skill.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;