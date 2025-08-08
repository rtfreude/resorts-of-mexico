import React from 'react';
import { Menu, X, Home, Info, Mail, Github } from 'lucide-react';
import { NavLink } from '../../molecules';

const Navigation = ({ 
  currentPage, 
  onNavigate, 
  isMenuOpen, 
  onToggleMenu 
}) => {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-indigo-600">Resorts of Mexico</h1>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink 
              icon={Home} 
              page="home" 
              currentPage={currentPage}
              onClick={onNavigate}
            >
              Home
            </NavLink>
            <NavLink 
              icon={Info} 
              page="about" 
              currentPage={currentPage}
              onClick={onNavigate}
            >
              About
            </NavLink>
            <NavLink 
              icon={Mail} 
              page="contact" 
              currentPage={currentPage}
              onClick={onNavigate}
            >
              Contact
            </NavLink>
            <a 
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={onToggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <NavLink 
              icon={Home} 
              page="home" 
              currentPage={currentPage}
              onClick={(page) => {
                onNavigate(page);
                onToggleMenu();
              }}
            >
              Home
            </NavLink>
            <NavLink 
              icon={Info} 
              page="about" 
              currentPage={currentPage}
              onClick={(page) => {
                onNavigate(page);
                onToggleMenu();
              }}
            >
              About
            </NavLink>
            <NavLink 
              icon={Mail} 
              page="contact" 
              currentPage={currentPage}
              onClick={(page) => {
                onNavigate(page);
                onToggleMenu();
              }}
            >
              Contact
            </NavLink>
            <a 
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
