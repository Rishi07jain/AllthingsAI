import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent mb-4"
            >
              AI Tools Hub
            </motion.div>
            <p className="text-gray-400 mb-4">
              Discover and integrate the best AI tools to supercharge your workflow and bring your ideas to life.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ y: -3 }}
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </motion.a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#categories" className="text-gray-400 hover:text-white transition-colors">Categories</a></li>
              <li><a href="#tools" className="text-gray-400 hover:text-white transition-colors">Tools</a></li>
              <li><a href="#packages" className="text-gray-400 hover:text-white transition-colors">Packages</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Submit a Tool</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} AI Tools Hub. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;