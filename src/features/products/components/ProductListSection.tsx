'use client';

import { useState } from 'react';
import { ProductList } from './ProductList';
import { SearchBox } from '@/shared/components/molecules/SearchBox';
import { useProducts } from '../hooks/useProducts';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { Button } from '@/shared/components/atoms/Button';
import { useFavorites } from '@/features/favorites/hooks/useFavorites';

export default function ProductListSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  
  const debouncedSearch = useDebounce(searchQuery, 500);
  
  const { data: products, isLoading, error } = useProducts({
    search: debouncedSearch,
    kategori: selectedCategory || undefined,
  });
  
  // Favorites
  const { favoriteProducts, favoriteCount } = useFavorites();
  
  // Determine which products to show
  const displayProducts = showFavoritesOnly ? favoriteProducts : (products || []);
  
  // Categories untuk filter
  const categories = ['Elektronik', 'Aksesoris'];
  
  return (
    <div className="space-y-8">
      
      {/* Search & Filter Section */}
      <div className="glass rounded-2xl p-6 shadow-xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center text-2xl shadow-lg animate-float">
            🔍
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">Cari & Filter Produk</h2>
            <p className="text-sm text-gray-600">Temukan produk yang Anda cari</p>
          </div>
        </div>
        
        {/* Search Box */}
        <div className="mb-4">
          <SearchBox 
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Cari berdasarkan nama atau kategori..."
          />
        </div>
        
        {/* Filters */}
        <div className="flex flex-wrap gap-3">
          {/* Category Filter */}
          <div className="flex gap-2">
            <Button
              variant={selectedCategory === '' ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory('')}
            >
              Semua Kategori
            </Button>
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>
          
          {/* Favorites Filter */}
          <Button
            variant={showFavoritesOnly ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
          >
            ❤️ Favorit ({favoriteCount})
          </Button>
        </div>
        
        {/* Active Filters Info */}
        {(searchQuery || selectedCategory || showFavoritesOnly) && (
          <div className="mt-4 flex items-center gap-2 text-sm">
            <span className="text-gray-600">Filter aktif:</span>
            {searchQuery && (
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                Pencarian: "{searchQuery}"
              </span>
            )}
            {selectedCategory && (
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                Kategori: {selectedCategory}
              </span>
            )}
            {showFavoritesOnly && (
              <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full">
                Hanya Favorit
              </span>
            )}
          </div>
        )}
      </div>

      {/* Product List */}
      <ProductList 
        products={displayProducts} 
        isLoading={isLoading} 
        error={error} 
      />
    </div>
  );
}