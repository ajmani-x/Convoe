import React from 'react';

export const Badge = ({ children, variant = 'success' }) => {
  const variants = {
    success: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    gray: 'bg-gray-100 text-gray-700 border-gray-200',
    info: 'bg-blue-100 text-blue-700 border-blue-200'
  };

  return (
    
      {children}
    
  );
};
