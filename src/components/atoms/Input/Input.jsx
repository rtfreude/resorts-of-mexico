import React from 'react';

const Input = ({ 
  label, 
  id, 
  type = 'text', 
  placeholder, 
  className = '',
  error,
  ...props 
}) => {
  const inputClasses = `w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ${
    error ? 'border-red-300' : 'border-gray-300'
  } ${className}`;

  return (
    <div className="space-y-1">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        className={inputClasses}
        placeholder={placeholder}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default Input;
