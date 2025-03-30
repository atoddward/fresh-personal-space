
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { User, Star, Book } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About Me
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="slide-up">
            <h3 className="text-xl md:text-2xl font-semibold mb-6">
              Hello, I'm <span className="text-primary">Todd Ward</span>
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate Full-Stack Developer with over 6 years of experience
              crafting beautiful and functional web applications. I specialize in
              React, Node.js, and modern web technologies, with a focus on creating
              intuitive user experiences.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              My background in both design and development allows me to bridge the
              gap between aesthetics and functionality, creating solutions that are
              not only visually appealing but also highly performant and accessible.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me hiking, reading sci-fi novels,
              or experimenting with new recipes in the kitchen.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <Card className="slide-up" style={{ animationDelay: "0.1s" }}>
              <CardContent className="flex items-start p-6">
                <div className="bg-primary/10 rounded-full p-3 mr-4">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Personal Touch</h4>
                  <p className="text-muted-foreground">
                    I believe in bringing a personal touch to every project, ensuring the 
                    end product aligns perfectly with your vision and goals.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="slide-up" style={{ animationDelay: "0.2s" }}>
              <CardContent className="flex items-start p-6">
                <div className="bg-primary/10 rounded-full p-3 mr-4">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Quality Focus</h4>
                  <p className="text-muted-foreground">
                    Quality is at the heart of everything I create. I ensure clean code,
                    rigorous testing, and attention to detail in every project.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="slide-up" style={{ animationDelay: "0.3s" }}>
              <CardContent className="flex items-start p-6">
                <div className="bg-primary/10 rounded-full p-3 mr-4">
                  <Book className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Continuous Learning</h4>
                  <p className="text-muted-foreground">
                    I'm dedicated to staying at the forefront of technology through
                    continuous learning and adapting to industry best practices.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
