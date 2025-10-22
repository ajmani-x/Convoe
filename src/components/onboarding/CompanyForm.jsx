import React from 'react';
import { Globe, Sparkles, Loader2 } from 'lucide-react';
import { Input, TextArea } from '../common/Input';
import { Button } from '../common/Button';

export const CompanyForm = ({ 
  domain, 
  setDomain, 
  description, 
  setDescription, 
  onSubmit, 
  isLoading 
}) => {
  return (
    
      <Input
        label="Company Website"
        placeholder="netflix.com"
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
        icon={Globe}
      />

      <TextArea
        label="Company Description (Optional)"
        placeholder="Describe your business..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      
        {isLoading ? 'Analyzing Website...' : 'Analyze & Generate Bot'}
      
    
  );
};
