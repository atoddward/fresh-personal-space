
import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product management, cart functionality, payments, and user accounts.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#",
    details: {
      challenge: "Building a scalable e-commerce solution that could handle high traffic and complex product relationships.",
      solution: "Implemented a microservices architecture with separate services for product catalog, user management, orders, and payments. Used Redis for caching and optimized database queries.",
      outcome: "Platform successfully handles 10,000+ daily users with 99.9% uptime. Increased conversion rates by 25% through optimized checkout flow.",
      technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "Redis", "AWS", "Stripe API", "Jest", "GitHub Actions"],
    },
  },
  {
    id: 2,
    title: "Healthcare Dashboard",
    description: "An analytics dashboard for healthcare providers to track patient data, appointments, and medical records.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "TypeScript", "GraphQL", "AWS"],
    link: "#",
    details: {
      challenge: "Creating a secure, HIPAA-compliant dashboard with real-time data visualization that integrates with existing healthcare systems.",
      solution: "Built a React frontend with TypeScript for type safety, GraphQL for efficient data fetching, and implemented end-to-end encryption for all sensitive data.",
      outcome: "Reduced report generation time by 70%, enabling healthcare providers to make faster decisions. System successfully deployed across 12 clinics.",
      technologies: ["React", "TypeScript", "Apollo GraphQL", "AWS Lambda", "DynamoDB", "Docker", "D3.js", "Auth0", "Cypress", "CircleCI"],
    },
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, file sharing, and team workspaces.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Firebase", "Material UI", "PWA"],
    link: "#",
    details: {
      challenge: "Building a responsive, cross-platform task management solution that works offline and syncs seamlessly.",
      solution: "Developed a Progressive Web App with React that uses Firebase for real-time updates and offline capabilities. Implemented a clean, intuitive UI with Material Design.",
      outcome: "App has 50,000+ monthly active users and 4.8/5 star rating on product review sites. Featured in several productivity blogs.",
      technologies: ["React", "Firebase", "Firestore", "Cloud Functions", "Material UI", "Service Workers", "IndexedDB", "Jest", "react-testing-library", "GitLab CI"],
    },
  },
  {
    id: 4,
    title: "Financial Analytics Tool",
    description: "A comprehensive financial analytics tool for investors to track portfolios, analyze market trends, and receive alerts.",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80",
    tags: ["Vue.js", "Python", "Django", "TensorFlow"],
    link: "#",
    details: {
      challenge: "Creating accurate financial predictions and visualizations from complex market data while ensuring low latency.",
      solution: "Built a Django backend with Python for data processing and machine learning models, paired with a responsive Vue.js frontend for interactive visualizations.",
      outcome: "Tool has helped users increase portfolio performance by an average of 18%. Processes data from 50+ financial sources in real-time.",
      technologies: ["Vue.js", "Vuex", "Python", "Django", "TensorFlow", "PostgreSQL", "Celery", "Redis", "Chart.js", "Docker", "Kubernetes", "AWS"],
    },
  },
];

const ProjectsSection = () => {
  const [openDialogId, setOpenDialogId] = useState<number | null>(null);

  return (
    <section id="projects" className="section-padding">
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="slide-up overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="px-6 pb-6 pt-0 flex justify-between">
                <Button variant="outline" asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Live
                  </a>
                </Button>
                
                <Dialog open={openDialogId === project.id} onOpenChange={(open) => setOpenDialogId(open ? project.id : null)}>
                  <DialogTrigger asChild>
                    <Button variant="ghost">View Details</Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                      <DialogDescription className="text-muted-foreground mt-2">
                        {project.description}
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="mt-6 space-y-6">
                      <div>
                        <h4 className="font-semibold text-lg mb-2">The Challenge</h4>
                        <p className="text-muted-foreground">{project.details.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-lg mb-2">The Solution</h4>
                        <p className="text-muted-foreground">{project.details.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-lg mb-2">The Outcome</h4>
                        <p className="text-muted-foreground">{project.details.outcome}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {project.details.technologies.map((tech) => (
                            <Badge key={tech} variant="outline">{tech}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
