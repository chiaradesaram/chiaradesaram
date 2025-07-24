import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Users, Cog, Search, Layers, TrendingUp } from "lucide-react";

const Expertise = () => {
  const tools = ["Azure DevOps", "Jira", "Miro", "Pendo", "Dovetail", "UserZoom", "Microsoft Office Suite", "Trello", "Confluence", "Lovable", "Slack"];
  
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

  return (
    <section id="expertise" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              My <span className="text-gradient">Expertise</span>
            </h2>
          </div>

          <div className="space-y-6 mb-16 max-w-2xl mx-auto">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Card 
                  key={index} 
                  className="group sticky top-20 transform transition-all duration-300 ease-out overflow-hidden border border-slate-600/30 bg-slate-800/40 backdrop-blur-md hover:bg-slate-800/50 hover:border-slate-500/40 shadow-lg hover:shadow-xl"
                  style={{
                    zIndex: index + 1,
                    transform: `translateY(${index * -20}px)`
                  }}
                >
                  {/* Subtle top accent */}
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-slate-500/50" />
                  
                  <CardHeader className="relative p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-2.5 rounded-lg bg-slate-700/50 border border-slate-600/30">
                        <Icon className="h-5 w-5 text-slate-300" />
                      </div>
                      <CardTitle className="text-xl text-slate-100">{skill.title}</CardTitle>
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                      {skill.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="relative p-8 pt-0">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-slate-400">Key Methods</span>
                        <div className="h-px flex-1 bg-slate-600/30" />
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skill.tools.map((tool, toolIndex) => (
                          <Badge 
                            key={toolIndex} 
                            variant="secondary" 
                            className="text-xs px-3 py-1 bg-slate-700/60 text-slate-300 border border-slate-600/30 hover:bg-slate-700/80 hover:border-slate-500/40 transition-all duration-200"
                          >
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Rotating Tools List */}
          <div className="mt-16 text-center">
            <div className="overflow-hidden h-6">
              <div className="animate-pulse-slow">
                <div className="text-xs text-muted-foreground/60 whitespace-nowrap animate-marquee">
                  {tools.map((tool, index) => (
                    <span key={index} className="inline-flex items-center">
                      {tool}
                      {index < tools.length - 1 && <span className="mx-2 text-[0.5rem]">•</span>}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;