import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Users, Cog, Search, Layers, TrendingUp } from "lucide-react";
import { useEffect, useRef } from "react";

const Expertise = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const skills = [
    {
      icon: TrendingUp,
      title: "CX Strategy",
      description: "Designing customer experience strategies that drive business growth and satisfaction",
      level: 95,
      tools: ["Discovery", "Journey Mapping", "Personas", "Feedback Loops", "Experimentation", "CX Metrics"]
    },
    {
      icon: BarChart3,
      title: "Business Analysis & Product Management",
      description: "Translating business needs into actionable requirements and solutions",
      level: 92,
      tools: ["Requirements Gathering", "Process Modeling", "Gap Analysis", "Stakeholder Management"]
    },
    {
      icon: Search,
      title: "User Research",
      description: "Uncovering user insights that inform product and business decisions",
      level: 90,
      tools: ["User Interviews", "Usability Testing", "Surveys", "Behavioral Analysis"]
    },
    {
      icon: Layers,
      title: "Product Ops",
      description: "Supporting product teams with processes, tools, and insights for success",
      level: 85,
      tools: ["Product Analytics", "Team Coordination", "Tool Integration", "Process Design"]
    }
  ];

  useEffect(() => {
    console.log('Setting up scroll listener for stacked cards');
    
    const handleScroll = () => {
      const cards = document.querySelectorAll('.stack-card');
      console.log('Scroll triggered, found cards:', cards.length);
      
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const scrollProgress = Math.max(0, Math.min(1, (windowHeight - rect.top) / windowHeight));
        
        // Create overlapping effect - cards below slide up and over the cards above
        const translateY = scrollProgress * (-50 - index * 20);
        const scale = 1 - (scrollProgress * 0.05);
        
        console.log(`Card ${index}: scrollProgress=${scrollProgress.toFixed(2)}, translateY=${translateY}px`);
        
        (card as HTMLElement).style.transform = `translateY(${translateY}px) scale(${scale})`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} id="expertise" className="py-20 bg-background relative min-h-screen"
      style={{ height: `${skills.length * 400 + 600}px` }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive skill set honed across startups to Fortune 500 companies, 
              helping teams build products that matter.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="relative"
                style={{
                  marginTop: index === 0 ? '0' : '-200px', // Overlap cards by 200px
                }}
              >
                <Card 
                  className={`stack-card card-hover group sticky shadow-2xl bg-card/95 backdrop-blur-sm border-2 transition-all duration-300`}
                  style={{
                    top: '100px',
                    zIndex: skills.length - index,
                    marginBottom: index === skills.length - 1 ? '0' : '250px', // Add space for next card
                  }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                        <skill.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{skill.title}</CardTitle>
                        <div className="w-full h-0.5 bg-primary"></div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                      {skill.description}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      {skill.tools.map((tool, toolIndex) => (
                        <div key={toolIndex} className="flex items-center gap-2">
                          <div 
                            className="w-3 h-3 rounded-full flex-shrink-0"
                            style={{
                              backgroundColor: `hsl(16, ${70 + toolIndex * 5}%, ${50 + toolIndex * 8}%)`
                            }}
                          />
                          <span className="text-sm text-muted-foreground">{tool}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>


          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 mt-32">
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
                  <BarChart3 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Data-driven decision making</span>
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
    </section>
  );
};

export default Expertise;