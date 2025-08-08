import React from 'react';

const Select = ({ 
  label, 
  id, 
  options = [], 
  placeholder = 'Select an option',
  className = '',
  error,
  ...props 
}) => {
  const selectClasses = `w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ${
    error ? 'border-red-300' : 'border-gray-300'
  } ${className}`;

  return (
    <div className="space-y-1">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <select
        id={id}
        className={selectClasses}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value || option}>
            {option.label || option}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default Select;
