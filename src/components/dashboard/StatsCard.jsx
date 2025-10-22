import React from 'react';

export const StatsCard = ({ value, label, icon: Icon, color = 'emerald' }) => {
  const colorClasses = {
    emerald: 'border-emerald-200',
    teal: 'border-teal-200'
  };

  return (
    
      {value}
      {label}
      {Icon && }
    
  );
};
