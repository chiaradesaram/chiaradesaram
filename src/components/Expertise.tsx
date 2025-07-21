import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Users, Cog, Search, Layers, TrendingUp } from "lucide-react";
const Expertise = () => {
  const skills = [{
    icon: TrendingUp,
    title: "CX Strategy",
    description: "Designing customer experience strategies that drive business growth and satisfaction",
    tools: ["Customer Journey Mapping", "Service Blueprinting", "Experience Redesign", "Personas", "Cross‑functional Alignment", "KPI & Metrics", "Journey Prioritization Frameworks"]
  }, {
    icon: BarChart3,
    title: "Business Analysis",
    description: "Translating business needs into actionable requirements and solutions",
    tools: ["Stakeholder Interviews", "Process Mapping", "User Story Writing", "Prioritization", "Product Discovery", "Roadmapping", "OKRs & KPI Setting", "Competitor & Market Analysis"]
  }, {
    icon: Search,
    title: "User Research",
    description: "Uncovering user insights that inform product and business decisions",
    tools: ["Experiments", "User Interviews", "Beta and POC Testing", "Usability Testing", "Surveys", "Jobs‑to‑Be‑Done", "Card Sorting & Tree Testing", "A/B Testing", "Usage and Product Analytics"]
  }, {
    icon: Layers,
    title: "Product Ops",
    description: "Supporting product teams with processes, tools, and insights for success",
    tools: ["Product Analytics", "Team Coordination", "Tool Integration", "Process Design"]
  }];
  return <section id="expertise" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="text-gradient">Expertise</span>
            </h2>
            
          </div>

          <div className="space-y-6 mb-16 max-w-2xl mx-auto">
            {skills.map((skill, index) => {
            const Icon = skill.icon;
            return <Card key={index} className="group sticky top-20 transform transition-all duration-500 ease-out overflow-hidden border-0 bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-sm shadow-lg shadow-primary/5 hover:shadow-xl hover:shadow-primary/10" style={{
              zIndex: index + 1,
              transform: `translateY(${index * -20}px)`
            }}>
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Decorative border accent */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <CardHeader className="relative p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 group-hover:border-primary/30 transition-colors duration-300">
                        <Icon className="h-5 w-5 text-primary group-hover:text-accent transition-colors duration-300" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{skill.title}</CardTitle>
                    </div>
                    <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">{skill.description}</p>
                  </CardHeader>
                  
                  <CardContent className="relative p-8 pt-0">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-primary">Key Methods</span>
                        <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
                      </div>
                      <div className="flex flex-wrap gap-2.5">
                        {skill.tools.map((tool, toolIndex) => <Badge key={toolIndex} variant="secondary" className="text-xs px-3 py-1 bg-gradient-to-r from-secondary/80 to-secondary border border-primary/10 hover:border-primary/20 hover:from-primary/5 hover:to-accent/5 hover:shadow-sm transition-all duration-300 cursor-default">
                            {tool}
                          </Badge>)}
                      </div>
                    </div>
                  </CardContent>
                </Card>;
          })}
          </div>

          
        </div>
      </div>
    </section>;
};
export default Expertise;