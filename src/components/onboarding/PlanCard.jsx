import React from 'react';

export const PlanCard = ({ plan }) => {
  return (
    
      
        {plan.name}
        {plan.price}
      
      
        {plan.features.map((feat, i) => (
          
            {feat}
          
        ))}
      
    
  );
};
