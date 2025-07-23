import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp, Users, Zap, Target, BarChart3, Search } from "lucide-react";
const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "CX Strategy", "Business Analysis", "Discovery", "Process Redesign", "Customer Experience"];
  const projects = [{
    title: "CX Transformation for a Leading US Compliance & Legal Services Firm",
    category: "CX Strategy",
    description: "Partnered on a multi‑year transformation program within CX and Product Ops, taking customer experiences from early discovery through design, build, and continuous experimentation. Delivered new journeys, processes, and tools that improved experiences for thousands of customers.",
    tools: ["Journey Mapping", "Service Blueprinting", "CX Analysis", "Experimentation", "KPI/Metrics Design", "User Research", "Workshops", "Product Analytics", "Jobs to Be Done"],
    icon: TrendingUp,
    color: "bg-blue-50 text-blue-600"
  }, {
    title: "Digital Customer Self‑Service Portal for a Leading UK Telecommunications Company",
    category: "Business Analysis",
    description: "Served as the business analyst from discovery through build of a new self‑service portal—defining MVP scope, shaping critical user journeys, and aligning cross‑functional teams to deliver at scale.",
    tools: ["Journey Mapping", "Stakeholder Interviews", "Requirements Elicitation", "User Story Writing", "Prioritization", "Backlog Grooming", "Agile Ceremonies"],
    icon: BarChart3,
    color: "bg-green-50 text-green-600"
  }, {
    title: "Field Engineer Process Analysis for a UK Telecommunications Company",
    category: "Discovery",
    description: "Led a discovery initiative to uncover root causes of pain points and inefficiencies in field engineer workflows, proposing process improvements and new technology opportunities.",
    tools: ["Journey Mapping", "User Research", "Process Mapping", "Process Redesign"],
    icon: Search,
    color: "bg-purple-50 text-purple-600"
  }, {
    title: "Fibre Build Process Efficiency Program for a UK Telecommunications Company",
    category: "Discovery",
    description: "Conducted in‑depth analysis of fibre line build processes to pinpoint inefficiencies and recommend process changes and technology enhancements to boost delivery speed and effectiveness.",
    tools: ["Journey Mapping", "User Research", "Process Mapping", "Process Redesign"],
    icon: Search,
    color: "bg-orange-50 text-orange-600"
  }, {
    title: "Finance Workflow Redesign for a Fortune 500 FMCG Company",
    category: "Process Redesign",
    description: "Facilitated workshops and analysis sessions to map current finance processes, identify bottlenecks, and implement technology‑enabled improvements for greater efficiency and alignment.",
    tools: ["Process Mapping", "Stakeholder Interviews", "Workshops", "Opportunity Analysis"],
    icon: Zap,
    color: "bg-indigo-50 text-indigo-600"
  }, {
    title: "Digital Customer Self‑Service Portal for a Leading Sri Lankan Telecommunications Company",
    category: "Business Analysis",
    description: "Was in a team of business analysts defining MVP scope, refining requirements, and ensuring cross‑team alignment to create a customer portal.",
    tools: ["Requirements Elicitation", "User Story Writing", "Prioritization", "Backlog Refinement", "Agile Ceremonies"],
    icon: BarChart3,
    color: "bg-teal-50 text-teal-600"
  }, {
    title: "Fintech App Development for a Santander‑Backed Startup",
    category: "Customer Experience",
    description: "Supported the creation of a money‑management app for SMEs, leading credit risk testing, defining operational procedures, gathering CRM and notification requirements, and testing prototypes for invoice financing features.",
    tools: ["Requirements Elicitation", "Credit Risk Testing", "Pricing Analysis", "Market Research", "Process Design"],
    icon: Users,
    color: "bg-pink-50 text-pink-600"
  }];
  const filteredProjects = selectedCategory === "All" ? projects : projects.filter(project => project.category === selectedCategory);
  return <section id="projects" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real projects, real impact. Here's how I've helped teams transform 
              insights into measurable outcomes.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="text-sm"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => <Card key={index} className="card-hover group h-full">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${project.color}`}>
                    <project.icon className="h-6 w-6" />
                  </div>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 flex flex-col justify-between flex-1">
                  <div className="space-y-4 mb-6">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                    

                    <div className="space-y-2">
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                        Tools & Methods
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {project.tools.map((tool, toolIndex) => <Badge key={toolIndex} variant="outline" className="text-xs">
                            {tool}
                          </Badge>)}
                      </div>
                    </div>
                  </div>

                  <Button variant="ghost" size="sm" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                    Learn More <ExternalLink className="ml-2 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>)}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Interested in seeing more details about these projects?
            </p>
            <Button variant="outline" size="lg">
              View Full Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Projects;