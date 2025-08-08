import React from 'react';

const NavLink = ({ 
  icon: Icon, 
  children, 
  page, 
  currentPage, 
  onClick,
  className = ''
}) => {
  const isActive = currentPage === page;
  
  const linkClasses = `flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
    isActive 
      ? 'bg-indigo-100 text-indigo-700' 
      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
  } ${className}`;

  return (
    <button
      onClick={() => onClick(page)}
      className={linkClasses}
    >
      <Icon className="w-4 h-4" />
      <span>{children}</span>
    </button>
  );
};

export default NavLink;
