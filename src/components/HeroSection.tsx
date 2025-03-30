
import React, { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const defaultContent = {
  name: "John Doe",
  title: "Full-Stack Developer & Designer",
  bio: "Building beautiful, user-centered digital experiences with a focus on performance and accessibility."
};

const HeroSection = () => {
  const [content, setContent] = useState(defaultContent);

  useEffect(() => {
    // Load content from localStorage if available
    const savedContent = localStorage.getItem("siteContent");
    if (savedContent) {
      const parsedContent = JSON.parse(savedContent);
      if (parsedContent.hero) {
        setContent(parsedContent.hero);
      }
    }
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative text-center px-4 pt-20">
      <div className="fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          <span className="text-primary">{content.name}</span>
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8">
          {content.title}
        </h2>
        <p className="max-w-xl mx-auto text-base md:text-lg mb-12">
          {content.bio}
        </p>
        <Button
          asChild
          size="lg"
          className="rounded-full animate-bounce"
        >
          <a href="#about">
            <ArrowDown className="mr-2 h-4 w-4" />
            Learn More
          </a>
        </Button>
      </div>
      
      <div className="absolute bottom-8 w-full flex justify-center">
        <div className="w-0.5 h-16 bg-primary/30 rounded-full"></div>
      </div>
    </section>
  );
};

export default HeroSection;
