'use client';
import { trpc } from '@/trpc/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { PropsWithChildren, useState } from 'react';

const Providers = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/trpc`,
          fetch(url, options) {
            return fetch(url, {
              ...options,
              credentials: 'include',
              headers: {
                ...options?.headers,
                // Permitir solicitudes desde localhost:3000
                'Access-Control-Allow-Origin': 'http://localhost:3000',
                // Permitir los métodos CRUD
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
                // Permitir los encabezados específicos
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
              },
            });
          },
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
};

export default Providers;
