// FILE: components/SearchableList.tsx
// =====================================================================
// CLIENT COMPONENT - SEARCHABLE PRODUCT LIST (Enhanced Design)
// =====================================================================

'use client';

import { useState } from 'react';
import { Product } from '@/data/products';
import ProductCard from './ProductCard';

interface SearchableListProps {
  initialProducts: Product[];
}

export default function SearchableList({ initialProducts }: SearchableListProps) {
  
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  const filteredProducts = initialProducts.filter((product) => {
    const query = searchQuery.toLowerCase();
    return (
      product.nama.toLowerCase().includes(query) ||
      product.kategori.toLowerCase().includes(query)
    );
  });

  return (
    <div className="space-y-8">
      
      {/* Search Section dengan glass effect */}
      <div className="glass rounded-2xl p-6 shadow-xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center text-2xl shadow-lg animate-float">
            🔍
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">Cari Produk</h2>
            <p className="text-sm text-gray-600">Temukan produk berdasarkan nama atau kategori</p>
          </div>
        </div>
        
        <div className="relative">
          <input
            id="search"
            type="text"
            placeholder="Ketik nama produk atau kategori..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-5 py-4 pl-12 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 text-gray-700 placeholder-gray-400 shadow-sm"
          />
          {/* Icon search di dalam input */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">
            🔎
          </div>
          
          {/* Clear button */}
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center transition-all"
            >
              ✕
            </button>
          )}
        </div>
        
        {/* Result counter */}
        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm text-gray-600">
            {searchQuery ? (
              <>
                Menampilkan <span className="font-bold text-blue-600">{filteredProducts.length}</span> dari {initialProducts.length} produk
              </>
            ) : (
              <>Total <span className="font-bold text-blue-600">{initialProducts.length}</span> produk tersedia</>
            )}
          </p>
          
          {/* Filter tags */}
          {searchQuery && (
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500">Filter aktif:</span>
              <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-medium">
                "{searchQuery}"
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Product Grid atau Empty State */}
      {filteredProducts.length === 0 ? (
        <div className="glass rounded-2xl p-12 text-center shadow-xl">
          <div className="text-6xl mb-4 animate-float">😕</div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Produk Tidak Ditemukan
          </h3>
          <p className="text-gray-600 mb-6">
            Tidak ada produk yang cocok dengan pencarian "<span className="font-semibold text-blue-600">{searchQuery}</span>"
          </p>
          <button
            onClick={() => setSearchQuery('')}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-xl"
          >
            Reset Pencarian
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}