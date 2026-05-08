import { useQuery } from '@tanstack/react-query';
import { productApi } from '../api/productApi';
import { ProductFilters } from '../types/product.types';

export function useProducts(filters?: ProductFilters) {
  return useQuery({
    queryKey: ['products', filters],
  
    queryFn: () => productApi.getProducts(filters),
    
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,  
  });
}