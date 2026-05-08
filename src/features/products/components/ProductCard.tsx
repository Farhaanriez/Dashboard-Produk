'use client';

import Link from 'next/link';
import { Product } from '../types/product.types';
import { FavoriteButton } from '@/features/favorites/components/FavoriteButton';
import { memo } from 'react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = memo(function ProductCard({ product }: ProductCardProps) {
  
  const formatRupiah = (angka: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(angka);
  };

  const getCategoryIcon = (kategori: string) => {
    switch(kategori) {
      case 'Elektronik': return '💻';
      case 'Aksesoris': return '🎮';
      default: return '📦';
    }
  };

  return (
    <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden">
      
      {/* Gradient overlay saat hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
      
      {/* Header: Category & Favorite */}
      <div className="flex items-center justify-between mb-4">
        <span className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">
          <span>{getCategoryIcon(product.kategori)}</span>
          <span>{product.kategori}</span>
        </span>
        
        {/* Stock indicator */}
        <div className="flex items-center gap-1">
          <div className={`w-2 h-2 rounded-full ${product.stok > 10 ? 'bg-green-500' : 'bg-yellow-500'} animate-pulse`} />
          <span className="text-xs text-gray-500">{product.stok} unit</span>
        </div>
      </div>
      
      {/* Product Name */}
      <h3 className="font-bold text-xl text-gray-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 min-h-[3.5rem]">
        {product.nama}
      </h3>
      
      {/* Description */}
      <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
        {product.deskripsi}
      </p>
      
      {/* Price Section */}
      <div className="mb-4">
        <p className="text-xs text-gray-500 mb-1">Harga</p>
        <p className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
          {formatRupiah(product.harga)}
        </p>
      </div>
      
      {/* Bottom Section: Favorite & Detail Button */}
      <div className="flex items-center gap-3">
        {/* Detail Button */}
        <Link 
          href={`/products/${product.id}`}
          className="flex-1 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-xl group-hover:scale-105"
        >
          <span className="flex items-center justify-center gap-2">
            <span>Lihat Detail</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </span>
        </Link>
        
        {/* Favorite Button */}
        <FavoriteButton productId={product.id} />
      </div>
    </div>
  );
});