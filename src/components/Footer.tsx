import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = {
    'Company': [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#about' },
      { name: 'Careers', href: '#contact' },
      { name: 'Contact', href: '#contact' },
    ],
    'Services': [
      { name: 'Healthcare Solutions', href: '#services' },
      { name: 'Custom Development', href: '#services' },
      { name: 'Cloud Services', href: '#services' },
      { name: 'System Integration', href: '#services' },
    ],
    'Products': [
      { name: 'Cureline', href: '#products' },
      { name: 'Tibbiq', href: '#products' },
      { name: 'Invex POS', href: '#products' },
    ],
    'Resources': [
      { name: 'Blog', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'Support', href: '#contact' },
      { name: 'Privacy Policy', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: <FaFacebookF />, href: '#', color: 'hover:bg-blue-600' },
    { icon: <FaTwitter />, href: '#', color: 'hover:bg-sky-500' },
    { icon: <FaLinkedinIn />, href: '#', color: 'hover:bg-blue-700' },
    { icon: <FaInstagram />, href: '#', color: 'hover:bg-pink-600' },
    { icon: <FaGithub />, href: '#', color: 'hover:bg-gray-800' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mb-4"
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Insert Solutions
              </h3>
            </motion.div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transforming healthcare and business operations through innovative technology solutions.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center ${social.color} transition-colors duration-300`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-lg font-bold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <motion.button
                      onClick={() => scrollToSection(link.href)}
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-2xl">
            <h4 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Get the latest updates on healthcare technology and industry insights.
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary to-secondary px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Insert Solutions. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms of Service
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Cookie Policy
            </motion.a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-primary to-secondary text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center z-40 hover:shadow-xl transition-shadow duration-300"
      >
        ↑
      </motion.button>
    </footer>
  );
};

export default Footer;
