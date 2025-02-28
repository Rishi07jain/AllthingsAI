import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Star, Zap } from 'lucide-react';
import { AITool } from '../types';

interface ToolCardProps {
  tool: AITool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="card h-full flex flex-col"
    >
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center">
            <img 
              src={tool.logo} 
              alt={`${tool.name} logo`} 
              className="w-10 h-10 object-contain mr-3"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://via.placeholder.com/40?text=' + tool.name.charAt(0);
              }}
            />
            <h3 className="font-bold text-lg">{tool.name}</h3>
          </div>
          <div className="flex space-x-1">
            {tool.isPopular && (
              <div className="flex items-center bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                <Star className="h-3 w-3 mr-1" />
                <span>Popular</span>
              </div>
            )}
            {tool.isNew && (
              <div className="flex items-center bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                <Zap className="h-3 w-3 mr-1" />
                <span>New</span>
              </div>
            )}
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 flex-grow">{tool.description}</p>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {tool.categories.map((categoryId) => (
              <span 
                key={categoryId} 
                className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full"
              >
                {categoryId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </span>
            ))}
          </div>
          
          <a 
            href={tool.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary w-full flex items-center justify-center"
          >
            <span>Visit Website</span>
            <ExternalLink className="h-4 w-4 ml-2" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ToolCard;