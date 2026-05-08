import { useQuery } from '@tanstack/react-query';
import { productApi } from '../api/productApi';
import { ProductFilters } from '../types/product.types';

export function useProducts(filters?: ProductFilters) {
  return useQuery({
    // Query key - unique identifier untuk cache
    queryKey: ['products', filters],
    
    // Query function - function yang fetch data
    queryFn: () => productApi.getProducts(filters),
    
    // Options
    staleTime: 5 * 60 * 1000, // Data dianggap fresh selama 5 menit
    gcTime: 10 * 60 * 1000,   // Cache disimpan selama 10 menit (renamed from cacheTime)
  });
}