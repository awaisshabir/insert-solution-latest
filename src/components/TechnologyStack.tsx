import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  SiReact, SiAngular, SiVuedotjs, SiNodedotjs, 
  SiPython, SiDotnet, SiMongodb, SiPostgresql, 
  SiMysql, SiDocker, SiKubernetes, SiTailwindcss, SiTypescript
} from 'react-icons/si';
import { HiCloud } from 'react-icons/hi';

const TechnologyStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const technologies = {
    'Frontend': [
      { name: 'React', icon: <SiReact />, color: 'text-cyan-500' },
      { name: 'Angular', icon: <SiAngular />, color: 'text-red-600' },
      { name: 'Vue.js', icon: <SiVuedotjs />, color: 'text-green-500' },
      { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-600' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-cyan-400' },
    ],
    'Backend': [
      { name: 'Node.js', icon: <SiNodedotjs />, color: 'text-green-600' },
      { name: 'Python', icon: <SiPython />, color: 'text-blue-500' },
      { name: '.NET', icon: <SiDotnet />, color: 'text-purple-600' },
    ],
    'Database': [
      { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-500' },
      { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'text-blue-600' },
      { name: 'MySQL', icon: <SiMysql />, color: 'text-blue-700' },
    ],
    'Cloud & DevOps': [
      { name: 'AWS', icon: <HiCloud />, color: 'text-orange-500' },
      { name: 'Azure', icon: <HiCloud />, color: 'text-blue-600' },
      { name: 'Google Cloud', icon: <HiCloud />, color: 'text-blue-500' },
      { name: 'Docker', icon: <SiDocker />, color: 'text-blue-600' },
      { name: 'Kubernetes', icon: <SiKubernetes />, color: 'text-blue-700' },
    ],
  };

  return (
    <section id="technology" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Technology <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Stack</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We leverage the latest technologies and frameworks to build robust, scalable, and future-proof solutions
          </p>
        </motion.div>

        <div className="space-y-12">
          {Object.entries(technologies).map(([category, techs], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {category}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {techs.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.2 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -10 }}
                    className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`text-6xl ${tech.color} mb-4`}
                    >
                      {tech.icon}
                    </motion.div>
                    <h4 className="text-lg font-semibold text-gray-900 text-center">
                      {tech.name}
                    </h4>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">And Many More...</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Our technology expertise extends to hundreds of tools, frameworks, and platforms. We stay updated with the latest industry trends to provide cutting-edge solutions for your business.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologyStack;
