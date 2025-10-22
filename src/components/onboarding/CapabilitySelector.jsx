import React from 'react';
import { formatCapabilityName } from '../../utils/helpers';

export const CapabilitySelector = ({ 
  capabilities, 
  selectedCapabilities, 
  onToggle 
}) => {
  return (
    
      
        Select Bot Capabilities
        {selectedCapabilities.length} selected
      
      
        {capabilities.map(cap => (
          
            <input
              type="checkbox"
              checked={selectedCapabilities.includes(cap)}
              onChange={(e) => onToggle(cap, e.target.checked)}
              className="w-5 h-5 text-emerald-600 rounded border-gray-300 focus:ring-2 focus:ring-emerald-400"
            />
            
              {formatCapabilityName(cap)}
            
          
        ))}
      
    
  );
};
