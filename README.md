Markdown
# 🤖 AI Resume Analyzer

**AI Resume Analyzer** adalah aplikasi modern berbasis web yang dirancang untuk membantu pencari kerja mengoptimalkan resume/CV mereka. Dengan memanfaatkan kecerdasan buatan, aplikasi ini dapat memindai kesesuaian resume terhadap deskripsi pekerjaan tertentu, menghitung skor ATS (Applicant Tracking System), serta memberikan rekomendasi perbaikan secara instan.

Aplikasi ini dibangun menggunakan teknologi terbaru **Next.js**, **React**, dan disempurnakan dengan **Tailwind CSS** untuk antarmuka yang modern, dinamis, dan responsif.

---

## 🚀 Fitur Utama

Aplikasi ini dilengkapi dengan alur kerja yang sederhana namun bertenaga untuk memastikan pengalaman pengguna yang maksimal:

### 1. Landing Page Interaktif & Modern
* **Desain UI/UX Bersih:** Menggunakan font Poppins yang profesional dengan tata letak minimalis dan modern.
* **Efek Animasi Halus:** Menggunakan pustaka *Scroll Reveal* untuk memberikan efek transisi kemunculan elemen yang elegan saat halaman digulir.
* **Navigasi yang Seamless:** Navigasi antarhalaman yang responsif tanpa *layout breaking* atau kendala hilangnya komponen saat berpindah rute.

### 2. Unggah File Resume Pintar (Smart Upload)
* **Fleksibilitas Format:** Mendukung unggah berkas resume dalam format **PDF** maupun **DOCX**.
* **Batasan Ukuran Berkas:** Validasi bawaan untuk memastikan ukuran berkas aman (maksimal 5MB).
* **Zona Drop-Zone:** Fitur seret dan lepas (*drag & drop*) yang intuitif untuk mempermudah pengguna.

### 3. Pencocokan Deskripsi Pekerjaan (Job Matching)
* **Analisis Kontekstual:** Menyediakan kolom input opsional untuk memasukkan teks deskripsi lowongan pekerjaan yang sedang dilamar.
* **Ekstraksi Kata Kunci:** Sistem akan membandingkan kata kunci dari deskripsi lowongan langsung dengan isi resume pengguna.

### 4. Dasbor Hasil Analisis Komprehensif (Core Features)
* **Skor ATS Instan:** Menampilkan kalkulasi nilai kelayakan resume dalam bentuk visual yang menarik.
* **Masukan Taktis (Actionable Feedback):** Memberikan daftar poin kekuatan, kelemahan, serta elemen penting yang wajib ditambahkan pada resume.

---

## 📸 Tampilan Antarmuka (Screenshots)

*Berikut adalah visualisasi antarmuka aplikasi AI Resume Analyzer:*

### 🔹 Halaman Utama / Landing Page
*Halaman awal yang menyambut pengguna dengan ringkasan manfaat aplikasi.*
![Landing Page](public/screenshots/landing-page.png)

### 🔹 Halaman Analisis Resume (`/analyze`)
*Ruang kerja utama tempat pengguna mengunggah resume dan memasukkan deskripsi pekerjaan.*
![Analyze Page](public/screenshots/analyze-page.png) 

---

## 🛠️ Struktur Proyek & Teknologi

Proyek ini terorganisasi dengan struktur folder Next.js App Router yang bersih:

* **Framework:** Next.js (App Router)
* **Library UI:** React, Tailwind CSS
* **Fonts:** Google Poppins
* **Animasi:** Scroll Reveal (Client-side optimized)

```text
ai-resume-analyzer/
├── app/                  # App Router (Pages, Layouts, & Global CSS)
│   ├── analyze/          # Halaman Fitur Analisis (/analyze)
│   ├── globals.css       # Konfigurasi Global CSS & Tailwind
│   └── layout.tsx        # Root Layout dengan Optimasi Hydration
├── components/           # Komponen UI Reusable
│   ├── ui/               # Dasar Komponen (Button, Input, Card, dll.)
│   └── sections/         # Bagian Blok Halaman (Hero, Features, Navbar)
└── public/               # Aset Statis (Gambar, Ikon, Screenshots)
💻 Cara Menjalankan Proyek secara Lokal
Ikuti langkah berikut untuk memasang proyek ini di komputer lokal Anda:

Klon Repositori ini:

Bash
git clone [https://github.com/Metyu5/ai-resume-analyzer.git](https://github.com/Metyu5/ai-resume-analyzer.git)
cd ai-resume-analyzer
Pasang Dependensi:

Bash
npm install
# atau
yarn install
Jalankan Server Development:

Bash
npm run dev
# atau
yarn dev
Buka di Browser:
Buka alamat http://localhost:3000 untuk melihat aplikasi berjalan.

🤝 Kontribusi
Kontribusi, isu baru (issues), dan penyerahan fitur (pull requests) sangat dipersilakan untuk pengembangan aplikasi yang lebih baik.

