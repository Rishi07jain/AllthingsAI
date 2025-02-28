import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ToolCard from './ToolCard';
import { AITool } from '../types';

interface ToolsSectionProps {
  tools: AITool[];
  filteredTools: AITool[];
  selectedCategory: string | null;
}

const ToolsSection: React.FC<ToolsSectionProps> = ({ 
  tools, 
  filteredTools,
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

  const displayedTools = selectedCategory ? filteredTools : tools;

  return (
    <section id="tools" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent"
          >
            Discover AI Tools
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Explore our curated collection of AI tools to enhance your productivity and creativity
          </motion.p>
        </div>

        {displayedTools.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No tools found matching your criteria.</p>
          </div>
        ) : (
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {displayedTools.map((tool) => (
              <motion.div key={tool.id} variants={itemVariants}>
                <ToolCard tool={tool} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ToolsSection;