// File ini berisi data dummy yang akan digunakan di seluruh aplikasi
// Dalam aplikasi production, data ini biasanya diambil dari API/Database

export interface Product {
  id: number;
  nama: string;
  kategori: string;
  harga: number;
  deskripsi: string;
  stok: number;
}

// Array produk - data ini akan di-import oleh Server Component dan Client Component
export const products: Product[] = [
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