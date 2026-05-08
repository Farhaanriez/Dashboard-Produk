'use client';

import Link from 'next/link';
import { useFavorites } from '@/features/favorites/hooks/useFavorites';

export function Header() {
  const { favoriteCount } = useFavorites();
  
  return (
    <header className="glass border-b border-white/20 sticky top-0 z-50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center text-xl shadow-md group-hover:scale-110 transition-transform">
              📦
            </div>
            <span className="font-bold text-xl text-gray-800">Dashboard Produk</span>
          </Link>
          
          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Favorites Counter */}
            <div className="flex items-center gap-2 bg-pink-50 px-4 py-2 rounded-full">
              <span className="text-pink-600">❤️</span>
              <span className="text-sm font-semibold text-gray-700">
                {favoriteCount} Favorit
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}