import React from 'react';

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  disabled = false,
  onClick,
  className = '',
  icon: Icon
}) => {
  const baseStyles = 'font-semibold rounded-2xl transition-all flex items-center justify-center gap-2';
  
  const variants = {
    primary: 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600 shadow-lg',
    secondary: 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50',
    white: 'bg-white text-emerald-700 hover:bg-emerald-50 border border-emerald-200'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-3 text-base',
    lg: 'px-6 py-4 text-lg'
  };

  return (
    
      {Icon && }
      {children}
    
  );
};
