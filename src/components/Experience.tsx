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
    year: "2023-2025",
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
  return <section id="experience" className="py-16" style={{background: 'linear-gradient(135deg, #EEEEEE 0%, #F2F2F2 50%, #F0F0F0 100%)'}}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800 animate-scale-in-delay-2 opacity-0">
              My <span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">Experience</span>
            </h2>
          </div>

          {/* Education Section - Compact */}
          <div className="mb-10">
            <div className="bg-white/30 backdrop-blur-sm rounded-lg p-6 border-0 shadow-sm animate-slide-up animate-stagger-4">
              <h3 className="text-lg font-medium text-slate-700 mb-4 flex items-center gap-2 animate-fade-in animate-stagger-3">
                <div className="w-6 h-6 rounded-full bg-rose-100/80 flex items-center justify-center">
                  <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                </div>
                Education
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {education.map((item, index) => (
                  <div 
                    key={index} 
                    className={`flex items-start gap-3 animate-fade-in ${index === 0 ? 'animate-stagger-1' : 'animate-stagger-2'}`}
                  >
                    <div className="w-1 h-6 bg-gradient-to-b from-rose-300/60 to-transparent rounded-full mt-1 flex-shrink-0"></div>
                    <div className="flex-1">
                      <h4 className="font-medium text-slate-800 text-sm leading-tight">
                        {item.degree}
                      </h4>
                      <p className="text-xs text-slate-600 mb-1">
                        {item.institution}
                      </p>
                      {item.award && (
                        <p className="text-xs text-rose-600 font-medium bg-rose-50 px-2 py-0.5 rounded-md inline-block">{item.award}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Career Timeline with Industries */}
          <Card className="group border-0 bg-white/40 backdrop-blur-sm hover:bg-white/50 transition-all duration-500 shadow-sm hover:shadow-md animate-scale-in animate-stagger-4">
            <CardHeader className="p-8">
              <div className="flex items-center gap-3 mb-6 animate-fade-in animate-stagger-3">
                <div className="w-8 h-8 rounded-full bg-rose-100/80 flex items-center justify-center">
                  <Calendar className="h-4 w-4 text-rose-600" />
                </div>
                <CardTitle className="text-xl text-slate-700 font-medium">Career Journey</CardTitle>
              </div>
              
              <div className="space-y-4">
                {timeline.map((item, index) => (
                  <div 
                    key={index} 
                    className={`group/item p-4 rounded-lg bg-white/20 hover:bg-white/30 transition-all duration-300 hover:translate-x-1 animate-slide-up animate-float ${
                      index < 3 ? `animate-stagger-${index + 1}` : 'animate-stagger-5'
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="text-xs font-medium text-rose-600 bg-rose-50 px-2 py-1 rounded-full inline-block">
                        {item.year}
                      </div>
                      <h4 className="font-medium text-slate-800 leading-snug text-sm">{item.milestone}</h4>
                      {item.subtitle && (
                        <>
                          {index === timeline.length - 1 ? (
                            <div className="text-xs text-slate-600 leading-relaxed">
                              <div className="mb-1">Gained diverse expertise through internships in:</div>
                              <div className="ml-3 space-y-0.5">
                                <div>• DL & F de Saram Attorneys at Law (corporate law)</div>
                                <div>• Ernst & Young (financial auditing)</div>
                                <div>• NDB Securities (stock trading)</div>
                              </div>
                            </div>
                          ) : (
                            <p className="text-xs text-slate-600 leading-relaxed">{item.subtitle}</p>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Industries as small bullets at bottom */}
              <div className="mt-8 pt-6 border-t border-rose-100/50 animate-fade-in animate-stagger-5">
                <div className="flex items-center gap-2 mb-3 animate-fade-in animate-stagger-5">
                  <Users className="h-3 w-3 text-rose-500" />
                  <span className="text-xs font-medium text-slate-600">Industries Served</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {industries.map((industry, index) => (
                    <div 
                      key={index} 
                      className={`flex items-center gap-1.5 bg-rose-50/50 px-2 py-1 rounded-full animate-scale-in ${
                        index < 3 ? `animate-stagger-${index + 1}` : 'animate-stagger-5'
                      }`}
                    >
                      <div className="w-1 h-1 bg-rose-400 rounded-full"></div>
                      <span className="text-xs text-slate-700">{industry}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Call to Action */}
          
        </div>
      </div>
    </section>
};
export default Experience;