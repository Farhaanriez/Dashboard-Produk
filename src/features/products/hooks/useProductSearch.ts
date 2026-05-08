import { useState } from 'react';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { useProducts } from './useProducts';

export function useProductSearch() {
  // Local state untuk search query
  const [searchQuery, setSearchQuery] = useState('');
  
  // Debounced value - tunggu 500ms setelah user berhenti ketik
  const debouncedSearch = useDebounce(searchQuery, 500);
  
  // Fetch products dengan debounced search
  const { data: products, isLoading, error } = useProducts({
    search: debouncedSearch,
  });
  
  return {
    searchQuery,
    setSearchQuery,
    products: products || [],
    isLoading,
    error,
    isSearching: searchQuery !== debouncedSearch, // True jika user masih ketik
  };
}