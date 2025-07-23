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
  return <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
            {stats.map((stat, index) => <div key={index} className="bg-white/5 backdrop-blur-md rounded-lg p-4 text-center border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-lg font-bold text-shimmer mb-1">{stat.number}</div>
                <div className="text-gray-300 text-xs">
                  {stat.label && <div>{stat.label}</div>}
                  {stat.subtitle && <div className="text-gray-400">{stat.subtitle}</div>}
                </div>
              </div>)}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">My Approach</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                I bring a unique perspective to solving customer problems, shaped by a career spanning business, economics, and technology.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My background in economics gave me an analytical mindset that peaked my love for data and insights, and constant experimentation. Running my family business taught me how decisions affect real operations, people, and outcomes.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                When I moved into tech, I immersed myself in a wide variety of industries and technology, feeding a deep curiosity and a habit of constant learning. Over eight years, from early‑stage ventures to global enterprises, I've seen that the best solutions come from understanding customer problems at their core and testing until we get them right.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I blend business analysis, research, and process improvement to help teams create products that make a real impact.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="px-3 py-1 bg-gray-700 text-gray-200 border-gray-600">Multiple Industries</Badge>
                <Badge variant="secondary" className="px-3 py-1 bg-gray-700 text-gray-200 border-gray-600">Startups → Fortune 500</Badge>
                
              </div>
            </div>

            <div className="space-y-4">
              <ul className="space-y-3">
                {values.map((value, index) => (
                  <li key={index} className="flex items-start gap-3 animate-fade-in opacity-0" style={{
                    animationDelay: `${index * 150}ms`,
                    animationFillMode: 'forwards'
                  }}>
                    <span className="text-orange-400 mt-1">•</span>
                    <div>
                      <span className="font-semibold text-white">{value.title}</span>
                      <span className="text-gray-300 ml-2">— {value.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          
        </div>
      </div>
    </section>;
};
export default About;