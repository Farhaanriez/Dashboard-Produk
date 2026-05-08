'use client';

import { useFavorites } from '../hooks/useFavorites';

interface FavoriteButtonProps {
  productId: number;
  className?: string;
}

export function FavoriteButton({ productId, className = '' }: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(productId);
  
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite(productId);
      }}
      className={`
        p-2.5 rounded-full transition-all duration-300
        ${favorite 
          ? 'text-red-500 bg-red-50 hover:bg-red-100 shadow-md' 
          : 'text-gray-400 bg-gray-50 hover:bg-gray-100'
        }
        hover:scale-110
        ${className}
      `}
      aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
    >
      <svg className="w-6 h-6" fill={favorite ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
        />
      </svg>
    </button>
  );
}