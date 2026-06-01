import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const DevelopmentProcess = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const steps = [
    {
      number: 1,
      title: 'Discovery & Planning',
      description: 'Understanding your requirements, business goals, and technical needs through detailed consultations and analysis.',
      icon: '🔍',
      color: 'from-blue-500 to-blue-600',
    },
    {
      number: 2,
      title: 'Design & Architecture',
      description: 'Creating intuitive UI/UX designs and robust system architecture aligned with industry best practices.',
      icon: '🎨',
      color: 'from-purple-500 to-purple-600',
    },
    {
      number: 3,
      title: 'Development',
      description: 'Agile development with regular sprints, code reviews, and continuous integration for quality assurance.',
      icon: '💻',
      color: 'from-green-500 to-green-600',
    },
    {
      number: 4,
      title: 'Testing & QA',
      description: 'Comprehensive testing including functional, security, performance, and user acceptance testing.',
      icon: '🧪',
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      number: 5,
      title: 'Deployment',
      description: 'Smooth deployment to production with minimal downtime and comprehensive monitoring setup.',
      icon: '🚀',
      color: 'from-red-500 to-red-600',
    },
    {
      number: 6,
      title: 'Support & Maintenance',
      description: 'Ongoing support, updates, and enhancements to ensure optimal performance and user satisfaction.',
      icon: '🛟',
      color: 'from-cyan-500 to-cyan-600',
    },
  ];

  return (
    <section id="process" ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Development Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven methodology that ensures successful project delivery from concept to deployment
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent transform -translate-x-1/2"></div>

          {/* Timeline Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
                }
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`lg:grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Left/Right Content */}
                <div className={index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12 lg:col-start-2'}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <div className={`flex items-center gap-4 ${index % 2 === 0 ? 'lg:justify-end' : ''} mb-4`}>
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center text-3xl`}
                      >
                        {step.icon}
                      </motion.div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </div>

                {/* Timeline Node */}
                <div className="hidden lg:flex justify-center items-center absolute left-1/2 transform -translate-x-1/2">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    whileHover={{ scale: 1.5 }}
                    className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10`}
                  >
                    {step.number}
                  </motion.div>
                </div>

                {/* Mobile Number */}
                <div className="lg:hidden mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg`}
                  >
                    {step.number}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;
