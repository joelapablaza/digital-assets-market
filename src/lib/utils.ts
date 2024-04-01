import { type ClassValue, clsx } from 'clsx';
import { Metadata } from 'next';
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

export function constructMetadata({
  title = 'Capi Market - el mercado para assets digitales de Argentina',
  description = 'Capi Market tiene la idea de fomentar la competencia y crecimiento del mercado digial local.',
  image = '/thumbnail.png',
  icons = '/favicon.ico',
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@joelapablaza',
    },
    icons,
    metadataBase: new URL('https://demo.com.ar'),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
