import React from 'react';
import { formatTime } from '../../utils/helpers';

export const MessageBubble = ({ message }) => {
  const isUser = message.role === 'user';
  
  return (
    
      
        {message.content}
        
          {formatTime(message.timestamp)}
        
      
    
  );
};
