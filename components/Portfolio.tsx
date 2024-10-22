"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';

const projects = [
  {
    title: 'E-commerce Mobile App',
    category: 'Mobile',
    image: 'https://source.unsplash.com/random/800x600?mobile,app',
    description: 'A feature-rich e-commerce mobile application with seamless user experience and secure payment integration.'
  },
  {
    title: 'AI-powered Analytics Dashboard',
    category: 'Web & AI',
    image: 'https://source.unsplash.com/random/800x600?dashboard,analytics',
    description: 'An intelligent web-based analytics dashboard that provides actionable insights using advanced AI algorithms.'
  },
  {
    title: 'IoT Smart Home System',
    category: 'IoT & Mobile',
    image: 'https://source.unsplash.com/random/800x600?smart,home',
    description: 'An integrated IoT solution for smart homes, controllable via a user-friendly mobile application.'
  },
  {
    title: 'Cloud-based CRM',
    category: 'Web & Cloud',
    image: 'https://source.unsplash.com/random/800x600?crm,cloud',
    description: 'A comprehensive cloud-based Customer Relationship Management system with advanced reporting capabilities.'
  },
  {
    title: 'AI Chatbot for Customer Service',
    category: 'AI',
    image: 'https://source.unsplash.com/random/800x600?chatbot,ai',
    description: 'An intelligent chatbot powered by natural language processing to enhance customer service efficiency.'
  },
  {
    title: 'Blockchain-based Supply Chain',
    category: 'Blockchain',
    image: 'https://source.unsplash.com/random/800x600?blockchain,supply',
    description: 'A secure and transparent supply chain management system built on blockchain technology.'
  }
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Our Portfolio
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={600}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button variant="secondary" onClick={() => setSelectedProject(project)}>
                  View Project
                </Button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-sm">
                <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedProject?.title}</DialogTitle>
            <DialogDescription>{selectedProject?.category}</DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <Image
              src={selectedProject?.image}
              alt={selectedProject?.title}
              width={800}
              height={600}
              className="w-full h-64 object-cover rounded-lg"
            />
            <p className="mt-4">{selectedProject?.description}</p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Portfolio;