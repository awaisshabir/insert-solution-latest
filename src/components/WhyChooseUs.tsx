import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';

const AnimatedCounter = ({ value, suffix = '' }: { value: number; suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const display = useTransform(springValue, (latest) => Math.round(latest) + suffix);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
};

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { value: 500, suffix: '+', label: 'Projects Completed', icon: '🚀' },
    { value: 98, suffix: '%', label: 'Client Satisfaction', icon: '⭐' },
    { value: 15, suffix: '+', label: 'Years Experience', icon: '📅' },
    { value: 100, suffix: '+', label: 'Team Members', icon: '👥' },
  ];

  const reasons = [
    {
      title: 'Expert Team',
      description: 'Highly skilled professionals with deep industry knowledge and technical expertise',
      icon: '👨‍💻',
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control processes ensuring flawless delivery',
      icon: '✅',
    },
    {
      title: 'On-Time Delivery',
      description: 'Proven track record of delivering projects on schedule and within budget',
      icon: '⏰',
    },
    {
      title: 'Ongoing Support',
      description: '24/7 technical support and maintenance to keep your systems running smoothly',
      icon: '🛟',
    },
    {
      title: 'Innovative Solutions',
      description: 'Cutting-edge technology and creative approaches to solve complex challenges',
      icon: '💡',
    },
    {
      title: 'Competitive Pricing',
      description: 'Transparent pricing models offering excellent value for your investment',
      icon: '💰',
    },
  ];

  return (
    <section id="why-choose-us" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by leading organizations for excellence, innovation, and reliable partnership
          </p>
        </motion.div>

        {/* Animated Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="text-5xl mb-4"
              >
                {stat.icon}
              </motion.div>
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
