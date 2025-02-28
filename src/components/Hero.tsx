import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 z-0"></div>
      
      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary-300/20 blur-3xl"
          animate={{ 
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-secondary-300/20 blur-3xl"
          animate={{ 
            x: [0, -40, 0],
            y: [0, -30, 0],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut" 
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-3 py-1 rounded-full bg-white shadow-sm border border-gray-200 mb-6"
          >
            <Sparkles className="h-4 w-4 text-secondary-500 mr-2" />
            <span className="text-sm font-medium">Discover the best AI tools for your next project</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-600 bg-clip-text text-transparent"
          >
            Explore the AI Tools Ecosystem
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8"
          >
            Find, compare, and integrate the perfect AI tools to supercharge your workflow and bring your ideas to life.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#tools"
              className="btn btn-primary px-8 py-3 text-lg"
            >
              Explore Tools
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#packages"
              className="btn bg-white text-primary-600 border border-primary-200 hover:bg-gray-50 px-8 py-3 text-lg"
            >
              View Packages
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;