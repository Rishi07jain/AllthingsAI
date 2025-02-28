import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import ToolsSection from './components/ToolsSection';
import PackageSection from './components/PackageSection';
import Footer from './components/Footer';
import { aiTools, categories, packages } from './data/tools';
import { AITool } from './types';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTools, setFilteredTools] = useState<AITool[]>(aiTools);

  useEffect(() => {
    // Filter tools based on search query and selected category
    const filtered = aiTools.filter((tool) => {
      const matchesSearch = 
        searchQuery === '' || 
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = 
        selectedCategory === null || 
        tool.categories.includes(selectedCategory);
      
      return matchesSearch && matchesCategory;
    });
    
    setFilteredTools(filtered);
  }, [searchQuery, selectedCategory]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleCategorySelect = (categoryId: string | null) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onSearch={handleSearch} />
      
      <main className="flex-grow">
        <Hero />
        
        <CategorySection 
          categories={categories} 
          onSelectCategory={handleCategorySelect}
          selectedCategory={selectedCategory}
        />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory || 'all'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ToolsSection 
              tools={aiTools} 
              filteredTools={filteredTools}
              selectedCategory={selectedCategory}
            />
          </motion.div>
        </AnimatePresence>
        
        <PackageSection packages={packages} tools={aiTools} />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;