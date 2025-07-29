import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users } from "lucide-react";
const Experience = () => {
  const industries = ["Fintech", "Legal", "Compliance", "FMCG", "Telecommunications"];
  
  const education = [
    {
      degree: "MSc Banking and Finance",
      institution: "King's College London",
      award: "Won the award for Best Dissertation"
    },
    {
      degree: "BSc Economics and Finance", 
      institution: "Queen Mary University of London",
      award: null
    }
  ];
  
  const timeline = [{
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
  return <section id="experience" className="py-20" style={{background: 'linear-gradient(135deg, #EEEEEE 0%, #F2F2F2 50%, #F0F0F0 100%)'}}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
              My <span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">Experience</span>
            </h2>
            
          </div>

          {/* Education Section */}
          <div className="mb-16">
            <Card className="group border-0 bg-white/40 backdrop-blur-sm hover:bg-white/50 transition-all duration-500 shadow-sm hover:shadow-md">
              <CardHeader className="p-10">
                <CardTitle className="text-xl text-slate-700 mb-8 font-medium">Education</CardTitle>
                <div className="space-y-6">
                  {education.map((item, index) => (
                    <div key={index} className="group/item hover:translate-x-1 transition-transform duration-300">
                      <div className="flex items-start gap-4">
                        <div className="w-1 h-8 bg-gradient-to-b from-rose-300/60 to-transparent rounded-full mt-1 flex-shrink-0"></div>
                        <div className="flex-1 space-y-1">
                          <h4 className="font-medium text-slate-800 leading-relaxed">
                            {item.degree}
                          </h4>
                          <p className="text-sm text-slate-600">
                            {item.institution}
                          </p>
                          {item.award && (
                            <p className="text-xs text-rose-600 font-medium bg-rose-50 px-2 py-1 rounded-md inline-block mt-2">{item.award}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardHeader>
            </Card>
          </div>

          {/* Timeline & Industries */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Career Timeline */}
            <Card className="group border-0 bg-white/40 backdrop-blur-sm hover:bg-white/50 transition-all duration-500 shadow-sm hover:shadow-md">
              <CardHeader className="p-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-8 rounded-full bg-rose-100/80 flex items-center justify-center">
                    <Calendar className="h-4 w-4 text-rose-600" />
                  </div>
                  <CardTitle className="text-xl text-slate-700 font-medium">Career Journey</CardTitle>
                </div>
                <div className="space-y-8">
                  {timeline.map((item, index) => (
                    <div key={index} className="group/item relative pl-6 hover:translate-x-1 transition-transform duration-300">
                      {/* Timeline line */}
                      {index < timeline.length - 1 && (
                        <div className="absolute left-2 top-8 w-px h-8 bg-gradient-to-b from-rose-200 to-transparent"></div>
                      )}
                      
                      <div className="absolute left-0 top-2">
                        <div className="w-4 h-4 rounded-full bg-white border-2 border-rose-300 shadow-sm group-hover/item:border-rose-400 transition-colors duration-300"></div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-xs font-medium text-rose-600 bg-rose-50 px-2 py-1 rounded-md inline-block">
                          {item.year}
                        </div>
                        <h4 className="font-medium text-slate-800 leading-relaxed">{item.milestone}</h4>
                        {item.subtitle && (
                          <p className="text-sm text-slate-600 leading-relaxed">{item.subtitle}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardHeader>
            </Card>

            {/* Industries */}
            <Card className="group border-0 bg-white/40 backdrop-blur-sm hover:bg-white/50 transition-all duration-500 shadow-sm hover:shadow-md">
              <CardHeader className="p-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-8 rounded-full bg-rose-100/80 flex items-center justify-center">
                    <Users className="h-4 w-4 text-rose-600" />
                  </div>
                  <CardTitle className="text-xl text-slate-700 font-medium">Industries Served</CardTitle>
                </div>
                <div className="space-y-6">
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Cross-industry expertise bringing diverse insights to every engagement.
                  </p>
                  <div className="grid grid-cols-1 gap-4">
                    {industries.map((industry, index) => (
                      <div key={index} className="group/item flex items-center gap-3 p-3 rounded-lg hover:bg-rose-50/50 transition-colors duration-300">
                        <div className="w-2 h-2 bg-rose-400/60 rounded-full group-hover/item:bg-rose-500 transition-colors duration-300"></div>
                        <span className="text-sm text-slate-700 font-medium">{industry}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>

          {/* Call to Action */}
          
        </div>
      </div>
    </section>
};
export default Experience;