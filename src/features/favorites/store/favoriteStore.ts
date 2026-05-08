import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FavoriteStore {
  favoriteIds: number[];
  
  addFavorite: (productId: number) => void;
  removeFavorite: (productId: number) => void;
  isFavorite: (productId: number) => boolean;
  clearFavorites: () => void;
}

export const useFavoriteStore = create<FavoriteStore>()(
  persist(
    (set, get) => ({
      favoriteIds: [],
      
      addFavorite: (productId) => {
        set((state) => ({
          favoriteIds: [...state.favoriteIds, productId],
        }));
      },
      
      removeFavorite: (productId) => {
        set((state) => ({
          favoriteIds: state.favoriteIds.filter(id => id !== productId),
        }));
      },
      
      isFavorite: (productId) => {
        return get().favoriteIds.includes(productId);
      },
      
      clearFavorites: () => {
        set({ favoriteIds: [] });
      },
    }),
    {
      name: 'favorite-storage', 
    }
  )
);