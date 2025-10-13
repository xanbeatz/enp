import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({
  mobileMenuOpen,
  setMobileMenuOpen,
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <motion.header
      className={`sticky top-0 z-50 transition-all duration-300 bg-white shadow-md py-2`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold flex items-center">
              <img
                src="/logo.png"
                alt="Ekasi Noble Properties"
                className="h-14 mr-2"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a
              href="#"
              className="text-gray-900 hover:text-blue-600 transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-900 hover:text-blue-600 transition-colors"
            >
              About
            </a>
            <a
              href="#properties"
              className="text-gray-900 hover:text-blue-600 transition-colors"
            >
              Properties
            </a>
            <a
              href="#rent-to-own"
              className="text-gray-900 hover:text-blue-600 transition-colors"
            >
              Rent-to-Own
            </a>
            <a
              href="#gallery"
              className="text-gray-900 hover:text-blue-600 transition-colors"
            >
              Gallery
            </a>
            <a
              href="#events"
              className="text-gray-900 hover:text-blue-600 transition-colors"
            >
              Events
            </a>
            <a
              href="#faq"
              className="text-gray-900 hover:text-blue-600 transition-colors"
            >
              FAQ
            </a>
            <a
              href="#investment"
              className="text-gray-900 hover:text-blue-600 transition-colors"
            >
              Investment
            </a>
            <a
              href="#contact"
              className="text-gray-900 hover:text-blue-600 transition-colors"
            >
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:0115271978" 
              className="flex items-center hover:text-blue-600 transition-colors"
            >
              <Phone size={16} className="mr-2 text-blue-600" />
              <span className="text-gray-900">011 527 1978</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden bg-white border-t border-gray-200"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-2">
            <nav className="flex flex-col space-y-3 py-3">
              <a
                href="#"
                className="text-gray-900 hover:text-blue-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-900 hover:text-blue-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#properties"
                className="text-gray-900 hover:text-blue-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Properties
              </a>
              <a
                href="#rent-to-own"
                className="text-gray-900 hover:text-blue-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Rent-to-Own
              </a>
              <a
                href="#gallery"
                className="text-gray-900 hover:text-blue-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </a>
              <a
                href="#events"
                className="text-gray-900 hover:text-blue-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Events
              </a>
              <a
                href="#faq"
                className="text-gray-900 hover:text-blue-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <a
                href="#investment"
                className="text-gray-900 hover:text-blue-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Investment
              </a>
              <a
                href="#contact"
                className="text-gray-900 hover:text-blue-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href="tel:0115271978"
                className="flex items-center text-gray-900 hover:text-blue-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone size={16} className="mr-2 text-blue-600" />
                <span>011 527 1978</span>
              </a>
            </nav>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;