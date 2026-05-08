// import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { Header } from '@/shared/components/organism/Header';
import { Spinner } from '@/shared/components/atoms/Spinner';

const ProductListSection = dynamic(
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return import('@/features/products/components/ProductListSection');
  },
  {
    loading: () => (
      <div className="flex items-center justify-center py-20">
        <Spinner size="lg" />
        <span className="ml-3 text-gray-600">
          Memuat produk...
        </span>
      </div>
    ),
  }
);

export const metadata = {
  title: 'Dashboard Produk | Frontend Best Practices',
  description: 'Dashboard produk dengan implementasi scalable structure, state management, dan performance optimization',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center text-4xl shadow-2xl animate-float">
              📦
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            <span className="gradient-text">Dashboard Produk</span>
          </h1>
          
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Implementasi Frontend Best Practices: Scalable Structure, State Management, API Integration, Performance Optimization
          </p>
        </div>

        {/* Best Practices Info Panel */}
        <div className="glass rounded-2xl p-8 mb-12 shadow-2xl border-2 border-white/50">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-2xl shadow-lg flex-shrink-0">
              ✨
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Best Practices yang Diimplementasikan
              </h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: '📁',
                title: 'Scalable Folder Structure',
                desc: 'Feature-based + Atomic Design',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: '🔄',
                title: 'Advanced State Management',
                desc: 'Zustand + TanStack Query',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: '🌐',
                title: 'API Integration',
                desc: 'Centralized client + Custom hooks',
                color: 'from-orange-500 to-red-500'
              },
              {
                icon: '⚡',
                title: 'Performance Optimization',
                desc: 'Debouncing + Memoization',
                color: 'from-green-500 to-teal-500'
              },
              {
                icon: '🎨',
                title: 'Design System',
                desc: 'Design tokens + Reusable components',
                color: 'from-indigo-500 to-blue-500'
              },
              {
                icon: '❤️',
                title: 'Global State',
                desc: 'Favorites with localStorage persist',
                color: 'from-pink-500 to-rose-500'
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center text-xl shadow-md flex-shrink-0`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 mb-1 text-sm">{item.title}</h3>
                    <p className="text-xs text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Product List Section with Suspense */}
        {/* <Suspense fallback={
          <div className="flex items-center justify-center py-20">
            <Spinner size="lg" />
            <span className="ml-3 text-gray-600">Memuat produk...</span>
          </div>
        }>
          <ProductListSection />
        </Suspense> */}
        <ProductListSection />
      </main>
    </div>
  );
}