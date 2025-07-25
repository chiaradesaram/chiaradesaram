import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Asheley Wardell",
      title: "Associate Director, Practice Solutions, Legal Technology, Simpson Thacher & Bartlett LLP",
      image: "/placeholder.svg",
      quote: "Chiara has a special talent for figuring out the best way to take in data, organize it, identify themes and potential opportunities, and share her findings with a variety of audience members. Somehow she gets every excited to get to work! Her attention to detail and thoughtfulness inspire confidence and her ability to look at problems from all different angles provides for transformational ideas. Chiara is a bright light on any team she interacts with! I hope our paths cross again in the future!"
    },
    {
      id: 2,
      name: "Luke Schelechte",
      title: "CX Manager, Wolters Kluwer",
      image: "/placeholder.svg",
      quote: "Chiara is one of the most well-prepared, determined colleagues I have ever worked with. She continually brings diligence and well-rounded thinking to her projects, including nothing short of highly detailed project plans and multiple backup avenues when obstacles arise. Given with her collaborative and even-keel demeanor, Chirara excels at connecting teams to fully understand and buy into shared complex business goals."
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