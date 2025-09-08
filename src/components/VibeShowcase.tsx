import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

import tailsUpImage from "@/assets/project-tailsup.jpg";
import compoundLabImage from "@/assets/project-compoundlab.jpg";
import localBasketImage from "@/assets/project-localbasket.jpg";

const VibeShowcase = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal();

  const featuredProjects = [
    {
      id: 1,
      name: "Local Basket",
      description: "A food waste reduction platform connecting consumers with surplus food from local businesses",
      problem: "Food waste creates environmental and economic burden",
      category: "Sustainability",
      url: "https://localbasket.lovable.app",
      gradient: "from-emerald-400 to-emerald-600",
      image: localBasketImage
    },
    {
      id: 2,
      name: "TailsUp",
      description: "Connects users with verified animal rescues, volunteer opportunities, and donation channels",
      problem: "People want to help animals but don't know where to start",
      category: "Social Impact",
      url: "https://tailsup.lovable.app",
      gradient: "from-emerald-500 to-teal-600",
      image: tailsUpImage
    },
    {
      id: 3,
      name: "CompoundLab",
      description: "Teaches personal finance through interactive tutorials and compound interest calculators",
      problem: "Financial illiteracy leaves people unprepared for major decisions",
      category: "FinTech",
      url: "https://compoundlab.lovable.app",
      gradient: "from-teal-400 to-cyan-600",
      image: compoundLabImage
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto max-w-6xl">
        <div
          ref={sectionRef}
          className={`transition-all duration-700 ${
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
              Vibe Code Experiments
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              These aren't polished apps — they're sketches, thoughts, and vibe-coded tools I built in my free time to explore problems that fascinate me.
            </p>
          </div>

          {/* Project Carousel */}
          <div className="relative mb-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {featuredProjects.map((project, index) => (
                  <CarouselItem key={project.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card 
                      className="group relative overflow-hidden border border-border bg-gradient-to-br from-card to-card/50 hover:from-card/80 hover:to-card/30 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 rounded-xl h-full"
                    >
                      {/* Gradient border effect */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl`} />
                      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.gradient} rounded-t-xl`} />
                      
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20 rounded-t-xl`} />
                        <div className="absolute top-4 left-4">
                          <Badge className={`bg-gradient-to-r ${project.gradient} text-white border-0 shadow-md text-xs px-2 py-1`}>
                            {project.category}
                          </Badge>
                        </div>
                        <a 
                          href={project.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="absolute top-4 right-4 opacity-60 hover:opacity-100 transition-opacity duration-300 hover:scale-110 transform"
                        >
                          <ExternalLink className="w-4 h-4 text-white drop-shadow-lg" />
                        </a>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="text-lg font-bold text-foreground mb-2 leading-tight">
                          {project.name}
                        </h3>
                        <div className="text-xs font-medium text-muted-foreground/80 mb-2">
                          Problem being solved
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                          {project.problem}
                        </p>
                        <a 
                          href={project.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block mt-auto"
                        >
                          <Button 
                            size="sm" 
                            className="w-full bg-card-foreground text-card hover:bg-card-foreground/90 border border-border hover:border-primary/40 transition-all duration-300 rounded-lg"
                          >
                            <span>View App</span>
                            <ExternalLink className="w-3 h-3 ml-2" />
                          </Button>
                        </a>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12 lg:-left-16" />
              <CarouselNext className="hidden md:flex -right-12 lg:-right-16" />
            </Carousel>
          </div>

          {/* View More Button */}
          <div className="text-center">
            <Link to="/vibecode">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 rounded-xl px-8 py-3 font-semibold shadow-lg hover:shadow-xl"
              >
                <span>View All Experiments</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VibeShowcase;