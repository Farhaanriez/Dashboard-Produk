'use client';

import { Product } from '../types/product.types';
import { ProductCard } from './ProductCard';
import { Spinner } from '@/shared/components/atoms/Spinner';

interface ProductListProps {
  products: Product[];
  isLoading: boolean;
  error: Error | null;
}

export function ProductList({ products, isLoading, error }: ProductListProps) {
  
  // Loading state
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <Spinner size="lg" />
        <p className="mt-4 text-gray-600">Memuat produk...</p>
      </div>
    );
  }
  
  // Error state
  if (error) {
    return (
      <div className="glass rounded-2xl p-12 text-center shadow-xl">
        <div className="text-6xl mb-4">❌</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          Terjadi Kesalahan
        </h3>
        <p className="text-gray-600 mb-6">
          {error.message}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md"
        >
          Muat Ulang
        </button>
      </div>
    );
  }
  
  // Empty state
  if (products.length === 0) {
    return (
      <div className="glass rounded-2xl p-12 text-center shadow-xl">
        <div className="text-6xl mb-4 animate-float">😕</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          Produk Tidak Ditemukan
        </h3>
        <p className="text-gray-600">
          Coba ubah kata kunci pencarian atau filter
        </p>
      </div>
    );
  }
  
  // Product grid
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}