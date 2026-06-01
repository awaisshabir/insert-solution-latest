import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Chief Medical Officer',
      company: 'HealthCare Plus',
      image: '👩‍⚕️',
      quote: 'Insert Solution transformed our hospital management system. Their expertise in healthcare technology is unmatched. The Cureline platform has significantly improved our operational efficiency.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      company: 'TechMed Solutions',
      image: '👨‍💼',
      quote: 'Working with Insert Solution was a game-changer for our business. Their development team delivered a robust, scalable solution that exceeded our expectations. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Director of Operations',
      company: 'Metro Clinic Network',
      image: '👩‍💼',
      quote: 'The Tibbiq platform has revolutionized how we manage patient care. The team at Insert Solution was professional, responsive, and delivered on time. Exceptional service!',
      rating: 5,
    },
    {
      name: 'David Thompson',
      role: 'VP Technology',
      company: 'PharmaCare Group',
      image: '👨‍💻',
      quote: 'Insert Solution helped us modernize our entire IT infrastructure. Their cloud migration expertise and ongoing support have been invaluable to our digital transformation journey.',
      rating: 5,
    },
    {
      name: 'Lisa Anderson',
      role: 'Practice Manager',
      company: 'City Medical Center',
      image: '👩',
      quote: 'The Invex POS system has streamlined our pharmacy operations significantly. Easy to use, reliable, and backed by excellent customer support. A fantastic investment for our business.',
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Client <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear what our satisfied clients have to say about working with us
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl"
            >
              {/* Stars */}
              <div className="flex justify-center gap-2 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-yellow-400 text-2xl"
                  >
                    ⭐
                  </motion.span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl lg:text-2xl text-gray-700 text-center mb-8 leading-relaxed italic">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              {/* Author */}
              <div className="flex flex-col items-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-4xl mb-4"
                >
                  {testimonials[currentIndex].image}
                </motion.div>
                <h4 className="text-xl font-bold text-gray-900">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-primary font-medium">
                  {testimonials[currentIndex].role}
                </p>
                <p className="text-gray-600">
                  {testimonials[currentIndex].company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="bg-white hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white text-primary w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
            >
              <HiChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Indicators */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-gradient-to-r from-primary to-secondary'
                      : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="bg-white hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white text-primary w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
            >
              <HiChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
