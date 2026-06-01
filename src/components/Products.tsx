import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const products = [
    {
      name: 'Cureline',
      tagline: 'Complete Healthcare Management System',
      description: 'A comprehensive healthcare platform that streamlines patient management, medical records, appointments, billing, and clinical workflows for hospitals and clinics.',
      features: [
        'Electronic Health Records (EHR)',
        'Patient Portal & Engagement',
        'Appointment Scheduling',
        'Billing & Insurance Management',
        'Laboratory & Pharmacy Integration',
        'Reporting & Analytics',
      ],
      icon: '🏥',
      gradient: 'from-primary to-blue-600',
      stats: { users: '50K+', hospitals: '200+', uptime: '99.9%' },
    },
    {
      name: 'Tibbiq',
      tagline: 'Smart Healthcare Solutions',
      description: 'An intelligent healthcare platform powered by AI and machine learning to enhance patient care, optimize operations, and improve healthcare outcomes.',
      features: [
        'AI-Powered Diagnostics',
        'Telemedicine Platform',
        'Remote Patient Monitoring',
        'Clinical Decision Support',
        'Health Data Analytics',
        'Mobile Health Apps',
      ],
      icon: '🩺',
      gradient: 'from-secondary to-cyan-600',
      stats: { patients: '100K+', consultations: '500K+', satisfaction: '95%' },
    },
    {
      name: 'Invex POS',
      tagline: 'Next-Gen Point of Sale System',
      description: 'A powerful cloud-based POS solution designed for retail, pharmacy, and healthcare facilities with inventory management, billing, and analytics capabilities.',
      features: [
        'Real-time Inventory Tracking',
        'Multi-location Support',
        'Sales & Analytics Dashboard',
        'Payment Gateway Integration',
        'Customer Loyalty Programs',
        'Offline Mode Support',
      ],
      icon: '🛒',
      gradient: 'from-accent to-green-600',
      stats: { transactions: '1M+', stores: '500+', growth: '150%' },
    },
  ];

  return (
    <section id="products" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry-leading software products trusted by healthcare providers and businesses worldwide
          </p>
        </motion.div>

        <div className="space-y-12">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Product Info */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8"
                >
                  <div className="text-5xl mb-4">{product.icon}</div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-lg text-primary font-semibold mb-4">
                    {product.tagline}
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(product.stats).map(([key, value]) => (
                      <div key={key} className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="text-2xl font-bold text-primary">{value}</div>
                        <div className="text-sm text-gray-600 capitalize">{key.replace('_', ' ')}</div>
                      </div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`bg-gradient-to-r ${product.gradient} text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    Learn More About {product.name}
                  </motion.button>
                </motion.div>
              </div>

              {/* Product Features */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="space-y-4">
                  {product.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      animate={
                        isInView
                          ? { opacity: 1, x: 0 }
                          : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }
                      }
                      transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-primary"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 bg-gradient-to-r ${product.gradient} rounded-lg flex items-center justify-center text-white font-bold`}>
                          {idx + 1}
                        </div>
                        <span className="text-gray-800 font-medium">{feature}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
