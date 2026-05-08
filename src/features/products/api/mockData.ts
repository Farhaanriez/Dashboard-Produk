import { Product } from '../types/product.types';

export const mockProducts: Product[] = [
  {
    id: 1,
    nama: "Laptop Gaming ASUS ROG",
    kategori: "Elektronik",
    harga: 15000000,
    deskripsi: "Laptop gaming dengan spesifikasi tinggi, cocok untuk gaming dan rendering",
    stok: 5
  },
  {
    id: 2,
    nama: "Mechanical Keyboard RGB",
    kategori: "Aksesoris",
    harga: 850000,
    deskripsi: "Keyboard mechanical dengan LED RGB, switch blue tactile",
    stok: 15
  },
  {
    id: 3,
    nama: "Mouse Wireless Logitech",
    kategori: "Aksesoris",
    harga: 350000,
    deskripsi: "Mouse wireless ergonomis dengan battery tahan lama",
    stok: 20
  },
  {
    id: 4,
    nama: "Monitor 27 inch 144Hz",
    kategori: "Elektronik",
    harga: 3500000,
    deskripsi: "Monitor gaming IPS 27 inch dengan refresh rate 144Hz",
    stok: 8
  },
  {
    id: 5,
    nama: "Headset Gaming HyperX",
    kategori: "Aksesoris",
    harga: 750000,
    deskripsi: "Headset gaming dengan surround sound 7.1 dan microphone noise cancelling",
    stok: 12
  }
];

// Helper function untuk simulate API delay
export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));