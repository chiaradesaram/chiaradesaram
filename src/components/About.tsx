import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Zap, Target, Users } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
const StatsSection = ({
  stats
}: {
  stats: Array<{
    number: string;
    label: string;
    subtitle: string;
  }>;
}) => {
  const {
    ref,
    isVisible
  } = useScrollReveal({
    threshold: 0.3
  });
  return <div className="mb-16">
      <div ref={ref} className={`bg-white rounded-2xl p-8 shadow-sm border border-gray-100 max-w-4xl mx-auto transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'}`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => <div key={index} className={`text-center relative transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`} style={{
          transitionDelay: isVisible ? `${index * 200}ms` : '0ms'
        }}>
              {index > 0 && <div className="hidden md:block absolute -left-4 top-1/2 transform -translate-y-1/2 w-px h-12 bg-gray-200"></div>}
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-gray-700 font-medium">
                {stat.label && <span>{stat.label} </span>}
              </div>
            </div>)}
        </div>
      </div>
    </div>;
};
const About = () => {
  const stats = [{
    number: "7",
    label: "Years",
    subtitle: "Experience"
  }, {
    number: "7",
    label: "Projects",
    subtitle: ""
  }, {
    number: "Startups to Fortune 500",
    label: "",
    subtitle: "Scale Range"
  }];
  const workingApproach = ["Analytical thinking to map businesses, processes, and user journeys", "A strong foundation in discovery and user research to uncover real needs and opportunities", "Data and insights to guide decision-making and prioritisation", "A focus on outcomes, making impact clear and measurable", "A natural drive to connect the right people and get things moving", "A love for innovation and creativity"];
  const values = ["Curiosity and a growth mindset", "Clarity in fast-moving environments", "Real user needs at the core", "Open, collaborative problem-solving"];
  return <section id="about" className="py-20 bg-gray-50 text-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
          </div>

          {/* About Me Content with Stats */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* About Me Text */}
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed text-lg">
                  I began my career in economics and banking before moving into tech, drawn by its pace of innovation and the chance to solve real problems at pace. Over the past 7+ years, I've delivered solutions across digital transformation, customer experience, and process redesign, working with organisations from startups to Fortune 500 companies. I combine structured analytical thinking, curiosity, and creativity to solve customer problems and improve business outcomes through well designed, meaningful solutions.
                </p>
                
              </div>
            </div>

            {/* Stats Cards */}
            <div className="space-y-4">
              {stats.map((stat, index) => <div key={index} className={`bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 ${index === 2 ? 'p-4' : 'p-6'}`}>
                  <div className="flex items-center gap-4">
                    <div className={`font-bold text-primary ${index === 2 ? 'text-lg' : 'text-3xl'}`}>
                      {index === 2 ? 'Startups to Fortune 500' : stat.number}
                    </div>
                    <div>
                      {index !== 2 && <div className="font-medium text-gray-700">
                          {stat.label && <span>{stat.label} </span>}
                          <span className="text-gray-500">{stat.subtitle}</span>
                        </div>}
                      {index === 2 && <div className="text-gray-500 mt-1">
                          <div className="md:hidden space-y-1">
                            <div>Banking</div>
                            <div>Legal</div>
                            <div>Compliance</div>
                            <div>Telecommunications</div>
                            <div>FMCG</div>
                          </div>
                          <div className="hidden md:block">
                            Banking • Legal • Compliance • Telecommunications • FMCG
                          </div>
                        </div>}
                    </div>
                  </div>
                </div>)}
            </div>
          </div>

          {/* How I Work Section */}
          <div className="mb-16">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">How I Work</h3>
              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  I believe the best products come from teams that are curious, collaborative, and committed to deeply understanding their users. I love helping teams come together to explore problems, generate ideas, and iterate on thoughtful solutions, always with a focus on outcomes and measurable impact.
                </p>
                <div>
                  <p className="text-gray-700 font-medium mb-4">My approach combines:</p>
                  <div className="space-y-3">
                    {workingApproach.map((approach, index) => <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 hover:bg-orange-50 transition-colors duration-300">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">{approach}</p>
                      </div>)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What I Value Section */}
          
        </div>
      </div>
    </section>;
};
export default About;