import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Zap, Target, Users, TrendingUp } from "lucide-react";
const About = () => {
  const values = [{
    icon: Heart,
    title: "Customer-Centric",
    description: "Customer needs at the heart of every decision"
  }, {
    icon: Target,
    title: "Problem Solver",
    description: "Focus on solving the right problems, not just any problems"
  }, {
    icon: Zap,
    title: "Results-Driven",
    description: "Transform insights into measurable outcomes"
  }, {
    icon: Users,
    title: "Team Enabler",
    description: "Swiss army knife helping product teams succeed"
  }, {
    icon: TrendingUp,
    title: "Growth-Minded",
    description: "Embrace feedback and seek opportunities to grow"
  }];
  return <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Product manager passionate about solving complex problems through data-driven insights and user-centered design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300">
              <div className="text-2xl font-bold text-orange-400 mb-1">8+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300">
              <div className="text-lg font-semibold text-orange-400 mb-1">Startups → Fortune 500</div>
              <div className="text-sm text-gray-300">Scale Range</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300">
              <div className="text-lg font-semibold text-orange-400 mb-1">Multiple</div>
              <div className="text-sm text-gray-300">Industries</div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">My Approach</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                With 8 years of experience spanning startups to Fortune 500 companies, 
                I've learned that the best products come from deeply understanding customer needs 
                and translating those insights into actionable strategies.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I love all things product and act as a Swiss army knife for teams, 
                bringing together business analysis, user research, and process optimization 
                to help bring good products to life.
              </p>
            </div>

            <div className="space-y-6">
              {values.map((value, index) => <div key={index} className="flex items-center gap-4 animate-fade-in opacity-0" style={{
              animationDelay: `${index * 150}ms`,
              animationFillMode: 'forwards'
            }}>
                  <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="h-5 w-5 text-orange-400" />
                  </div>
                  <div>
                    <span className="font-semibold text-white">{value.title}</span>
                    <span className="text-gray-300 ml-2">— {value.description}</span>
                  </div>
                </div>)}
            </div>
          </div>

          
        </div>
      </div>
    </section>;
};
export default About;