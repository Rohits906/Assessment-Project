import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ClipboardList, MessageSquare, Code, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: <ClipboardList className="w-12 h-12 text-blue-600" />,
    title: 'Requirements Gathering',
    description: 'We start by understanding your business needs and objectives.'
  },
  {
    icon: <MessageSquare className="w-12 h-12 text-blue-600" />,
    title: 'Consultation',
    description: 'Our experts analyze and propose the best solutions for your needs.'
  },
  {
    icon: <Code className="w-12 h-12 text-blue-600" />,
    title: 'Implementation',
    description: 'We execute the solution with precision and best practices.'
  },
  {
    icon: <CheckCircle className="w-12 h-12 text-blue-600" />,
    title: 'Support & Maintenance',
    description: 'Ongoing support to ensure your systems run smoothly.'
  }
];

export default function Process() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
          <p className="text-xl text-gray-600">
            A streamlined approach to delivering exceptional results
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mb-4 flex justify-center">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}