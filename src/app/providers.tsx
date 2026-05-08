'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, useState } from 'react';
import { makeQueryClient } from '@/shared/lib/api/queryClient';

export function Providers({ children }: { children: ReactNode }) {
  // Buat QueryClient di dalam Client Component
  // useState untuk ensure hanya create sekali
  const [queryClient] = useState(() => makeQueryClient());
  
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}