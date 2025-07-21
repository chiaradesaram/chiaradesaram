import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Client Name",
      title: "Position, Company",
      image: "/placeholder.svg",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 2,
      name: "Client Name",
      title: "Position, Company", 
      image: "/placeholder.svg",
      quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: 3,
      name: "Client Name",
      title: "Position, Company",
      image: "/placeholder.svg", 
      quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      id: 4,
      name: "Client Name",
      title: "Position, Company",
      image: "/placeholder.svg",
      quote: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      id: 5,
      name: "Client Name", 
      title: "Position, Company",
      image: "/placeholder.svg",
      quote: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
    },
    {
      id: 6,
      name: "Client Name",
      title: "Position, Company",
      image: "/placeholder.svg",
      quote: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Client <span className="text-gradient">Testimonials</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here's what my clients say about working with me
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.id} 
                className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300 animate-fade-in opacity-0"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-orange-500 mb-4" />
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;