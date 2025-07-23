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

  return (
    <section id="about" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Clean, minimal header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              About Me
            </h2>
            <div className="w-16 h-0.5 bg-slate-800 mx-auto"></div>
          </div>

          {/* Clean Stats Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-8 text-center shadow-sm border border-slate-200/50 hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-3xl font-bold text-slate-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600">
                  {stat.label && <div className="font-medium text-slate-700">{stat.label}</div>}
                  {stat.subtitle && <div className="text-sm text-slate-500">{stat.subtitle}</div>}
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Approach Section */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200/50">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                  <div className="w-1 h-8 bg-slate-800 rounded-full"></div>
                  My Approach
                </h3>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p className="text-lg">
                    I bring a unique perspective to solving customer problems, shaped by a career spanning business, economics, and technology.
                  </p>
                  <p>
                    My background in economics gave me an analytical mindset that peaked my love for data and insights, and constant experimentation. Running my family business taught me how decisions affect real operations, people, and outcomes.
                  </p>
                  <p>
                    When I moved into tech, I immersed myself in a wide variety of industries and technology, feeding a deep curiosity and a habit of constant learning. Over eight years, from early‑stage ventures to global enterprises, I've seen that the best solutions come from understanding customer problems at their core and testing until we get them right.
                  </p>
                  <p>
                    I blend business analysis, research, and process improvement to help teams create products that make a real impact.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 pt-4">
                  <Badge variant="secondary" className="px-4 py-2 bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200 transition-colors">
                    Multiple Industries
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2 bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200 transition-colors">
                    Startups → Fortune 500
                  </Badge>
                </div>
              </div>
            </div>

            {/* Values Section */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200/50">
              <h3 className="text-3xl font-bold text-slate-900 flex items-center gap-3 mb-8">
                <div className="w-1 h-8 bg-slate-800 rounded-full"></div>
                Core Values
              </h3>
              <div className="space-y-6">
                {values.map((value, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors duration-200"
                  >
                    <div className="w-2 h-2 bg-slate-400 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-slate-900 text-lg mb-1">
                        {value.title}
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;