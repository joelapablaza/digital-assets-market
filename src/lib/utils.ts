import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(
  price: number | string,
  options?: {
    currency?: 'USD' | 'EUR' | 'ARS';
    notation?: Intl.NumberFormatOptions['notation'];
  }
) {
  const { currency, notation } = options
    ? options
    : {
        currency: 'ARS',
        notation: 'compact' as Intl.NumberFormatOptions['notation'],
      };

  const numericPrice = typeof price === 'string' ? parseFloat(price) : price;

  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency,
    notation,
    maximumFractionDigits: 2,
  }).format(numericPrice);
}
