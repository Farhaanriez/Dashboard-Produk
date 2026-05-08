import { api } from '@/shared/lib/api/apiClient';
import { 
  Product, 
  ProductsResponse, 
  ProductDetailResponse,
  ProductFilters 
} from '../types/product.types';
import { mockProducts, delay } from './mockData';

export const productApi = {
  getProducts: async (filters?: ProductFilters): Promise<Product[]> => {
    await delay(800);
    
    let filtered = [...mockProducts];
    
    if (filters?.search) {
      const query = filters.search.toLowerCase();
      filtered = filtered.filter(
        p => p.nama.toLowerCase().includes(query) || 
             p.kategori.toLowerCase().includes(query)
      );
    }

    if (filters?.kategori) {
      filtered = filtered.filter(p => p.kategori === filters.kategori);
    }

    if (filters?.minHarga !== undefined) {
      filtered = filtered.filter(p => p.harga >= filters.minHarga!);
    }
    if (filters?.maxHarga !== undefined) {
      filtered = filtered.filter(p => p.harga <= filters.maxHarga!);
    }
    
    return filtered;
  },
  
  getProductById: async (id: number): Promise<Product | null> => {
    await delay(500);
    
    const product = mockProducts.find(p => p.id === id);
    return product || null;
  },

  getCategories: async (): Promise<string[]> => {
    await delay(300);
    
    const categories = [...new Set(mockProducts.map(p => p.kategori))];
    return categories;
  },
};

// Uncomment dan sesuaikan ketika sudah ada real API

/*
export const productApi = {
  getProducts: async (filters?: ProductFilters): Promise<Product[]> => {
    const queryParams = new URLSearchParams();
    
    if (filters?.search) queryParams.append('search', filters.search);
    if (filters?.kategori) queryParams.append('kategori', filters.kategori);
    if (filters?.minHarga) queryParams.append('minHarga', filters.minHarga.toString());
    if (filters?.maxHarga) queryParams.append('maxHarga', filters.maxHarga.toString());
    
    const response = await api.get<ProductsResponse>(
      `/products?${queryParams.toString()}`
    );
    
    return response.data;
  },
  
  getProductById: async (id: number): Promise<Product | null> => {
    try {
      const response = await api.get<ProductDetailResponse>(`/products/${id}`);
      return response.data;
    } catch (error) {
      if (error instanceof ApiError && error.status === 404) {
        return null;
      }
      throw error;
    }
  },
  
  getCategories: async (): Promise<string[]> => {
    const response = await api.get<{ data: string[] }>('/products/categories');
    return response.data;
  },
};
*/