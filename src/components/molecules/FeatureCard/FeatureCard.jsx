import React from 'react';

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  colorScheme = 'blue',
  className = '' 
}) => {
  const colorSchemes = {
    blue: {
      bg: 'bg-blue-100',
      icon: 'bg-blue-600'
    },
    green: {
      bg: 'bg-green-100',
      icon: 'bg-green-600'
    },
    purple: {
      bg: 'bg-purple-100',
      icon: 'bg-purple-600'
    }
  };

  const colors = colorSchemes[colorScheme] || colorSchemes.blue;

  return (
    <div className={`text-center p-6 bg-white rounded-lg shadow-md ${className}`}>
      <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center mx-auto mb-4`}>
        <div className={`w-6 h-6 ${colors.icon} rounded`}></div>
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
