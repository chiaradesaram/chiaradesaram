import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Users, Cog, Search, Layers, TrendingUp } from "lucide-react";
const Expertise = () => {
  const skills = [{
    icon: TrendingUp,
    title: "CX Strategy",
    description: "Designing customer experience strategies that drive business growth and satisfaction",
    level: 95,
    tools: ["Journey Mapping", "Voice of Customer", "CX Metrics", "Touchpoint Analysis"]
  }, {
    icon: BarChart3,
    title: "Business Analysis",
    description: "Translating business needs into actionable requirements and solutions",
    level: 92,
    tools: ["Requirements Gathering", "Process Modeling", "Gap Analysis", "Stakeholder Management"]
  }, {
    icon: Cog,
    title: "Process Optimisation",
    description: "Streamlining operations and workflows for maximum efficiency and impact",
    level: 88,
    tools: ["Process Mining", "Workflow Design", "Automation", "Performance Metrics"]
  }, {
    icon: Search,
    title: "User Research",
    description: "Uncovering user insights that inform product and business decisions",
    level: 90,
    tools: ["User Interviews", "Usability Testing", "Surveys", "Behavioral Analysis"]
  }, {
    icon: Layers,
    title: "Product Ops",
    description: "Supporting product teams with processes, tools, and insights for success",
    level: 85,
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skills.map((skill, index) => <Card key={index} className="card-hover group">
                
                <CardContent className="pt-0">
                  
                  
                </CardContent>
              </Card>)}
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
                  <BarChart3 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Data-driven decision making</span>
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