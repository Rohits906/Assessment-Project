import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Clock, Users, Zap } from 'lucide-react';

const reasons = [
  {
    icon: <Award className="w-12 h-12 text-blue-600" />,
    title: 'Expertise',
    description: 'Over 10 years of experience in delivering IT solutions.'
  },
  {
    icon: <Clock className="w-12 h-12 text-blue-600" />,
    title: '24/7 Support',
    description: 'Round-the-clock technical support and maintenance.'
  },
  {
    icon: <Users className="w-12 h-12 text-blue-600" />,
    title: 'Dedicated Team',
    description: 'Skilled professionals committed to your success.'
  },
  {
    icon: <Zap className="w-12 h-12 text-blue-600" />,
    title: 'Fast Delivery',
    description: 'Quick implementation without compromising quality.'
  }
];

export default function WhyUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="why-us" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
          <p className="text-xl text-gray-600">
            What sets us apart from the competition
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 bg-white rounded-lg shadow-lg"
            >
              <div className="mb-4 flex justify-center">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}