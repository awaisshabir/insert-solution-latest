import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiCode, HiCloud, HiCog, HiChartBar } from 'react-icons/hi';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: <HiChartBar className="w-12 h-12" />,
      title: 'Healthcare Solutions',
      description: 'Comprehensive healthcare management systems, EMR/EHR solutions, and patient engagement platforms tailored for modern healthcare providers.',
      features: ['Electronic Medical Records', 'Patient Management', 'Telemedicine Integration', 'Compliance & Security'],
      gradient: 'from-primary to-primary/80',
    },
    {
      icon: <HiCode className="w-12 h-12" />,
      title: 'Custom Development',
      description: 'Bespoke software development services using cutting-edge technologies to build scalable, secure, and high-performance applications.',
      features: ['Web Applications', 'Mobile Apps', 'Desktop Software', 'API Development'],
      gradient: 'from-secondary to-secondary/80',
    },
    {
      icon: <HiCloud className="w-12 h-12" />,
      title: 'Cloud Services',
      description: 'Cloud migration, infrastructure setup, and managed cloud services to help businesses scale efficiently and reduce operational costs.',
      features: ['Cloud Migration', 'Infrastructure Setup', 'DevOps Solutions', 'Cloud Security'],
      gradient: 'from-accent to-accent/80',
    },
    {
      icon: <HiCog className="w-12 h-12" />,
      title: 'System Integration',
      description: 'Seamless integration of disparate systems, third-party APIs, and legacy applications to create unified business ecosystems.',
      features: ['API Integration', 'Legacy System Modernization', 'Data Migration', 'Workflow Automation'],
      gradient: 'from-primary/70 to-secondary/70',
    },
  ];

  return (
    <section id="services" ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your business and drive sustainable growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center text-white mb-6`}
              >
                {service.icon}
              </motion.div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-3">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 text-primary font-semibold hover:text-secondary transition-colors duration-200 flex items-center gap-2"
              >
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
