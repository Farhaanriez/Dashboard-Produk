import { useQuery } from '@tanstack/react-query';
import { productApi } from '../api/productApi';

export function useProductDetail(id: number) {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => productApi.getProductById(id),
    staleTime: 5 * 60 * 1000,
    // Disable query jika id invalid
    enabled: id > 0,
  });
}