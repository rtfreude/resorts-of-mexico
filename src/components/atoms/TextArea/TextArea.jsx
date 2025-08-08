import React from 'react';

const TextArea = ({ 
  label, 
  id, 
  placeholder, 
  rows = 4,
  className = '',
  error,
  ...props 
}) => {
  const textAreaClasses = `w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ${
    error ? 'border-red-300' : 'border-gray-300'
  } ${className}`;

  return (
    <div className="space-y-1">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <textarea
        id={id}
        rows={rows}
        className={textAreaClasses}
        placeholder={placeholder}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default TextArea;
