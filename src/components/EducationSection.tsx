
import React from "react";
import { Timeline, TimelineItem } from "@/components/ui/timeline";
import { Card, CardContent } from "@/components/ui/card";

const education = [
  {
    degree: "Bachelor of Science in Business Administration, Major in MIS",
    institution: "The University of North Carolina at Charlotte",
    date: "1998",
    description: "Specialized in Artificial Intelligence and Web Technologies. Graduated with honors.",
    achievements: [
      "4.0 GPA",
      "Published research paper on 'Optimizing React Applications'",
      "Teaching Assistant for Web Development course",
    ],
  },
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "MIT",
    date: "2009 - 2013",
    description: "Foundation in computer science principles, software engineering, and web development.",
    achievements: [
      "Dean's List for 4 consecutive years",
      "Developed university event management system",
      "Vice President of Computer Science Club",
    ],
  },
];

const certifications = [
  { name: "Certified Scrum Product Owner", issuer: "Scrum Alliance", year: "1/2025" },
  { name: "Google Professional Cloud Developer", issuer: "Google Cloud", year: "2021" },
  { name: "React Advanced Concepts", issuer: "Frontend Masters", year: "2020" },
  { name: "Certified Scrum Master", issuer: "Scrum Alliance", year: "2019" },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding bg-muted/30">
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Education
        </h2>
        
        <Timeline>
          {education.map((edu, index) => (
            <TimelineItem
              key={index}
              title={edu.degree}
              subtitle={edu.institution}
              date={edu.date}
              isLast={index === education.length - 1}
            >
              <p className="mt-2 text-muted-foreground">{edu.description}</p>
              <ul className="mt-4 space-y-2">
                {edu.achievements.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2"></span>
                    <p className="text-muted-foreground">{item}</p>
                  </li>
                ))}
              </ul>
            </TimelineItem>
          ))}
        </Timeline>
        
        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-8 text-center">Certifications & Additional Training</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-lg">{cert.name}</h4>
                      <p className="text-muted-foreground">{cert.issuer}</p>
                    </div>
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {cert.year}
                    </span>
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

export default EducationSection;
