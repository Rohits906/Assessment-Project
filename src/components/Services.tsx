import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cloud, Shield, Code, Database, Settings, Users } from 'lucide-react';

const services = [
  {
    icon: <Cloud className="w-12 h-12 text-blue-600" />,
    title: 'Cloud Solutions',
    description: 'Secure and scalable cloud infrastructure tailored to your needs.'
  },
  {
    icon: <Shield className="w-12 h-12 text-blue-600" />,
    title: 'Cybersecurity',
    description: 'Protect your business with advanced security measures and monitoring.'
  },
  {
    icon: <Code className="w-12 h-12 text-blue-600" />,
    title: 'Custom Development',
    description: 'Bespoke software solutions designed for your specific requirements.'
  },
  {
    icon: <Database className="w-12 h-12 text-blue-600" />,
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights for better decision-making.'
  },
  {
    icon: <Settings className="w-12 h-12 text-blue-600" />,
    title: 'IT Infrastructure',
    description: 'Optimize your IT infrastructure for maximum performance and reliability.'
  },
  {
    icon: <Users className="w-12 h-12 text-blue-600" />,
    title: 'IT Consulting',
    description: 'Strategic technology consulting to drive your business forward.'
  }
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">
            Comprehensive IT solutions to power your business growth
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}