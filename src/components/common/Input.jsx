import React from 'react';

export const Input = ({ 
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  icon: Icon,
  disabled = false
}) => {
  return (
    
      {label && (
        
          {label}
        
      )}
      
        {Icon && (
          
        )}
        
      
    
  );
};

export const TextArea = ({ 
  label,
  placeholder,
  value,
  onChange,
  rows = 4,
  disabled = false
}) => {
  return (
    
      {label && (
        
          {label}
        
      )}
      
    
  );
};
