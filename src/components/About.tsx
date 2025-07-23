import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Zap, Target, Users } from "lucide-react";
const About = () => {
  const stats = [{
    number: "8+",
    label: "Years",
    subtitle: "Experience"
  }, {
    number: "7",
    label: "Client",
    subtitle: "Engagements"
  }, {
    number: "Startups to Fortune 500",
    label: "",
    subtitle: "Scale Range"
  }];
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
  return <section id="about" className="py-20 bg-gray-50 text-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
            {stats.map((stat, index) => <div key={index} className="bg-white backdrop-blur-md rounded-lg p-4 text-center border border-gray-200 hover:shadow-md transition-all duration-300">
                <div className="text-lg font-bold text-primary mb-1">{stat.number}</div>
                <div className="text-gray-600 text-xs">
                  {stat.label && <div>{stat.label}</div>}
                  {stat.subtitle && <div className="text-gray-500">{stat.subtitle}</div>}
                </div>
              </div>)}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">My Approach</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                I bring a unique perspective to solving customer problems, shaped by a career spanning business, economics, and technology.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                My background in economics and banking sharpened my analytical thinking and sparked a lasting interest in data, insights, and experimentation. Running my family business taught me how decisions play out in real operations, affecting people and outcomes.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Moving into tech, I've worked across a wide range of industries and tools, driven by curiosity and a constant appetite to learn.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Over eight years—across startups and global enterprises—I've seen that the best solutions come from understanding customer problems at their root and refining until they truly work.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                I blend business analysis, research, and process improvement to help teams create products that make a real impact.
              </p>
              <div className="flex flex-wrap gap-2">
                
                
                
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Core Values</h3>
              {values.map((value, index) => <div key={index} className="flex items-center gap-4 animate-fade-in opacity-0" style={{
              animationDelay: `${index * 150}ms`,
              animationFillMode: 'forwards'
            }}>
                  <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="h-5 w-5 text-orange-400" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">{value.title}</span>
                    <p className="text-sm text-gray-600 mt-1">{value.description}</p>
                  </div>
                </div>)}
            </div>
          </div>

          
        </div>
      </div>
    </section>;
};
export default About;