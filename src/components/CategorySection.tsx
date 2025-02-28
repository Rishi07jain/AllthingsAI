import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Category } from '../types';
import { getCategoryIcon } from '../data/tools';

interface CategorySectionProps {
  categories: Category[];
  onSelectCategory: (categoryId: string | null) => void;
  selectedCategory: string | null;
}

const CategorySection: React.FC<CategorySectionProps> = ({ 
  categories, 
  onSelectCategory,
  selectedCategory 
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="categories" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent"
          >
            Browse by Category
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Explore AI tools organized by functionality to find exactly what you need for your project
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`card p-4 cursor-pointer ${
              selectedCategory === null ? 'ring-2 ring-primary-500 bg-primary-50' : ''
            }`}
            onClick={() => onSelectCategory(null)}
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center mb-3">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <motion.div className="text-white">
                    All
                  </motion.div>
                </motion.div>
              </div>
              <h3 className="font-semibold">All Categories</h3>
            </div>
          </motion.div>

          {categories.map((category) => {
            const IconComponent = getCategoryIcon(category.icon);
            
            return (
              <motion.div
                key={category.id}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`card p-4 cursor-pointer ${
                  selectedCategory === category.id ? 'ring-2 ring-primary-500 bg-primary-50' : ''
                }`}
                onClick={() => onSelectCategory(category.id)}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-600 flex items-center justify-center mb-3">
                    <IconComponent className="text-white h-6 w-6" />
                  </div>
                  <h3 className="font-semibold">{category.name}</h3>
                  <p className="text-xs text-gray-500 mt-1 hidden md:block">{category.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default CategorySection;