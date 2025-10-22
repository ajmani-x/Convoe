import { generatePhoneNumber } from '../utils/helpers';

export const createNewConversation = (companyId, conversationsCount) => {
  return {
    id: Date.now(),
    companyId: companyId,
    userPhone: generatePhoneNumber(),
    userName: `User ${conversationsCount + 1}`,
    status: 'active',
    lastMessage: '',
    createdAt: new Date()
  };
};

export const createMessage = (role, content) => {
  return {
    id: Date.now() + (role === 'assistant' ? 1 : 0),
    role: role,
    content: content,
    timestamp: new Date()
  };
};
