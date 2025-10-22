import { createNewConversation } from '../services/conversationService';

export const useConversations = () => {
  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);

  const addConversation = (companyId) => {
    const newConv = createNewConversation(companyId, conversations.length);
    setConversations([newConv, ...conversations]);
    setSelectedConversation(newConv);
    return newConv;
  };

  const updateConversation = (conversationId, updates) => {
    setConversations(prev => 
      prev.map(conv => 
        conv.id === conversationId 
          ? { ...conv, ...updates }
          : conv
      )
    );
  };

  return {
    conversations,
    selectedConversation,
    setSelectedConversation,
    addConversation,
    updateConversation
  };
