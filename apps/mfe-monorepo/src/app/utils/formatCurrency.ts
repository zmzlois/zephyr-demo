export const formatAsCurrency = (price: number, currency = 'USD'): string => {
  return new Intl.NumberFormat(navigator.language, {
    style: 'currency',
    currency,
  }).format(price);
};
