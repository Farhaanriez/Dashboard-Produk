// FILE: app/layout.tsx
// =====================================================================
// ROOT LAYOUT - WRAPPER UNTUK SEMUA HALAMAN
// =====================================================================

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dashboard Produk Next.js',
  description: 'Tugas kampus Next.js dengan SSR, CSR, dan Dynamic Routing',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}