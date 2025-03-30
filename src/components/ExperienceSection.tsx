
import React from "react";
import { Timeline, TimelineItem } from "@/components/ui/timeline";

const experiences = [
  {
    title: "Senior Full-Stack Developer",
    company: "Tech Innovations Inc.",
    date: "2020 - Present",
    description: [
      "Lead a team of 5 developers in building enterprise-level web applications",
      "Architected and implemented scalable cloud solutions using AWS and Azure",
      "Reduced application load time by 40% through performance optimizations",
      "Mentored junior developers and conducted code reviews",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Digital Solutions Group",
    date: "2018 - 2020",
    description: [
      "Developed responsive web applications using React, Redux, and TypeScript",
      "Collaborated with designers to implement pixel-perfect UI components",
      "Integrated RESTful APIs and GraphQL endpoints",
      "Implemented automated testing with Jest and React Testing Library",
    ],
  },
  {
    title: "Web Developer",
    company: "Creative Agency Ltd.",
    date: "2016 - 2018",
    description: [
      "Built and maintained websites for clients across various industries",
      "Worked with CMS platforms like WordPress and custom PHP solutions",
      "Implemented responsive designs and ensured cross-browser compatibility",
      "Collaborated with the design team to create engaging user experiences",
    ],
  },
  {
    title: "Junior Developer Intern",
    company: "WebTech Solutions",
    date: "2015 - 2016",
    description: [
      "Assisted senior developers in building and testing web applications",
      "Learned fundamentals of JavaScript, HTML5, and CSS3",
      "Participated in agile development processes and daily stand-ups",
      "Contributed to company's internal tools and documentation",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Work Experience
        </h2>
        
        <Timeline>
          {experiences.map((job, index) => (
            <TimelineItem
              key={index}
              title={job.title}
              subtitle={job.company}
              date={job.date}
              isLast={index === experiences.length - 1}
            >
              <ul className="mt-4 space-y-2">
                {job.description.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2"></span>
                    <p className="text-muted-foreground">{item}</p>
                  </li>
                ))}
              </ul>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
};

export default ExperienceSection;
