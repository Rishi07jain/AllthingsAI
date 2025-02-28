import React, { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavbarProps {
  onSearch: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-secondary-600 bg-clip-text text-transparent"
          >
            AI Tools Hub
          </motion.div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search AI tools..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 w-64 transition-all"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400 h-5 w-5" />
          </div>
          <a href="#categories" className="text-gray-700 hover:text-primary-600 transition-colors">Categories</a>
          <a href="#tools" className="text-gray-700 hover:text-primary-600 transition-colors">Tools</a>
          <a href="#packages" className="text-gray-700 hover:text-primary-600 transition-colors">Packages</a>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary"
          >
            Submit Tool
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white px-4 py-2 shadow-lg"
        >
          <div className="flex flex-col space-y-4 py-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search AI tools..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 w-full"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400 h-5 w-5" />
            </div>
            <a href="#categories" className="text-gray-700 py-2 border-b border-gray-100" onClick={toggleMenu}>Categories</a>
            <a href="#tools" className="text-gray-700 py-2 border-b border-gray-100" onClick={toggleMenu}>Tools</a>
            <a href="#packages" className="text-gray-700 py-2 border-b border-gray-100" onClick={toggleMenu}>Packages</a>
            <button className="btn btn-primary self-start">Submit Tool</button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;