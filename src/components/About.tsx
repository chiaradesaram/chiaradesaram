import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Zap, Target, Users } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
const StatsSection = ({ stats }: { stats: Array<{ number: string; label: string; subtitle: string }> }) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });
  
  return (
    <div className="mb-16">
      <div 
        ref={ref}
        className={`bg-white rounded-2xl p-8 shadow-sm border border-gray-100 max-w-4xl mx-auto transition-all duration-700 transform ${
          isVisible 
            ? 'translate-y-0 opacity-100 scale-100' 
            : 'translate-y-12 opacity-0 scale-95'
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`text-center relative transition-all duration-500 transform ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-6 opacity-0'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 200}ms` : '0ms'
              }}
            >
              {index > 0 && (
                <div className="hidden md:block absolute -left-4 top-1/2 transform -translate-y-1/2 w-px h-12 bg-gray-200"></div>
              )}
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-gray-700 font-medium">
                {stat.label && <span>{stat.label} </span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const stats = [{
    number: "8+",
    label: "Years",
    subtitle: "Experience"
  }, {
    number: "7",
    label: "Clients",
    subtitle: "Engagements"
  }, {
    number: "Startups to Fortune 500",
    label: "",
    subtitle: "Scale Range"
  }];
  const values = [
    "Staying curious and open—there's always more to learn",
    "Bringing clarity and structure, even when things move fast", 
    "Putting customers needs at the heart of every decision",
    "Focusing on outcomes and making impact measurable"
  ];
  
  return <section id="about" className="py-20 bg-gray-50 text-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
          </div>

          {/* Stats Bar */}
          <StatsSection stats={stats} />

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Background Story */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">My Journey</h3>
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    Over the past 8 years in tech, I've worked across industries and company sizes, from early-stage startups to global enterprises, in varying roles spanning business analysis, customer experience, product operations, and user research.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Before that, I worked in economics and banking. This mix has shaped a unique perspective in the way I think: bringing a blend of analytical thinking, structured problem-solving, and creative exploration.
                  </p>
                </div>
              </div>
            </div>

            {/* Philosophy */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">My Philosophy</h3>
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    Great products begin with curiosity, a desire to truly understand users and the problems they face. From there, the best solutions emerge through collaboration, experimentation, and ongoing refinement.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    I enjoy bringing the right people together, working toward a shared purpose to create solutions that make a real impact.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">What I Value in My Work</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 hover:bg-orange-50 transition-colors duration-300 group"
                >
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-orange-200 transition-colors duration-300">
                    <span className="text-orange-600 font-semibold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{value}</p>
                </div>
              ))}
            </div>
          </div>

          
        </div>
      </div>
    </section>;
};
export default About;