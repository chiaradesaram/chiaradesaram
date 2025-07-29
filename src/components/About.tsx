import { useScrollReveal } from "@/hooks/use-scroll-reveal";
const StatsSection = ({ stats }: { stats: Array<{ number: string; label: string; subtitle: string }> }) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });
  
  return (
    <div className="mb-12">
      <div 
        ref={ref}
        className={`bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 max-w-3xl mx-auto transition-all duration-700 transform ${
          isVisible 
            ? 'translate-y-0 opacity-100 scale-100' 
            : 'translate-y-8 opacity-0 scale-98'
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`text-center relative transition-all duration-500 transform ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-4 opacity-0'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 150}ms` : '0ms'
              }}
            >
              {index > 0 && (
                <div className="hidden md:block absolute -left-3 top-1/2 transform -translate-y-1/2 w-px h-8 bg-gray-300/60"></div>
              )}
              <div className="text-xl md:text-2xl font-semibold text-gray-800 mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 font-medium">
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

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 mb-16">
              <div className="text-lg text-gray-600 leading-relaxed">
                I'm a consultant who loves solving meaningful problems, learning from others, and bringing teams together to build products that truly work for users. My background—spanning economics, banking, and running a business—has shaped the way I think.
              </div>
              
              <div className="text-lg text-gray-600 leading-relaxed">
                Economics and banking sparked a lasting interest in data, insights, and experimentation. Working in my family's business taught me the realities of operations—and how much the right tools, processes, and mindset can impact people and outcomes.
              </div>
              
              <div className="text-lg text-gray-600 leading-relaxed">
                Since moving into tech 8 years ago, I've worked across industries, technologies and teams in roles spanning business analysis, customer experience, product operations, and user research. I am driven by curiosity and a constant appetite to learn and build better products for real users.
              </div>
              
              <div className="text-lg text-gray-600 leading-relaxed">
                I believe the best solutions come from deeply understanding customer needs, working collaboratively, and refining until they genuinely work.
              </div>
              
              <div className="text-lg text-gray-600 leading-relaxed">
                I combine business analysis, research, and process thinking to help teams build products that matter.
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-8 border border-gray-200/50">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">What I believe in</h3>
              <div className="space-y-4">
                {[
                  "Staying curious and open—there's always more to learn",
                  "Being comfortable with complexity and asking the right questions", 
                  "Bringing clarity and structure, even when things move fast",
                  "Putting customers needs at the heart of every decision",
                  "Focusing on outcomes and making impact measurable"
                ].map((belief, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-semibold text-primary">{index + 1}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{belief}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>;
};
export default About;