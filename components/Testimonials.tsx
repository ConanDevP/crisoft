"use client"

import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const testimonials = [
  {
    name: 'John Doe',
    role: 'CEO, TechCorp',
    content: 'Crisoft delivered an outstanding mobile app that exceeded our expectations. Their team\'s expertise and professionalism were evident throughout the project.',
    avatar: 'https://source.unsplash.com/random/100x100?portrait,man'
  },
  {
    name: 'Jane Smith',
    role: 'CTO, InnovateTech',
    content: 'The AI solution provided by Crisoft has revolutionized our data analysis process. We\'ve seen a significant improvement in our decision-making capabilities.',
    avatar: 'https://source.unsplash.com/random/100x100?portrait,woman'
  },
  {
    name: 'Mike Johnson',
    role: 'Founder, StartupX',
    content: 'Working with Crisoft on our web application was a pleasure. They understood our vision and brought it to life with their technical expertise.',
    avatar: 'https://source.unsplash.com/random/100x100?portrait,man,2'
  }
];

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          What Our Clients Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="italic">&ldquo;{testimonial.content}&rdquo;</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;