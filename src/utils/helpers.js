export const formatCapabilityName = (capability) => {
  return capability
    .replace(/_/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export const generatePhoneNumber = () => {
  return `+1${Math.floor(Math.random() * 9000000000 + 1000000000)}`;
};

export const formatTime = (date) => {
  return new Date(date).toLocaleTimeString();
};
