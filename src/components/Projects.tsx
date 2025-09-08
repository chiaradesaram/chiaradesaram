import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp, Users, Zap, Target, BarChart3, Search } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

// Import 3D project images
import projectLegalBooks3D from "@/assets/project-legal-books-3d.jpg";
import projectLaptopAnalytics3D from "@/assets/project-laptop-analytics-3d.jpg";
import projectEngineerHat3D from "@/assets/project-engineer-hat-3d.jpg";
import projectFiberCable3D from "@/assets/project-fiber-cable-3d.jpg";
import projectFinanceCoins3D from "@/assets/project-finance-coins-3d.jpg";
import projectMobilePortal3D from "@/assets/project-mobile-portal-3d.jpg";
import projectFintechCard3D from "@/assets/project-fintech-card-3d.jpg";
const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "CX Strategy", "Business Analysis", "Discovery", "Process Redesign", "Customer Experience", "Product Discovery", "User Research", "Product Ops"];
  const projects = [{
    title: "CX Transformation for a Leading US Compliance & Legal Services Firm",
    categories: ["Product Discovery", "User Research", "CX Strategy", "Business Analysis", "Product Ops"],
    description: "Partnered on a multi‑year transformation program within CX and Product Ops, taking customer experiences from early discovery through design, build, and continuous experimentation. Delivered new journeys, processes, and tools that improved experiences for thousands of customers.",
    tools: ["Journey Mapping", "Service Blueprinting", "CX Analysis", "Experimentation", "KPI/Metrics Design", "User Research", "Workshops", "Product Analytics", "Jobs to Be Done"],
    icon: TrendingUp,
    image: projectLegalBooks3D
  }, {
    title: "Digital Customer Self‑Service Portal for a Leading UK Telecommunications Company",
    categories: ["Business Analysis"],
    description: "Served as the business analyst from discovery through build of a new self‑service portal—defining MVP scope, shaping critical user journeys, and aligning cross‑functional teams to deliver at scale.",
    tools: ["Journey Mapping", "Stakeholder Interviews", "Requirements Elicitation", "User Story Writing", "Prioritization", "Backlog Grooming", "Agile Ceremonies"],
    icon: BarChart3,
    image: projectLaptopAnalytics3D
  }, {
    title: "Field Engineer Process Analysis for a UK Telecommunications Company",
    categories: ["Discovery"],
    description: "Discovery initiative to uncover root causes of pain points and inefficiencies in field engineer workflows, proposing process improvements and new technology opportunities.",
    tools: ["Journey Mapping", "User Research", "Process Mapping", "Process Redesign"],
    icon: Search,
    image: projectEngineerHat3D
  }, {
    title: "Fibre Build Process Efficiency Program for a UK Telecommunications Company",
    categories: ["Discovery"],
    description: "Conducted in‑depth analysis of fibre line build processes to pinpoint inefficiencies and recommend process changes and technology enhancements to boost delivery speed and effectiveness.",
    tools: ["Journey Mapping", "User Research", "Process Mapping", "Process Redesign"],
    icon: Search,
    image: projectFiberCable3D
  }, {
    title: "Finance Workflow Redesign for a Fortune 500 FMCG Company",
    categories: ["Business Analysis", "Process Redesign"],
    description: "Facilitated workshops and analysis sessions to map current finance processes, identify bottlenecks, and implement technology‑enabled improvements for greater efficiency and alignment.",
    tools: ["Process Mapping", "Stakeholder Interviews", "Workshops", "Opportunity Analysis"],
    icon: Zap,
    image: projectFinanceCoins3D
  }, {
    title: "Digital Customer Self‑Service Portal for a Leading Sri Lankan Telecommunications Company",
    categories: ["Business Analysis"],
    description: "Was in a team of business analysts defining MVP scope, refining requirements, and ensuring cross‑team alignment to create a customer portal.",
    tools: ["Requirements Elicitation", "User Story Writing", "Prioritization", "Backlog Refinement", "Agile Ceremonies"],
    icon: BarChart3,
    image: projectMobilePortal3D
  }, {
    title: "Fintech App Development for a Santander‑Backed Startup",
    categories: ["Business Analysis", "Customer Experience"],
    description: "Supported the creation of a money‑management app for SMEs, leading credit risk testing, defining operational procedures, gathering CRM and notification requirements, and testing prototypes for invoice financing features.",
    tools: ["Requirements Elicitation", "Credit Risk Testing", "Pricing Analysis", "Market Research", "Process Design"],
    icon: Users,
    image: projectFintechCard3D
  }];
  const filteredProjects = selectedCategory === "All" ? projects : projects.filter(project => project.categories.includes(selectedCategory));
  return <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real projects, real impact. Here's how I've helped teams transform 
              insights into measurable outcomes.
            </p>
          </div>

          {/* Category Filter - More Subtle */}
          

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => {
            const Icon = project.icon;
            const ProjectCard = () => {
              const { ref, isVisible } = useScrollReveal({ 
                threshold: 0.2,
                rootMargin: '-50px'
              });
              
              return (
                <Card 
                  ref={ref}
                  className={`group h-full transition-all duration-700 border border-slate-200/60 bg-white hover:bg-gray-50 hover:border-slate-300/60 shadow-sm hover:shadow-md transform ${
                    isVisible 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-8 opacity-0'
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`
                  }}
                 >
                   <CardHeader className="pb-4">
                     {/* Project Image */}
                     <div className="mb-4 rounded-lg overflow-hidden">
                       <img 
                         src={project.image} 
                         alt={project.title}
                         className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                       />
                     </div>
                     
                     <div className="flex items-center gap-3 mb-4">
                       <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center">
                         <Icon className="h-5 w-5 text-slate-600" />
                       </div>
                       {/* Small, subtle category badges */}
                       <div className="flex flex-wrap gap-1">
                         {project.categories.slice(0, 2).map((category, catIndex) => <Badge key={catIndex} variant="secondary" className="text-xs px-2 py-0.5 bg-slate-100 text-slate-600 border border-slate-200">
                             {category}
                           </Badge>)}
                         {project.categories.length > 2 && <Badge variant="secondary" className="text-xs px-2 py-0.5 bg-slate-100 text-slate-600 border border-slate-200">
                             +{project.categories.length - 2}
                           </Badge>}
                       </div>
                     </div>
                     
                     {/* Emphasized Project Title */}
                     <CardTitle className="text-xl leading-tight text-slate-800 font-bold mb-3">
                       {project.title}
                     </CardTitle>
                   </CardHeader>
                  
                  <CardContent className="pt-0 flex flex-col justify-between flex-1">
                    <div className="space-y-4 mb-6">
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {project.description}
                      </p>
                      
                      {/* Tools with Coral Bullet Points */}
                      <div className="space-y-3">
                        <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                          Tools & Methods
                        </span>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                          {project.tools.map((tool, toolIndex) => <div key={toolIndex} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-rose-400 flex-shrink-0"></div>
                              <span className="text-xs text-slate-600">{tool}</span>
                            </div>)}
                        </div>
                      </div>
                    </div>

                    
                  </CardContent>
                </Card>
              );
            };
            
            return <ProjectCard key={index} />;
          })}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-6">
              Want to learn more about my insights, methodologies, and industry learnings?
            </p>
            <Button 
              variant="default" 
              size="lg" 
              onClick={() => window.location.href = '/blog'}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-purple-700 transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Read My Blog
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Projects;