"use client"

import { motion } from 'framer-motion';
import { Smartphone, Globe, Brain, Cloud } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';

const services = [
  {
    icon: <Smartphone className="h-12 w-12 mb-4 text-primary" />,
    title: 'Mobile Development',
    description: 'Crafting intuitive and powerful mobile applications for iOS and Android platforms.'
  },
  {
    icon: <Globe className="h-12 w-12 mb-4 text-primary" />,
    title: 'Web Development',
    description: 'Building responsive and scalable web applications using cutting-edge technologies.'
  },
  {
    icon: <Brain className="h-12 w-12 mb-4 text-primary" />,
    title: 'AI Solutions',
    description: 'Implementing intelligent systems and machine learning models to solve complex problems.'
  },
  {
    icon: <Cloud className="h-12 w-12 mb-4 text-primary" />,
    title: 'Cloud Services',
    description: 'Providing robust and secure cloud infrastructure and services for seamless operations.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full flex flex-col justify-between">
                <CardHeader>
                  <div className="flex justify-center">{service.icon}</div>
                  <CardTitle className="mb-2">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;