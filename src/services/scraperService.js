import { mockCompanyData } from '../utils/mockData';

export const scrapeWebsite = async (domain) => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  const domainKey = domain.split('.')[0].toLowerCase();
  const data = mockCompanyData[domainKey] || mockCompanyData.default(domain);
  
  return data;
};
