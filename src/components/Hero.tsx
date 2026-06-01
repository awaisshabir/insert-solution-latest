import { motion } from 'framer-motion';
import { HiArrowRight, HiPlay } from 'react-icons/hi';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="bg-gradient-to-r from-primary/10 to-secondary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                🚀 Transform Your Healthcare Business
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Enterprise Healthcare
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {' '}Solutions{' '}
              </span>
              for Modern Businesses
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              We deliver cutting-edge software solutions for healthcare, retail, and enterprise businesses. From custom development to cloud integration, we transform your vision into reality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(15, 76, 129, 0.2)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#contact')}
                className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 shadow-lg"
              >
                Get Started
                <HiArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#about')}
                className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-primary hover:text-white transition-colors duration-300"
              >
                <HiPlay className="w-5 h-5" />
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 grid grid-cols-3 gap-6"
            >
              <div>
                <h3 className="text-3xl font-bold text-primary">500+</h3>
                <p className="text-gray-600 text-sm">Projects Delivered</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary">98%</h3>
                <p className="text-gray-600 text-sm">Client Satisfaction</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary">15+</h3>
                <p className="text-gray-600 text-sm">Years Experience</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10"
            >
              <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 shadow-2xl">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 space-y-4">
                  {/* Dashboard Illustration */}
                  <div className="flex items-center gap-3 bg-white/20 rounded-lg p-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                      <span className="text-white text-xl">📊</span>
                    </div>
                    <div className="flex-1">
                      <div className="h-3 bg-white/40 rounded w-3/4 mb-2"></div>
                      <div className="h-2 bg-white/30 rounded w-1/2"></div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-white/20 rounded-lg p-4">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                      <span className="text-white text-xl">🏥</span>
                    </div>
                    <div className="flex-1">
                      <div className="h-3 bg-white/40 rounded w-2/3 mb-2"></div>
                      <div className="h-2 bg-white/30 rounded w-1/3"></div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-white/20 rounded-lg p-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <span className="text-white text-xl">💼</span>
                    </div>
                    <div className="flex-1">
                      <div className="h-3 bg-white/40 rounded w-4/5 mb-2"></div>
                      <div className="h-2 bg-white/30 rounded w-2/5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, 15, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -right-6 bg-accent text-white w-24 h-24 rounded-2xl flex items-center justify-center text-3xl shadow-xl"
            >
              ⚡
            </motion.div>

            <motion.div
              animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-6 bg-secondary text-white w-20 h-20 rounded-2xl flex items-center justify-center text-2xl shadow-xl"
            >
              🚀
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
