import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Rocket, TrendingUp, Users, Calendar } from "lucide-react";
const Experience = () => {
  const experiences = [{
    type: "Fortune 500",
    icon: Building2,
    companies: ["Global Retailer", "Financial Services", "Healthcare Corp"],
    description: "Large-scale digital transformations, enterprise-wide CX strategies, and complex stakeholder management",
    highlights: ["Multi-million dollar impact", "Cross-functional leadership", "Global rollouts"]
  }, {
    type: "Growth Stage",
    icon: TrendingUp,
    companies: ["FinTech Scale-up", "E-commerce Platform", "SaaS Company"],
    description: "Rapid scaling support, product-market fit optimization, and growth-focused process design",
    highlights: ["50-500 employee scaling", "Product optimization", "Market expansion"]
  }, {
    type: "Startups",
    icon: Rocket,
    companies: ["Early-stage SaaS", "Healthcare Startup", "B2B Platform"],
    description: "Foundation building, MVP development support, and lean methodology implementation",
    highlights: ["0-1 product development", "Lean processes", "Resource optimization"]
  }];
  const industries = ["Fintech", "Legal", "Compliance", "FMCG", "Telecommunications"];
  const timeline = [{
    year: "Education",
    milestone: "MSc Banking and Finance, King's College London • BSc Economics and Finance, Queen Mary University of London",
    subtitle: null
  }, {
    year: "2024-2025",
    milestone: "Business Consultant, CT Corporation",
    subtitle: "Led CX initiatives and partnered with product teams to drive innovation and customer‑centric solutions"
  }, {
    year: "2019-2023",
    milestone: "Business Consultant, Virtusa",
    subtitle: "Business analysis and transformation initiatives for clients from Medium to Fortune 500 companies"
  }, {
    year: "2018-2019",
    milestone: "Technology Intern, Asto Digital (Santander UK)",
    subtitle: "Supported building a banking app for SMEs that provided money management tools"
  }, {
    year: "2016-2017",
    milestone: "Private Equity Economic Analyst, Asia Capital PLC",
    subtitle: "Built econometric models and provided strategic insights to international investors"
  }, {
    year: "2016-Present",
    milestone: "Director, Lakpahana Handicrafts",
    subtitle: "Support Sri Lankan craftsmen through strategy, operations, and marketing in our family business"
  }, {
    year: "2012-2015",
    milestone: "Professional Foundation Years",
    subtitle: "Gained diverse expertise through internships in corporate law (DL & F de Saram Attorneys at Law), financial auditing (Ernst & Young), and equity markets (NDB Securities)"
  }];
  return <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
              My <span className="text-gradient">Experience</span>
            </h2>
            
          </div>

          {/* Company Types */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-white border-slate-200/60 shadow-sm hover:shadow-md h-full transition-all duration-300 hover:border-slate-300/80">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0 border border-slate-200/50">
                      <exp.icon className="h-6 w-6 text-slate-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">{exp.type}</h3>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {exp.companies.map((company, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs bg-slate-100 text-slate-700 border-slate-200/50 hover:bg-slate-200/60">
                            {company}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">{exp.description}</p>
                  <div className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-coral-500 rounded-full"></div>
                        <span className="text-sm text-slate-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Timeline & Industries */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Career Timeline */}
            <div className="bg-white rounded-xl p-8 border border-slate-200/60 shadow-sm">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-slate-800">
                <Calendar className="h-6 w-6 text-coral-500" />
                Career Journey
              </h3>
              <div className="space-y-6">
                {timeline.map((item, index) => <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 pt-1">
                      <div className="bg-coral-500 text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                        {item.year}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-800">{item.milestone}</h4>
                      {item.subtitle && <p className="text-sm text-slate-600 mt-1">{item.subtitle}</p>}
                    </div>
                  </div>)}
              </div>
            </div>

            {/* Industries */}
            <div className="bg-white rounded-xl p-8 border border-slate-200/60 shadow-sm">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-slate-800">
                <Users className="h-6 w-6 text-coral-500" />
                Industries Served
              </h3>
              <div className="space-y-4">
                <p className="text-slate-600 leading-relaxed">
                  Experience across diverse sectors, bringing cross-industry insights 
                  to every engagement.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {industries.map((industry, index) => <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-coral-500 rounded-full"></div>
                      <span className="text-sm text-slate-700">{industry}</span>
                    </div>)}
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          
        </div>
      </div>
    </section>;
};
export default Experience;