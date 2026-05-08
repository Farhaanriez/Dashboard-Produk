'use client';

import { useProductDetail } from '../hooks/useProductDetail';
import { FavoriteButton } from '@/features/favorites/components/FavoriteButton';
import { Badge } from '@/shared/components/atoms/Badge';
import { Spinner } from '@/shared/components/atoms/Spinner';
import { Button } from '@/shared/components/atoms/Button';

interface ProductDetailContentProps {
  productId: number;
}

export function ProductDetailContent({ productId }: ProductDetailContentProps) {
  const { data: product, isLoading, error } = useProductDetail(productId);
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Spinner size="lg" />
      </div>
    );
  }
  
  if (error || !product) {
    return (
      <div className="glass rounded-2xl p-12 text-center">
        <div className="text-6xl mb-4">😕</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          Produk Tidak Ditemukan
        </h3>
      </div>
    );
  }
  
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
    <div className="glass rounded-3xl overflow-hidden shadow-2xl">
      
      {/* Header */}
      <div className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-8 md:p-12 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="primary">
              <span className="mr-1">{getCategoryIcon(product.kategori)}</span>
              {product.kategori}
            </Badge>
            <FavoriteButton productId={product.id} className="bg-white/20" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            {product.nama}
          </h1>
          
          <div className="flex items-center gap-4">
            <div className={`flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full ${product.stok < 10 ? 'animate-pulse' : ''}`}>
              <div className={`w-3 h-3 rounded-full ${product.stok > 10 ? 'bg-green-400' : 'bg-yellow-400'}`} />
              <span className="text-sm font-semibold">
                {product.stok > 10 ? 'Stok Tersedia' : 'Stok Terbatas'}
              </span>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
              ID: #{product.id}
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-8 md:p-12 bg-white">
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          
          {/* Price */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-2xl shadow-lg">
                💰
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium">Harga Produk</p>
                <p className="text-3xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  {formatRupiah(product.harga)}
                </p>
              </div>
            </div>
          </div>

          {/* Stock */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center text-2xl shadow-lg">
                📊
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium">Ketersediaan Stok</p>
                <p className="text-3xl font-extrabold text-gray-800">
                  {product.stok} <span className="text-lg font-normal text-gray-600">unit</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-xl shadow-md">
              📝
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Deskripsi Produk</h2>
          </div>
          <p className="text-gray-700 leading-relaxed text-lg bg-gray-50 rounded-xl p-6 border border-gray-200">
            {product.deskripsi}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="primary" className="flex-1">
            🛒 Tambah ke Keranjang
          </Button>
          <Button variant="outline">
            🔗 Share
          </Button>
        </div>
      </div>
    </div>
  );
}