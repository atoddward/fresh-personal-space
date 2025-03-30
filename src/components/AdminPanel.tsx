
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";

// Default content that would come from localStorage or a backend in a real app
const defaultContent = {
  hero: {
    name: "John Doe",
    title: "Full-Stack Developer & Designer",
    bio: "Building beautiful, user-centered digital experiences with a focus on performance and accessibility."
  },
  about: {
    bio: "I am a passionate full-stack developer with expertise in modern web technologies. I focus on creating elegant solutions to complex problems."
  },
  contact: {
    email: "john@example.com",
    phone: "+1 (555) 123-4567"
  }
};

// Load content from localStorage or use defaults
const loadContent = () => {
  const savedContent = localStorage.getItem("siteContent");
  return savedContent ? JSON.parse(savedContent) : defaultContent;
};

// Form schema for hero section
const heroFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  title: z.string().min(5, { message: "Title must be at least 5 characters." }),
  bio: z.string().min(10, { message: "Bio must be at least 10 characters." })
});

// Form schema for about section
const aboutFormSchema = z.object({
  bio: z.string().min(10, { message: "Bio must be at least 10 characters." })
});

// Form schema for contact section
const contactFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." })
});

const AdminPanel = () => {
  const [content, setContent] = useState(loadContent());
  
  // Hero form setup
  const heroForm = useForm<z.infer<typeof heroFormSchema>>({
    resolver: zodResolver(heroFormSchema),
    defaultValues: content.hero
  });

  // About form setup
  const aboutForm = useForm<z.infer<typeof aboutFormSchema>>({
    resolver: zodResolver(aboutFormSchema),
    defaultValues: content.about
  });

  // Contact form setup
  const contactForm = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: content.contact
  });

  // Submit handler for hero form
  const onHeroSubmit = (values: z.infer<typeof heroFormSchema>) => {
    const newContent = { ...content, hero: values };
    setContent(newContent);
    localStorage.setItem("siteContent", JSON.stringify(newContent));
    toast.success("Hero section updated successfully!");
  };

  // Submit handler for about form
  const onAboutSubmit = (values: z.infer<typeof aboutFormSchema>) => {
    const newContent = { ...content, about: values };
    setContent(newContent);
    localStorage.setItem("siteContent", JSON.stringify(newContent));
    toast.success("About section updated successfully!");
  };

  // Submit handler for contact form
  const onContactSubmit = (values: z.infer<typeof contactFormSchema>) => {
    const newContent = { ...content, contact: values };
    setContent(newContent);
    localStorage.setItem("siteContent", JSON.stringify(newContent));
    toast.success("Contact section updated successfully!");
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Admin Panel</h1>
      
      <Tabs defaultValue="hero" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="hero">Hero Section</TabsTrigger>
          <TabsTrigger value="about">About Section</TabsTrigger>
          <TabsTrigger value="contact">Contact Section</TabsTrigger>
        </TabsList>
        
        <TabsContent value="hero">
          <Form {...heroForm}>
            <form onSubmit={heroForm.handleSubmit(onHeroSubmit)} className="space-y-6">
              <FormField
                control={heroForm.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={heroForm.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={heroForm.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bio</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button type="submit">Save Changes</Button>
            </form>
          </Form>
        </TabsContent>
        
        <TabsContent value="about">
          <Form {...aboutForm}>
            <form onSubmit={aboutForm.handleSubmit(onAboutSubmit)} className="space-y-6">
              <FormField
                control={aboutForm.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bio</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button type="submit">Save Changes</Button>
            </form>
          </Form>
        </TabsContent>
        
        <TabsContent value="contact">
          <Form {...contactForm}>
            <form onSubmit={contactForm.handleSubmit(onContactSubmit)} className="space-y-6">
              <FormField
                control={contactForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} type="email" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={contactForm.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button type="submit">Save Changes</Button>
            </form>
          </Form>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminPanel;
