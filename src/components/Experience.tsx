import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users } from "lucide-react";
const Experience = () => {
  const industries = ["Fintech", "Legal", "Compliance", "FMCG", "Telecommunications"];
  const timeline = [{
    year: "Education",
    milestone: "MSc Banking and Finance, King's College London",
    subtitle: "Won the award for Best Dissertation"
  }, {
    year: "",
    milestone: "BSc Economics and Finance, Queen Mary University of London",
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
                      <h4 className="font-semibold text-slate-800 whitespace-pre-line">{item.milestone}</h4>
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