import { QueryClient } from '@tanstack/react-query';

export function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000, // 1 menit
        gcTime: 5 * 60 * 1000, // 5 menit
        refetchOnWindowFocus: false,
        retry: 1,
      },
    },
  });
}