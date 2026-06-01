import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Industries = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const industries = [
    {
      name: 'Healthcare',
      icon: '🏥',
      description: 'Hospitals, clinics, and medical facilities',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      name: 'Pharmaceuticals',
      icon: '💊',
      description: 'Drug manufacturers and distributors',
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      name: 'Retail & E-commerce',
      icon: '🛍️',
      description: 'Online and offline retail businesses',
      gradient: 'from-pink-500 to-pink-600',
    },
    {
      name: 'Financial Services',
      icon: '💰',
      description: 'Banks, insurance, and fintech',
      gradient: 'from-green-500 to-green-600',
    },
    {
      name: 'Education',
      icon: '🎓',
      description: 'Schools, universities, and e-learning',
      gradient: 'from-yellow-500 to-yellow-600',
    },
    {
      name: 'Manufacturing',
      icon: '🏭',
      description: 'Production and supply chain',
      gradient: 'from-gray-500 to-gray-600',
    },
    {
      name: 'Logistics',
      icon: '🚚',
      description: 'Transportation and warehousing',
      gradient: 'from-orange-500 to-orange-600',
    },
    {
      name: 'Hospitality',
      icon: '🏨',
      description: 'Hotels, restaurants, and tourism',
      gradient: 'from-red-500 to-red-600',
    },
  ];

  return (
    <section id="industries" ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Industries <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">We Serve</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering tailored technology solutions across diverse industries with deep domain expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -10 }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 bg-gradient-to-br ${industry.gradient} rounded-xl flex items-center justify-center text-3xl mb-4 mx-auto`}
                >
                  {industry.icon}
                </motion.div>
                <h3 className="text-lg font-bold text-gray-900 text-center mb-2">
                  {industry.name}
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  {industry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
