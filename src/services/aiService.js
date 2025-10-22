export const generateAIResponse = async (message, company) => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  const lowerMsg = message.toLowerCase();
  let response = '';
  
  if (company.capabilities.includes('plan_management')) {
    if (lowerMsg.includes('plan') || lowerMsg.includes('upgrade') || lowerMsg.includes('subscription')) {
      response = `I can help you with your ${company.name} subscription plans! We currently offer:\n\n${company.plans.map((p, i) => `${i + 1}. ${p.name} - ${p.price}\n   ${p.features.join(', ')}`).join('\n\n')}\n\nWould you like to change your plan?`;
    }
  }
  
  if (company.capabilities.includes('billing_inquiries')) {
    if (lowerMsg.includes('bill') || lowerMsg.includes('payment') || lowerMsg.includes('invoice')) {
      response = `I can help you with billing inquiries. Your current plan is ${company.plans[0].name} at ${company.plans[0].price}. Would you like to see your payment history or update payment methods?`;
    }
  }
  
  if (company.capabilities.includes('technical_support')) {
    if (lowerMsg.includes('problem') || lowerMsg.includes('issue') || lowerMsg.includes('not working')) {
      response = `I'm here to help with technical issues. Could you please describe the problem you're experiencing? I'll do my best to resolve it or escalate to our technical team if needed.`;
    }
  }
  
  if (!response) {
    response = `Thank you for contacting ${company.name}! I'm your AI assistant. I can help you with:\n\n${company.capabilities.map(c => `• ${c.replace(/_/g, ' ').toUpperCase()}`).join('\n')}\n\nHow can I assist you today?`;
  }
};
  return response;
