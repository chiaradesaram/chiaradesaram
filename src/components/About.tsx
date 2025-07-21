import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Zap, Target, Users } from "lucide-react";
const About = () => {
  const stats = [
    {
      number: "8+",
      label: "Years",
      subtitle: "Experience"
    },
    {
      number: "7",
      label: "Client",
      subtitle: "Engagements"
    },
    {
      number: "Startups to Fortune 500",
      label: "",
      subtitle: "Scale Range"
    }
  ];

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
    icon: Zap,
    title: "Growth-Minded",
    description: "Always learning and adapting to new challenges"
  }];
  return <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl rounded-2xl p-8 text-center border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-3">{stat.number}</div>
                  <div className="text-gray-300 font-medium">
                    {stat.label && <div className="text-lg">{stat.label}</div>}
                    {stat.subtitle && <div className="text-sm text-gray-400">{stat.subtitle}</div>}
                  </div>
                </div>
              </div>
            ))}
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
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="px-3 py-1 bg-gray-700 text-gray-200 border-gray-600">Multiple Industries</Badge>
                <Badge variant="secondary" className="px-3 py-1 bg-gray-700 text-gray-200 border-gray-600">Startups → Fortune 500</Badge>
                <Badge variant="secondary" className="px-3 py-1 bg-gray-700 text-gray-200 border-gray-600">Multiple Industries</Badge>
                
              </div>
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