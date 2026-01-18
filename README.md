# Paradise Nursery - Shopping App (React)

Paradise Nursery adalah aplikasi front-end e-commerce sederhana untuk toko tanaman hias.
Aplikasi ini dibuat dengan React dan menyediakan fitur daftar produk, keranjang belanja,
serta navigasi antar halaman.

## Pages
1. **Landing Page**  
   - Background image  
   - Nama perusahaan + deskripsi singkat  
   - Tombol **Get Started** menuju halaman Plants

2. **Product Listing Page (/plants)**  
   - Menampilkan tanaman dalam **3 kategori** (minimal 6 item per kategori)  
   - Setiap item menampilkan **thumbnail, nama, dan harga**  
   - Tombol **Add to Cart** menambahkan item ke keranjang dan menjadi disable setelah ditambahkan  
   - Header menampilkan navigasi dan ikon cart dengan jumlah item **dinamis**

3. **Shopping Cart Page (/cart)**  
   - Menampilkan total jumlah tanaman dan total biaya  
   - Menampilkan item dengan thumbnail, nama, harga satuan, dan total per item  
   - Tombol **+ / -** untuk update quantity  
   - Tombol **Delete** untuk menghapus item  
   - Tombol **Continue Shopping** kembali ke /plants  
   - Tombol **Checkout** menampilkan pesan “Coming Soon”

4. **About Page (/about)**  
   - Informasi tentang perusahaan Paradise Nursery

## Tech Stack
- React (Create React App)
- React Router DOM
- Redux Toolkit + React Redux

## How to Run
```bash
npm install
npm start
