import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FavoriteStore {
  // State
  favoriteIds: number[];
  
  // Actions
  addFavorite: (productId: number) => void;
  removeFavorite: (productId: number) => void;
  isFavorite: (productId: number) => boolean;
  clearFavorites: () => void;
}

export const useFavoriteStore = create<FavoriteStore>()(
  persist(
    (set, get) => ({
      // Initial state
      favoriteIds: [],
      
      // Add product ke favorites
      addFavorite: (productId) => {
        set((state) => ({
          favoriteIds: [...state.favoriteIds, productId],
        }));
      },
      
      // Remove product dari favorites
      removeFavorite: (productId) => {
        set((state) => ({
          favoriteIds: state.favoriteIds.filter(id => id !== productId),
        }));
      },
      
      // Check apakah product adalah favorite
      isFavorite: (productId) => {
        return get().favoriteIds.includes(productId);
      },
      
      // Clear semua favorites
      clearFavorites: () => {
        set({ favoriteIds: [] });
      },
    }),
    {
      name: 'favorite-storage', // Key di localStorage
    }
  )
);