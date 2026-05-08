export interface Product {
  id: number;
  nama: string;
  kategori: string;
  harga: number;
  deskripsi: string;
  stok: number;
}

// API Response types
export interface ProductsResponse {
  data: Product[];
  total: number;
  page: number;
  limit: number;
}

export interface ProductDetailResponse {
  data: Product;
}

// Filter & Search params
export interface ProductFilters {
  search?: string;
  kategori?: string;
  minHarga?: number;
  maxHarga?: number;
}