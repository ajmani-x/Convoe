import { useState } from 'react';
import { createMessage } from '../services/conversationService';
import { generateAIResponse } from '../services/aiService';

export const useMessages = () => {
  const [messages, setMessages] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const addUserMessage = (content) => {
    const message = createMessage('user', content);
    setMessages(prev => [...prev, message]);
    return message;
  };

  const addAIMessage = async (userMessage, company) => {
    setIsProcessing(true);
    const response = await generateAIResponse(userMessage, company);
    const aiMessage = createMessage('assistant', response);
    setMessages(prev => [...prev, aiMessage]);
    setIsProcessing(false);
    return aiMessage;
  };

  const clearMessages = () => {
    setMessages([]);
  };

  return {
    messages,
    isProcessing,
    addUserMessage,
    addAIMessage,
    clearMessages
  };
};
