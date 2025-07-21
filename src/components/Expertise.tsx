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
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive skill set honed across startups to Fortune 500 companies, 
              helping teams build products that matter.
            </p>
          </div>

          <div className="space-y-6 mb-16 max-w-2xl mx-auto">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Card 
                  key={index} 
                  className="card-hover group sticky top-20 transform transition-all duration-500 ease-out"
                  style={{
                    zIndex: index + 1,
                    transform: `translateY(${index * -20}px)`,
                  }}
                >
                  <CardHeader>
                    <div className="mb-2">
                      <CardTitle className="text-xl">{skill.title}</CardTitle>
                    </div>
                    <p className="text-muted-foreground">{skill.description}</p>
                  </CardHeader>
                   <CardContent>
                     <div className="space-y-2">
                       <span className="text-sm font-medium">Key Methods</span>
                       <div className="flex flex-wrap gap-2">
                         {skill.tools.map((tool, toolIndex) => (
                           <Badge key={toolIndex} variant="secondary" className="text-xs">
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

          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">The Swiss Army Knife Approach</h3>
                <p className="text-muted-foreground leading-relaxed">
                  What makes me unique is my ability to bridge different disciplines. I don't just 
                  specialize in one area—I bring together business analysis, customer experience, 
                  user research, and product operations to create holistic solutions.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Users className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Cross-functional collaboration</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <TrendingUp className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Measurable business outcomes</span>
                </div>
                <div className="flex items-center gap-4">
                  <Search className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Customer-centric solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Expertise;