
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // In a real app, you would send this data to your backend
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    // Reset form
    e.currentTarget.reset();
  };
  
  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Get In Touch
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            
            <Card className="slide-up">
              <CardContent className="p-6 flex items-start">
                <div className="bg-primary/10 rounded-full p-3 mr-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <a 
                    href="mailto:john.doe@example.com" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    john.doe@example.com
                  </a>
                </div>
              </CardContent>
            </Card>
            
            <Card className="slide-up" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-6 flex items-start">
                <div className="bg-primary/10 rounded-full p-3 mr-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Phone</h4>
                  <a 
                    href="tel:+15551234567" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
              </CardContent>
            </Card>
            
            <Card className="slide-up" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-6 flex items-start">
                <div className="bg-primary/10 rounded-full p-3 mr-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Location</h4>
                  <p className="text-muted-foreground">
                    San Francisco, California
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <div className="pt-8">
              <h3 className="text-xl font-semibold mb-4">Social Media</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="bg-primary/10 hover:bg-primary/20 transition-colors p-3 rounded-full"
                  aria-label="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-primary/10 hover:bg-primary/20 transition-colors p-3 rounded-full"
                  aria-label="GitHub"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-primary/10 hover:bg-primary/20 transition-colors p-3 rounded-full"
                  aria-label="Twitter"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <Card className="lg:col-span-2 slide-up">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="What is this regarding?"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    rows={5}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full md:w-auto">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
