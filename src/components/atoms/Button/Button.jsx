import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium',
  className = '',
  ...props 
}) => {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer inline-block text-center';
  
  const variants = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500',
    secondary: 'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 focus:ring-indigo-500',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500'
  };

  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  };

  // If className is provided, use it as-is (for custom styling), otherwise use variants
  const classes = className ? 
    `${baseClasses} ${className}` : 
    `${baseClasses} ${variants[variant]} ${sizes[size]}`;

  return (
    <button
      className={classes}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
