import { products } from '@/data/products';
import SearchableList from '@/components/SearchableList';

export const metadata = {
  title: 'Dashboard Produk | Next.js App Router',
  description: 'Dashboard manajemen produk dengan Next.js App Router, SSR, dan CSR',
};

export default async function HomePage() {
  const allProducts = products;

  return (
    <main className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center text-4xl shadow-2xl pulse-glow animate-float">
              📦
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            <span className="gradient-text">Dashboard Produk</span>
          </h1>
          
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Next.js App Router dengan SSR, CSR, dan Dynamic Routing
          </p>
        </div>

        <div className="glass rounded-2xl p-8 mb-12 shadow-2xl border-2 border-white/50">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-2xl shadow-lg flex-shrink-0">
              ✨
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Konsep yang Diimplementasikan
              </h2>
              <p className="text-gray-600">
                Project ini mendemonstrasikan 5 konsep utama Next.js modern
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                icon: '🖥️',
                title: 'Server Side Rendering (SSR)',
                desc: 'Halaman di-render di server untuk performa optimal',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: '⚡',
                title: 'Client Side Rendering (CSR)',
                desc: 'Search box real-time dengan React useState',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: '🔄',
                title: 'Virtual DOM',
                desc: 'Re-render efisien saat filtering produk',
                color: 'from-orange-500 to-red-500'
              },
              {
                icon: '🧩',
                title: 'Component-Based',
                desc: 'ProductCard reusable dan modular',
                color: 'from-green-500 to-teal-500'
              },
              {
                icon: '🔗',
                title: 'Dynamic Routing',
                desc: 'URL parameter untuk halaman detail produk',
                color: 'from-indigo-500 to-blue-500'
              },
              {
                icon: '📱',
                title: 'Responsive Design',
                desc: 'Tampilan optimal di semua perangkat',
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
                    <h3 className="font-bold text-gray-800 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <SearchableList initialProducts={allProducts} />
        
      </div>
    </main>
  );
}