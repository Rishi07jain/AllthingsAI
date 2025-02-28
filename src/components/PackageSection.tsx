import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Package, AITool } from '../types';
import { getPackageIcon } from '../data/tools';

interface PackageSectionProps {
  packages: Package[];
  tools: AITool[];
}

const PackageSection: React.FC<PackageSectionProps> = ({ packages, tools }) => {
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

  // Function to get tool details by ID
  const getToolById = (id: string) => {
    return tools.find(tool => tool.id === id);
  };

  return (
    <section id="packages" className="py-16 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent"
          >
            AI Tool Packages
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Curated collections of AI tools for specific use cases and workflows
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {packages.map((pkg) => {
            const IconComponent = getPackageIcon(pkg.icon);
            
            return (
              <motion.div
                key={pkg.id}
                variants={itemVariants}
                className="glass-card p-6 md:p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-600 flex items-center justify-center mr-4">
                    <IconComponent className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{pkg.name}</h3>
                    <p className="text-gray-600">{pkg.description}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {pkg.tools.map((toolId) => {
                    const tool = getToolById(toolId);
                    if (!tool) return null;
                    
                    return (
                      <motion.div 
                        key={toolId}
                        whileHover={{ x: 5 }}
                        className="flex items-center p-3 bg-white rounded-lg shadow-sm border border-gray-100"
                      >
                        <img 
                          src={tool.logo} 
                          alt={`${tool.name} logo`} 
                          className="w-8 h-8 object-contain mr-3"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/32?text=' + tool.name.charAt(0);
                          }}
                        />
                        <div className="flex-grow">
                          <h4 className="font-medium">{tool.name}</h4>
                          <p className="text-xs text-gray-500">{tool.description}</p>
                        </div>
                        <a 
                          href={tool.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                        >
                          Visit
                        </a>
                      </motion.div>
                    );
                  })}
                </div>
                
                {pkg.id === 'hackathon' && (
                  <div className="mt-6 p-4 bg-primary-50 rounded-lg border border-primary-100">
                    <h4 className="font-medium text-primary-700 mb-2">Perfect for 24-hour Hackathons</h4>
                    <p className="text-sm text-gray-600">
                      This package includes all the essential AI tools you need to build a complete project in a 24-hour hackathon, 
                      from ideation to deployment.
                    </p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default PackageSection;