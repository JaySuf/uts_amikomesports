# Amikom Esports - Platform Manajemen Tim 🎮

Selamat datang di repositori **Amikom Esports**! Project ini adalah hasil pengerjaan Tugas Ujian Tengah Semester (UTS) mata kuliah Pemrograman Web. Website ini didesain khusus buat para gamer untuk mengatur tim esports, memantau statistik, dan melakukan simulasi transaksi turnamen secara *real-time*.

## 🌟 Fitur Utama

- **UI/UX Keren ala Gamer**: Menggunakan gaya desain *glassmorphism* transparan dengan kombinasi warna ungu (ciri khas Amikom) dan putih murni.
- **Dark/Light Mode**: Tema gelap dan terang yang bisa diganti langsung lewat *toggle* di navbar dan otomatis tersimpan di *local storage*.
- **Dashboard Interaktif**: Dilengkapi dengan grafik SVG kustom (tanpa *library* tambahan!) dan kalkulator simulasi transfer koin turnamen.
- **Password Strength Meter**: Mengecek kekuatan password secara langsung (*real-time*) saat mendaftar akun baru dengan tingkatan kasual ala gamer (Kependekan, Lemah, Lumayan, GGWP).
- **Responsive 100%**: Bisa diakses dengan mulus dari PC, Tablet, maupun HP. Menu navigasi akan otomatis berubah menjadi tombol *hamburger* pada layar berukuran kecil.

## 🛠️ Teknologi yang Digunakan

- **HTML5 Semantic**: Struktur halaman web yang bersih dan sesuai standar.
- **CSS3 Kustom (Vanilla)**: Styling murni tanpa framework eksternal (tidak menggunakan Bootstrap atau Tailwind), memanfaatkan Flexbox, Grid, CSS Animations, dan CSS Variables.
- **JavaScript Modern**: Mengatur interaktivitas web seperti ganti tema, validasi form kasual, alert pop-up, pemformatan mata uang dinamis (`id-ID`), dan manipulasi DOM ringan.
- **Remixicon**: *Library* ikon premium untuk antarmuka yang profesional.

## 📂 Struktur File

```text
📁 PEMROGRAMAN WEB
├── 📄 index.html      # Halaman utama (Landing Page)
├── 📄 about.html      # Profil tim developer & sejarah (Tentang Kita)
├── 📄 contact.html    # Form hubungi admin dengan notifikasi AJAX tiruan
├── 📄 signin.html     # Halaman masuk / login
├── 📄 signup.html     # Halaman daftar akun baru
├── 📄 dashboard.html  # Halaman dashboard ekstra (Bonus Poin UTS)
├── 📄 style.css       # File gaya desain utama dan warna tema (CSS)
├── 📄 script.js       # Logika fungsional interaktif (JS)
└── 🖼️ logo.png        # Aset logo Amikom Esports
```

## 🚀 Cara Menjalankan Project

Project ini berupa website statis sehingga tidak butuh *database* atau instalasi Node.js. Cukup jalankan dengan cara gampang ini:

1. Unduh atau clone repositori ini ke dalam laptop/komputer kamu.
2. Buka foldernya.
3. Klik dua kali pada file `index.html` (otomatis akan terbuka di web browser kamu seperti Chrome, Edge, atau Firefox).
4. Selamat mengeksplorasi setiap halamannya!

*(Untuk kenyamanan lebih, disarankan menggunakan ekstensi **Live Server** di VS Code saat melakukan modifikasi).*

## 🎓 Credit

Dikembangkan untuk memenuhi kriteria tinggi UTS Pemrograman Web. Seluruh antarmuka, aset layout, dan logika JavaScript dibangun dari nol khusus untuk *project* ini.
**GLHF! (Good Luck Have Fun)** 🚀
