import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp, Users, Zap, Target, BarChart3, Search } from "lucide-react";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const categories = ["All", "CX Strategy", "Business Analysis", "User Research", "Process Optimization"];
  
  const projects = [
    {
      title: "Digital Transformation for Fortune 500 Retailer",
      category: "CX Strategy",
      description: "Led end-to-end customer journey redesign resulting in 40% improvement in customer satisfaction and 25% increase in conversion rates.",
      impact: "40% ↑ Customer Satisfaction",
      duration: "6 months",
      tools: ["Journey Mapping", "CX Analytics", "Stakeholder Workshops"],
      icon: TrendingUp,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Product Requirements Optimization",
      category: "Business Analysis",
      description: "Streamlined product development process for fintech startup, reducing time-to-market by 50% while improving feature adoption.",
      impact: "50% ↓ Time-to-Market",
      duration: "4 months",
      tools: ["Requirements Analysis", "Process Modeling", "Agile Methodologies"],
      icon: BarChart3,
      color: "bg-green-50 text-green-600"
    },
    {
      title: "User Research Framework Implementation",
      category: "User Research",
      description: "Established comprehensive user research practice for healthcare platform, informing product decisions with actionable insights.",
      impact: "200% ↑ User Engagement",
      duration: "8 months",
      tools: ["User Interviews", "Usability Testing", "Research Repository"],
      icon: Search,
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "Operational Excellence Initiative",
      category: "Process Optimization",
      description: "Redesigned core business processes for manufacturing company, achieving 35% efficiency gains and cost reduction.",
      impact: "35% ↑ Efficiency",
      duration: "5 months",
      tools: ["Process Mining", "Lean Methodology", "Change Management"],
      icon: Zap,
      color: "bg-orange-50 text-orange-600"
    },
    {
      title: "Cross-Platform Analytics Integration",
      category: "Business Analysis",
      description: "Unified data analytics across multiple touchpoints for e-commerce platform, enabling data-driven decision making.",
      impact: "Unified Analytics View",
      duration: "3 months",
      tools: ["Data Analysis", "System Integration", "Dashboard Design"],
      icon: BarChart3,
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      title: "Customer Experience Measurement Program",
      category: "CX Strategy",
      description: "Developed comprehensive CX metrics and monitoring system for SaaS company, tracking customer satisfaction in real-time.",
      impact: "Real-time CX Insights",
      duration: "4 months",
      tools: ["CX Metrics", "Survey Design", "Reporting Dashboards"],
      icon: Users,
      color: "bg-teal-50 text-teal-600"
    }
  ];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 section-gradient">
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
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-200"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="card-hover group h-full">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${project.color}`}>
                    <project.icon className="h-6 w-6" />
                  </div>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {project.duration}
                    </span>
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
                    
                    <div className="bg-primary/5 rounded-lg p-3">
                      <div className="flex items-center gap-2">
                        <Target className="h-4 w-4 text-primary" />
                        <span className="font-medium text-sm">{project.impact}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                        Tools & Methods
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {project.tools.map((tool, toolIndex) => (
                          <Badge key={toolIndex} variant="outline" className="text-xs">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                  >
                    Learn More <ExternalLink className="ml-2 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            ))}
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
    </section>
  );
};

export default Projects;