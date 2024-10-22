"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from './ui/button';

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 mb-10 lg:mb-0"
          >
            <Image
              src="https://source.unsplash.com/random/800x600?team,technology"
              alt="Crisoft Team"
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/2 lg:pl-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Crisoft</h2>
            <p className="text-lg mb-6">
              Crisoft is a leading software development company specializing in cutting-edge solutions for businesses worldwide. With a team of passionate experts, we deliver innovative mobile, web, and AI applications that drive growth and efficiency.
            </p>
            <p className="text-lg mb-6">
              Our mission is to empower organizations with technology that transforms ideas into reality. We pride ourselves on our commitment to quality, creativity, and client satisfaction.
            </p>
            <Button size="lg">Learn More About Us</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;