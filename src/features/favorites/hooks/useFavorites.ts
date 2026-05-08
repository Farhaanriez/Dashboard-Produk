import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useFavoriteStore } from '../store/favoriteStore';
import { productApi } from '@/features/products/api/productApi';

export function useFavorites() {
  const { favoriteIds, addFavorite, removeFavorite, isFavorite } = useFavoriteStore();
  
  // Fetch products untuk semua favorite IDs
  const { data: allProducts } = useQuery({
    queryKey: ['products'],
    queryFn: () => productApi.getProducts(),
  });
  
  // Filter hanya produk yang favorite
  const favoriteProducts = useMemo(() => {
    if (!allProducts) return [];
    return allProducts.filter(product => favoriteIds.includes(product.id));
  }, [allProducts, favoriteIds]);
  
  // Toggle favorite (add jika belum, remove jika sudah)
  const toggleFavorite = (productId: number) => {
    if (isFavorite(productId)) {
      removeFavorite(productId);
    } else {
      addFavorite(productId);
    }
  };
  
  return {
    favoriteIds,
    favoriteProducts,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
    favoriteCount: favoriteIds.length,
  };
}