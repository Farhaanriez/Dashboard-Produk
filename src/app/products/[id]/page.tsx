import { Suspense } from 'react';
import Link from 'next/link';
import { ProductDetailContent } from '@/features/products/components/ProductDetailContent';
import { Spinner } from '@/shared/components/atoms/Spinner';
import { mockProducts } from '@/features/products/api/mockData';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return mockProducts.map((product) => ({
    id: product.id.toString(),
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const product = mockProducts.find((p) => p.id === parseInt(resolvedParams.id));
  
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium mb-8 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          <span>Kembali ke Dashboard</span>
        </Link>

        {/* Product Detail with Suspense */}
        <Suspense fallback={
          <div className="flex items-center justify-center py-20">
            <Spinner size="lg" />
            <span className="ml-3 text-gray-600">Memuat detail produk...</span>
          </div>
        }>
          <ProductDetailContent productId={productId} />
        </Suspense>
      </div>
    </div>
  );
}