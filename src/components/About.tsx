import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiCheckCircle } from 'react-icons/hi';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    'ISO 9001:2015 Certified Company',
    'Trusted by 500+ Healthcare Organizations',
    'Award-winning Healthcare Solutions',
    'Experienced Team of 100+ Professionals',
    'Proven Track Record of Excellence',
    '24/7 Customer Support',
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Insert Solution</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading provider of enterprise healthcare and business solutions with over 15 years of excellence in software development and digital transformation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Empowering Businesses with Innovative Technology
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Insert Solution is a leading software development company specializing in healthcare technology, enterprise solutions, and cloud-based applications. We combine technical expertise with industry knowledge to deliver solutions that drive business growth and operational excellence.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our mission is to transform healthcare delivery through innovative technology solutions that improve patient outcomes, streamline operations, and reduce costs. We work closely with our clients to understand their unique challenges and deliver tailored solutions that exceed expectations.
            </p>

            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <HiCheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-6 text-white"
              >
                <div className="text-4xl mb-3">🎯</div>
                <h4 className="text-2xl font-bold mb-2">Mission</h4>
                <p className="text-white/90 text-sm">
                  Transform healthcare through innovative technology solutions
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl p-6 text-white mt-8"
              >
                <div className="text-4xl mb-3">👁️</div>
                <h4 className="text-2xl font-bold mb-2">Vision</h4>
                <p className="text-white/90 text-sm">
                  Be the leading healthcare technology partner globally
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-accent to-accent/80 rounded-2xl p-6 text-white"
              >
                <div className="text-4xl mb-3">⭐</div>
                <h4 className="text-2xl font-bold mb-2">Values</h4>
                <p className="text-white/90 text-sm">
                  Innovation, integrity, and excellence in everything we do
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-primary/70 to-secondary/70 rounded-2xl p-6 text-white mt-8"
              >
                <div className="text-4xl mb-3">🤝</div>
                <h4 className="text-2xl font-bold mb-2">Commitment</h4>
                <p className="text-white/90 text-sm">
                  Dedicated to client success and long-term partnerships
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
