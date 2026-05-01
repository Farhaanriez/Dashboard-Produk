import { products } from '@/data/products';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const product = products.find((p) => p.id === parseInt(resolvedParams.id));
  
  if (!product) {
    return { title: 'Produk Tidak Ditemukan' };
  }

  return {
    title: `${product.nama} | Dashboard Produk`,
    description: product.deskripsi,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const productId = parseInt(resolvedParams.id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    notFound();
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
    <main className="min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back button */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium mb-8 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          <span>Kembali ke Dashboard</span>
        </Link>

        {/* Product Detail Card */}
        <div className="glass rounded-3xl overflow-hidden shadow-2xl">
          
          {/* Header dengan gradient dan pattern */}
          <div className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-8 md:p-12 text-white overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-5xl">{getCategoryIcon(product.kategori)}</span>
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                  {product.kategori}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                {product.nama}
              </h1>
              
              <div className="flex items-center gap-4">
                <div className={`flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full ${product.stok > 10 ? '' : 'animate-pulse'}`}>
                  <div className={`w-3 h-3 rounded-full ${product.stok > 10 ? 'bg-green-400' : 'bg-yellow-400'}`}></div>
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
              
              {/* Harga Section */}
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
                <p className="text-sm text-gray-600">
                  Harga sudah termasuk pajak
                </p>
              </div>

              {/* Stok Section */}
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
                {product.stok < 10 ? (
                  <div className="bg-yellow-100 border border-yellow-300 rounded-lg px-3 py-2 flex items-center gap-2">
                    <span>⚠️</span>
                    <span className="text-sm text-yellow-800 font-medium">Stok terbatas, segera pesan!</span>
                  </div>
                ) : (
                  <div className="bg-green-100 border border-green-300 rounded-lg px-3 py-2 flex items-center gap-2">
                    <span>✓</span>
                    <span className="text-sm text-green-800 font-medium">Stok mencukupi</span>
                  </div>
                )}
              </div>
            </div>

            {/* Deskripsi */}
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

            {/* Technical Info */}
            <div className="mb-8 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 border-2 border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center text-xl shadow-md">
                  🔗
                </div>
                <h2 className="text-xl font-bold text-gray-800">Dynamic Route Information</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-xs text-gray-500 mb-1">File Path</p>
                  <code className="text-sm font-mono text-blue-600">app/products/[id]/page.tsx</code>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-xs text-gray-500 mb-1">URL Parameter</p>
                  <code className="text-sm font-mono text-blue-600">params.id = {product.id}</code>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-xs text-gray-500 mb-1">Current URL</p>
                  <code className="text-sm font-mono text-blue-600">/products/{product.id}</code>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-xs text-gray-500 mb-1">Rendering Method</p>
                  <code className="text-sm font-mono text-blue-600">Server Side (SSR)</code>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2">
                <span>🛒</span>
                <span>Tambah ke Keranjang</span>
              </button>
              
              <button className="sm:w-auto px-8 py-4 bg-white border-2 border-gray-300 rounded-xl hover:bg-gray-50 transition-all font-bold text-gray-700 shadow-md hover:shadow-lg flex items-center justify-center gap-2 hover:scale-105">
                <span>❤️</span>
                <span className="hidden sm:inline">Favorit</span>
              </button>
              
              <button className="sm:w-auto px-8 py-4 bg-white border-2 border-gray-300 rounded-xl hover:bg-gray-50 transition-all font-bold text-gray-700 shadow-md hover:shadow-lg flex items-center justify-center gap-2 hover:scale-105">
                <span>🔗</span>
                <span className="hidden sm:inline">Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}