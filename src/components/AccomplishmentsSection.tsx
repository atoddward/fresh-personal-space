
import React from "react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";

const accomplishments = [
  {
    title: "Projects Completed",
    value: 75,
    description: "Successfully delivered 75+ projects across various industries",
    color: "bg-primary",
  },
  {
    title: "Client Satisfaction",
    value: 98,
    description: "98% client satisfaction rate based on post-project reviews",
    color: "bg-green-500",
  },
  {
    title: "On-Time Delivery",
    value: 95,
    description: "95% of projects delivered on or before the deadline",
    color: "bg-amber-500",
  },
  {
    title: "Code Quality",
    value: 92,
    description: "92% score on code quality metrics and peer reviews",
    color: "bg-blue-500",
  },
];

const AccomplishmentsSection = () => {
  return (
    <section id="accomplishments" className="section-padding bg-muted/30">
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Key Accomplishments
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {accomplishments.map((item, index) => (
            <Card key={index} className="slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-xl">{item.title}</h3>
                  <span className="text-2xl font-bold text-primary">{item.value}%</span>
                </div>
                <Progress value={item.value} className="h-2 mb-4" indicatorClassName={item.color} />
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-lg shadow-sm slide-up">
          <h3 className="text-xl font-semibold mb-6 text-center">Recognition & Achievements</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
              <div>
                <p className="font-medium">Best Developer Award 2023</p>
                <p className="text-muted-foreground text-sm">Recognized for outstanding contributions to open source projects</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
              <div>
                <p className="font-medium">Featured in Tech Magazine</p>
                <p className="text-muted-foreground text-sm">Article on innovative approaches to web accessibility solutions</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
              <div>
                <p className="font-medium">Speaker at DevCon 2022</p>
                <p className="text-muted-foreground text-sm">Delivered talk on "Future of Web Development" to audience of 500+</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
              <div>
                <p className="font-medium">5x Certified Developer</p>
                <p className="text-muted-foreground text-sm">Hold multiple certifications in React, Node.js, AWS, and more</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AccomplishmentsSection;
