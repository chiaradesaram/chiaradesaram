import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, Calendar, MessageSquare, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const {
    toast
  } = useToast();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a backend
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you within 24 hours."
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      message: ""
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const contactMethods = [{
    icon: Mail,
    title: "Email",
    value: "chiara@example.com",
    description: "Drop me a line anytime",
    action: "mailto:chiara@example.com"
  }, {
    icon: Linkedin,
    title: "LinkedIn",
    value: "/in/chiaraadesaram",
    description: "Let's connect professionally",
    action: "https://linkedin.com/in/chiaraadesaram"
  }, {
    icon: Calendar,
    title: "Schedule a Call",
    value: "15-30 min chat",
    description: "Book a discovery call",
    action: "#"
  }];
  const services = ["Business Analysis & Requirements", "Customer Experience Strategy", "User Research & Insights", "Process Optimization", "Product Operations", "Digital Transformation"];
  return <section id="contact" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Work <span className="text-gradient">Together</span>
            </h2>
            
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            

            {/* Contact Info & Services */}
            <div className="space-y-8">
              {/* Contact Methods */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => <Card key={index} className="card-hover group cursor-pointer">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <method.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium">{method.title}</h4>
                            <p className="text-sm text-primary font-medium">{method.value}</p>
                            <p className="text-xs text-muted-foreground">{method.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>)}
                </div>
              </div>

              {/* Services */}
              

              {/* Availability */}
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Available for New Projects</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Currently accepting new consulting engagements
                  </p>
                  <Badge className="bg-green-100 text-green-800 border-green-200">
                    Available
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Response Promise */}
          
        </div>
      </div>
    </section>;
};
export default Contact;