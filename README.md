# 🌿 GreenBanking - Fullstack Project

Studi komprehensif mengenai pengaruh framing effect terhadap adopsi produk perbankan hijau.

## 📁 Struktur Project

```
ta0greenbanking/
├── backend/     (Laravel 11 + Sanctum)
├── frontend/    (React + Vite + Tailwind CSS)
└── README.md
```

---

## ⚙️ Requirements

- PHP >= 8.2
- Composer
- Node.js >= 18
- MySQL
- npm / yarn

---

## 🛠️ Setup Backend (Laravel)

### 1. Masuk ke folder backend
```bash
cd ta0greenbanking/backend
```

### 2. Install dependencies
```bash
composer install
```

### 3. Copy file environment
```bash
cp .env.example .env
```

### 4. Generate application key
```bash
php artisan key:generate
```

### 5. Setup database di `.env`
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=greenbanking
DB_USERNAME=root
DB_PASSWORD=your_password
```

### 6. Buat database MySQL
```sql
CREATE DATABASE greenbanking;
```

### 7. Jalankan migration & seeder
```bash
php artisan migrate --seed
```

### 8. Jalankan backend server
```bash
php artisan serve
```
Backend berjalan di: `http://localhost:8000`

---

## 🎨 Setup Frontend (React)

### 1. Masuk ke folder frontend
```bash
cd ta0greenbanking/frontend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Jalankan frontend
```bash
npm run dev
```
Frontend berjalan di: `http://localhost:5173`

---

## 🔗 API Endpoints

| Method | Endpoint         | Deskripsi              | Auth Required |
|--------|-----------------|------------------------|---------------|
| POST   | /api/register   | Registrasi user baru   | No            |
| POST   | /api/login      | Login user             | No            |
| POST   | /api/logout     | Logout user            | Yes           |
| GET    | /api/user       | Data user login        | Yes           |
| POST   | /api/contact    | Kirim pesan kontak     | No            |

---

## 👤 Default User (Seeder)

```
Email:    admin@greenbanking.ac.id
Password: password
```

---

## 📦 Tech Stack

**Backend:**
- Laravel 11
- Laravel Sanctum (authentication)
- MySQL
- PHP 8.2+

**Frontend:**
- React 18 + Vite
- Tailwind CSS
- React Router v6
- Axios
- Recharts (untuk grafik)

---

## 🚀 Quick Start

```bash
# Terminal 1 - Backend
cd ta0greenbanking/backend
composer install && cp .env.example .env
php artisan key:generate
# (setup DB di .env)
php artisan migrate --seed
php artisan serve

# Terminal 2 - Frontend
cd ta0greenbanking/frontend
npm install
npm run dev
```

Buka browser: `http://localhost:5173`

---

© 2025 GreenBanking Research Project - Universitas Brawijaya
