import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Users, Search, Layers, TrendingUp } from "lucide-react";
import { useEffect, useRef } from "react";
const Expertise = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const skills = [{
    title: "CX Strategy",
    description: "Designing customer experience strategies that drive business growth and satisfaction",
    tools: ["Journey Mapping", "Voice of Customer", "CX Metrics", "Touchpoint Analysis"]
  }, {
    title: "Business Analysis & Product Management",
    description: "Translating business needs into actionable requirements and solutions",
    tools: ["Requirements Gathering", "Process Modeling", "Gap Analysis", "Stakeholder Management"]
  }, {
    title: "User Research",
    description: "Uncovering user insights that inform product and business decisions",
    tools: ["User Interviews", "Usability Testing", "Surveys", "Behavioral Analysis"]
  }, {
    title: "Product Ops",
    description: "Supporting product teams with processes, tools, and insights for success",
    tools: ["Product Analytics", "Team Coordination", "Tool Integration", "Process Design"]
  }];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const containerRect = containerRef.current.getBoundingClientRect();
      const containerTop = containerRect.top;
      const windowHeight = window.innerHeight;
      
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        
        const cardRect = card.getBoundingClientRect();
        const cardTop = cardRect.top;
        const cardHeight = cardRect.height;
        
        // Calculate scroll progress for each card
        const scrollProgress = Math.max(0, Math.min(1, (windowHeight - cardTop) / (windowHeight + cardHeight)));
        
        // Calculate overlap amount based on cards below
        const cardsBelow = skills.length - index - 1;
        const overlapAmount = Math.min(scrollProgress * cardsBelow * 60, cardsBelow * 60);
        
        // Apply transforms
        const scale = 0.95 + (scrollProgress * 0.05);
        const translateY = -overlapAmount;
        const zIndex = skills.length - index;
        
        card.style.transform = `translateY(${translateY}px) scale(${scale})`;
        card.style.zIndex = zIndex.toString();
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [skills.length]);

  return <section id="expertise" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive skill set honed across startups to Fortune 500 companies, 
              helping teams build products that matter.
            </p>
          </div>

          <div ref={containerRef} className="relative space-y-8 mb-16">
            {skills.map((skill, index) => (
              <div
                key={index}
                ref={(el) => cardsRef.current[index] = el}
                className="relative"
              >
                <Card className="p-8 bg-card border border-border/50 backdrop-blur-sm shadow-lg">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-semibold mb-3">{skill.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      {skill.tools.map((tool, toolIndex) => (
                        <div key={toolIndex} className="flex items-center gap-2">
                          <div 
                            className="w-2 h-2 rounded-full"
                            style={{ 
                              backgroundColor: `hsl(${(toolIndex * 60 + index * 40) % 360}, 70%, 60%)` 
                            }}
                          />
                          <span className="text-sm text-foreground font-medium">{tool}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">The Swiss Army Knife Approach</h3>
                <p className="text-muted-foreground leading-relaxed">
                  What makes me unique is my ability to bridge different disciplines. I don't just 
                  specialize in one area—I bring together business analysis, customer experience, 
                  user research, and product operations to create holistic solutions.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Users className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Cross-functional collaboration</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <TrendingUp className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Measurable business outcomes</span>
                </div>
                <div className="flex items-center gap-4">
                  <Search className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Customer-centric solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Expertise;