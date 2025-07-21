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
          <div className="flex justify-center gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-xl font-bold text-shimmer mb-1">{stat.number}</div>
                <div className="text-gray-400 text-xs">
                  {stat.label} {stat.subtitle}
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-xl font-semibold mb-4">My Approach</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                With 8 years of experience spanning startups to Fortune 500 companies, 
                I've learned that the best products come from deeply understanding customer needs 
                and translating those insights into actionable strategies.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I love all things product and act as a Swiss army knife for teams, 
                bringing together business analysis, user research, and process optimization 
                to help bring good products to life.
              </p>
            </div>

            {/* Values */}
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {values.map((value, index) => (
                <div key={index} className="flex items-center gap-3 animate-fade-in opacity-0" style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'forwards'
                }}>
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-white text-sm">{value.title}</span>
                    <span className="text-gray-400 text-sm ml-2">— {value.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          
        </div>
      </div>
    </section>;
};
export default About;