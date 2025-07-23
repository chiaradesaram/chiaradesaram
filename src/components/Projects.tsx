import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp, Users, Zap, Target, BarChart3, Search } from "lucide-react";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "CX Strategy", "Business Analysis", "Discovery", "Process Redesign", "Customer Experience", "Product Discovery", "User Research", "Product Ops"];
  
  const projects = [{
    title: "CX Transformation for a Leading US Compliance & Legal Services Firm",
    categories: ["Product Discovery", "User Research", "CX Strategy", "Business Analysis", "Product Ops"],
    description: "Partnered on a multi‑year transformation program within CX and Product Ops, taking customer experiences from early discovery through design, build, and continuous experimentation. Delivered new journeys, processes, and tools that improved experiences for thousands of customers.",
    tools: ["Journey Mapping", "Service Blueprinting", "CX Analysis", "Experimentation", "KPI/Metrics Design", "User Research", "Workshops", "Product Analytics", "Jobs to Be Done"],
    icon: TrendingUp
  }, {
    title: "Digital Customer Self‑Service Portal for a Leading UK Telecommunications Company",
    categories: ["Business Analysis"],
    description: "Served as the business analyst from discovery through build of a new self‑service portal—defining MVP scope, shaping critical user journeys, and aligning cross‑functional teams to deliver at scale.",
    tools: ["Journey Mapping", "Stakeholder Interviews", "Requirements Elicitation", "User Story Writing", "Prioritization", "Backlog Grooming", "Agile Ceremonies"],
    icon: BarChart3
  }, {
    title: "Field Engineer Process Analysis for a UK Telecommunications Company",
    categories: ["Discovery"],
    description: "Led a discovery initiative to uncover root causes of pain points and inefficiencies in field engineer workflows, proposing process improvements and new technology opportunities.",
    tools: ["Journey Mapping", "User Research", "Process Mapping", "Process Redesign"],
    icon: Search
  }, {
    title: "Fibre Build Process Efficiency Program for a UK Telecommunications Company",
    categories: ["Discovery"],
    description: "Conducted in‑depth analysis of fibre line build processes to pinpoint inefficiencies and recommend process changes and technology enhancements to boost delivery speed and effectiveness.",
    tools: ["Journey Mapping", "User Research", "Process Mapping", "Process Redesign"],
    icon: Search
  }, {
    title: "Finance Workflow Redesign for a Fortune 500 FMCG Company",
    categories: ["Business Analysis", "Process Redesign"],
    description: "Facilitated workshops and analysis sessions to map current finance processes, identify bottlenecks, and implement technology‑enabled improvements for greater efficiency and alignment.",
    tools: ["Process Mapping", "Stakeholder Interviews", "Workshops", "Opportunity Analysis"],
    icon: Zap
  }, {
    title: "Digital Customer Self‑Service Portal for a Leading Sri Lankan Telecommunications Company",
    categories: ["Business Analysis"],
    description: "Was in a team of business analysts defining MVP scope, refining requirements, and ensuring cross‑team alignment to create a customer portal.",
    tools: ["Requirements Elicitation", "User Story Writing", "Prioritization", "Backlog Refinement", "Agile Ceremonies"],
    icon: BarChart3
  }, {
    title: "Fintech App Development for a Santander‑Backed Startup",
    categories: ["Business Analysis", "Customer Experience"],
    description: "Supported the creation of a money‑management app for SMEs, leading credit risk testing, defining operational procedures, gathering CRM and notification requirements, and testing prototypes for invoice financing features.",
    tools: ["Requirements Elicitation", "Credit Risk Testing", "Pricing Analysis", "Market Research", "Process Design"],
    icon: Users
  }];

  const filteredProjects = selectedCategory === "All" ? projects : projects.filter(project => project.categories.includes(selectedCategory));

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real projects, real impact. Here's how I've helped teams transform 
              insights into measurable outcomes.
            </p>
          </div>

          {/* Category Filter - More Subtle */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`text-sm transition-all duration-200 ${
                  selectedCategory === category 
                    ? "bg-slate-700 text-slate-100 border-slate-600" 
                    : "bg-slate-800/30 text-slate-300 border-slate-600/30 hover:bg-slate-700/50 hover:border-slate-500/40"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card 
                  key={index} 
                  className="group h-full transition-all duration-300 border border-slate-600/30 bg-slate-800/40 backdrop-blur-md hover:bg-slate-800/50 hover:border-slate-500/40 shadow-lg hover:shadow-xl"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-slate-700/50 border border-slate-600/30 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-slate-300" />
                      </div>
                      {/* Small, subtle category badges */}
                      <div className="flex flex-wrap gap-1">
                        {project.categories.slice(0, 2).map((category, catIndex) => (
                          <Badge 
                            key={catIndex} 
                            variant="secondary" 
                            className="text-xs px-2 py-0.5 bg-slate-700/40 text-slate-400 border border-slate-600/20"
                          >
                            {category}
                          </Badge>
                        ))}
                        {project.categories.length > 2 && (
                          <Badge 
                            variant="secondary" 
                            className="text-xs px-2 py-0.5 bg-slate-700/40 text-slate-400 border border-slate-600/20"
                          >
                            +{project.categories.length - 2}
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    {/* Emphasized Project Title */}
                    <CardTitle className="text-xl leading-tight text-slate-100 font-bold mb-3">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pt-0 flex flex-col justify-between flex-1">
                    <div className="space-y-4 mb-6">
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {project.description}
                      </p>
                      
                      {/* Tools with Coral Bullet Points */}
                      <div className="space-y-3">
                        <span className="text-xs font-medium text-slate-400 uppercase tracking-wide">
                          Tools & Methods
                        </span>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                          {project.tools.map((tool, toolIndex) => (
                            <div key={toolIndex} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-rose-400/80 flex-shrink-0"></div>
                              <span className="text-xs text-slate-300">{tool}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="w-full bg-slate-700/30 text-slate-300 border border-slate-600/30 hover:bg-slate-700/50 hover:text-slate-200 transition-all duration-200"
                    >
                      Learn More <ExternalLink className="ml-2 h-3 w-3" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Interested in seeing more details about these projects?
            </p>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-slate-800/30 text-slate-300 border-slate-600/30 hover:bg-slate-700/50 hover:border-slate-500/40"
            >
              View Full Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;