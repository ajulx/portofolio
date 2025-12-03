kamu mengeksekusi perintah yang berawalan (ini baru),, kalau perintah yang berawalan (ini sudah) tidak perlu kamu eksekusi
(ini sudah)
Buatkan sebuah website portofolio lengkap menggunakan HTML, CSS, dan JavaScript dengan tampilan modern, simple, responsif, dan interaktif. Terapkan semua ketentuan berikut:

🎨 Tema dan Gaya

Warna utama: Merah (#ff0000) dan Hitam (#000000).

Tampilan clean modern.

Setiap animasi harus smooth.

📌 Struktur Halaman (Vertical Scroll)

Website harus scroll ke bawah (vertical scrolling).
Setiap section awal mulanya tidak terlihat, kemudian:

✨ Kontennya muncul dengan animasi (scroll reveal)
Ketika masuk area viewport → fade-in + slide-up ringan.

Urutannya:

Profile

Tentang Saya

Pengalaman

Projek

Kontak Saya

🔥 DETAIL SETIAP SECTION
1️⃣ Profile (Hero Section)

Foto profil berada di kanan, ukuran besar tapi stabil.

Efek:

Floating (naik–turun tipis).

Hover zoom ketika cursor diarahkan.

Di sebelah kiri foto profil tampilkan:

Nama lengkap

Deskripsi singkat (1–2 kalimat)

Icon LinkedIn, Instagram, GitHub

Glow animation ketika hover

Full screen hero layout modern.

2️⃣ Tentang Saya

Foto berada di kiri, ukuran sama dengan foto di Profile.

Teks tentang saya di kanan.

Background memakai kombinasi merah + hitam.

Konten muncul dengan efek scroll reveal.

3️⃣ Pengalaman

List pengalaman:

Nama posisi

Perusahaan

Tahun

Deskripsi singkat

Muncul dengan animasi scroll reveal.

4️⃣ Projek

Tampilkan 4 kartu projek.

Setiap kartu berisi:

Gambar projek (dummy)

Judul

Deskripsi singkat

Efek:

Glow / border menyala ketika hover

Scroll reveal saat pertama muncul

Tampilkan dalam grid rapi.

5️⃣ Kontak Saya

Form untuk mengirim pesan via email.
Tampilkan input berikut:

Nama

Email

Subjek

Pesan

Tombol Kirim

Gunakan:

mailto: atau handler JavaScript sederhana (dummy) yang jelas.

Harus ada animasi scroll reveal saat form muncul.

🎬 ANIMASI

Wajib disertakan:

A. Floating Profile Photo

Naik turun tipis (infinite loop)

B. Hover Effects

Foto membesar

Icon LinkedIn/Instagram/GitHub glow

Card projek glow

C. Scroll Reveal

Setiap section muncul dengan:

Fade-in

Slide-up halus

Efek aktif saat elemen masuk viewport (gunakan IntersectionObserver JS)

📄 TEKNOLOGI

HTML5

CSS3

JavaScript (vanilla)

File:

index.html

style.css

script.js

📦 OUTPUT YANG DIHARAPKAN

Hasil akhir harus berisi:

Kode lengkap HTML + CSS + JS

Seluruh animasi bekerja

Semua efek hover berjalan

Scroll reveal aktif untuk seluruh section

Desain modern, simple, dan elegan dengan warna merah–hitam

(ini sudah)
Pada section Profile, tambahkan background animasi titik-titik putih berukuran bervariasi yang bergerak perlahan menuju kanan-atas, menggunakan canvas/JS particles. Titik memiliki ukuran acak, opacity acak, dan bergerak smooth dengan requestAnimationFrame. Particles respawn secara otomatis saat keluar layar. Efek harus subtle, modern, dan tidak menutupi konten.

(ini sudah)
Pastikan website yang dibuat ringan, cepat, dan tidak lambat saat refresh, dengan mengikuti ketentuan di bawah:

1. Optimasi Animasi

Semua animasi harus dibuat efisien, gunakan requestAnimationFrame dan hindari interval yang berat.

Kurangi jumlah particles jika menggunakan background animasi:

Maksimal 30–40 titik saja.

Jangan gunakan shadow blur besar yang berat untuk GPU.

Gunakan canvas yang low cost, ukuran rendering minimal.

2. Minimalkan File

Gunakan satu file CSS dan satu file JS, tanpa library berat.

Gunakan gambar proyek ukuran kecil (compressed).

Jangan load asset besar pada awal page.

3. Hindari Blocking


Gunakan lazy-load untuk gambar yang berada di bawah fold.

4. Scroll Reveal Harus Ringan

Gunakan IntersectionObserver (bukan event scroll manual) agar tidak berat.

5. Hilangkan Efek yang Tidak Perlu

Efek glow/hover harus memakai box-shadow sederhana, bukan yang berat.

Jangan gunakan filter CSS berat seperti:

blur(), backdrop-filter(), atau drop-shadow() berlebihan.

6. Optimasi Canvas Particles

Render particles dengan:

Ukuran kecil

Opacity ringan

Kecepatan sangat pelan

Tidak lebih dari 40 particle

Gunakan clearRect yang efisien di tiap frame.

7. Gunakan Asset Lokal

Jangan load ikon LinkedIn/Instagram/GitHub dari CDN, gunakan SVG lokal (inline).

8. Pastikan Transisi Halus

Semua transition CSS harus 0.2s–0.3s saja agar tidak memakan GPU besar.
(ini sudah)
📌 Tambahkan Kalimat Berikut ke PROMPT UTAMA

“Pastikan website sangat ringan dan tidak lama saat refresh. Optimalkan seluruh animasi, batasi particles maksimal 40 titik, gunakan IntersectionObserver untuk scroll reveal, script harus defer, efek hover harus ringan, gambar harus tercompress, dan jangan menggunakan filter CSS yang berat.

(ini sudah)
Tolong perbaiki CSS pada proyek saya.
Saya ingin semua <section> memiliki background yang sama, yaitu warna gelap abu-abu, bukan hitam pekat.
Contoh warna yang saya inginkan: #1a1a1a atau #1f1f1f.

Namun untuk section yang memiliki class profile, biarkan tetap menggunakan background yang sekarang, lengkap dengan animasinya.

Jadi tugas kamu:

Samakan background untuk semua section menjadi abu-abu gelap (#1a1a1a).

Jangan ganggu background dan animasi di .profile.

Pastikan hanya .profile yang berbeda background-nya dari section lain.

Jika ada CSS lain yang memberi background berbeda ke section lain, hapus atau override agar semua section seragam.

Berikan hasil CSS lengkapnya setelah diperbaiki.

(ini sudah)
Pada section Tentang Saya, buat animasi kemunculan efek kiri–kanan: foto profil di kiri muncul dari kiri menuju tengah dengan fade-in, dan penjelasan di kanan muncul dari kanan menuju tengah dengan fade-in. Gunakan transform translateX dan opacity, serta IntersectionObserver untuk trigger animasinya.

(ini sudah)
Semua animasi scroll reveal harus bersifat reversible: ketika elemen masuk ke area tengah layar, tampil dengan efek fade-in dan slide-in; ketika elemen keluar dari area tengah, elemen kembali hilang (opacity 0 + transform awal). Gunakan IntersectionObserver untuk memunculkan dan menghilangkan elemen secara dinamis. Elemen harus bisa muncul lagi jika user scroll kembali.

(ini sudah)
Tambahkan sebuah navigation bar hitam penuh di bagian paling atas, kiri berisi teks ‘Fajrul Falah’ berwarna merah dengan glow tipis, kanan berisi tombol navigasi untuk berpindah ke setiap section (Profile, Tentang Saya, Pengalaman, Projek, Kontak Saya). Tombol default berwarna hitam dengan border merah, tetapi ketika hover berubah menjadi merah menyala dengan glow tipis. Navbar fixed di atas dan menggunakan smooth scroll

(ini sudah)
Untuk logo LinkedIn, Instagram, dan GitHub, gunakan versi logo asli dengan warna official brand (LinkedIn biru #0A66C2, Instagram gradient resmi, GitHub Octocat hitam). Jangan ubah warna mereka. Pada hover, tambahkan sedikit red glow dan efek scale kecil, tetapi warna logo tetap warna asli.

(ini sudah)
Pada bagian Profile, buat teks ‘Fajrul Falah’ muncul dari kiri menggunakan animasi slide-in: opacity 0 + translateX(-80px) menjadi opacity 1 + translateX(0). Gunakan IntersectionObserver agar animasi muncul ketika masuk viewport dan hilang lagi ketika keluar viewport

(ini sudah)
Tolong tambahkan efek hover pada foto profile di bagian section "profile". Ketentuan animasinya: foto profile harus membesar sedikit ketika kursor berada di atasnya (scale sekitar 1.05 sampai 1.1). Lalu ketika di-hover, border foto harus menyala berwarna merah dengan efek glow merah tipis. Saat tidak di-hover, border normalnya tipis atau hampir tidak terlihat. Transisi harus halus dengan durasi sekitar 0.3 sampai 0.5 detik. Gunakan Tailwind CSS untuk styling efek ini. Pastikan efek hanya berlaku pada elemen foto profile saja, bukan elemen lain.

(ini sudah)
Tolong ubah efek pada foto profile di section "profile". Saya ingin border merahnya tetap ada meskipun tidak di-hover. Jadi kondisi normal: foto memiliki border merah tipis. Ketika di-hover: foto membesar sedikit (scale 1.05–1.1) dan border merahnya berubah menjadi glowing/menyala dengan shadow merah yang lembut. Transisi harus halus sekitar 0.3–0.5 detik. Styling tetap menggunakan Tailwind CSS. Pastikan efek ini hanya berlaku pada foto profile saja.

(ini sudah)
Tolong ubah tampilan di section Kontak Saya menjadi lebih modern dan interaktif. Setiap elemen input (nama, email, subjek, dan pesan) harus memiliki desain modern: rounded, border tipis warna merah, background hitam, teks putih. Ketika kursor mendekati atau input diklik (focus atau hover), input tersebut harus memanjang sedikit secara animatif (misalnya width bertambah 5–10% dengan transisi halus 0.3s). Border merah harus menjadi lebih terang atau sedikit glow saat hover/focus. Efek ini berlaku untuk semua input, textarea, dan tombol kirim. Semua animasi harus smooth, ringan, dan tidak menyebabkan lag. Gunakan kombinasi warna merah dan hitam sesuai tema website saya.

(ini sudah)
ambahkan satu ikon baru di section "profile", yaitu logo WhatsApp. Desain dan animasinya harus sama seperti ikon LinkedIn, Instagram, dan GitHub yang sudah ada: interaktif, memiliki efek glow/menyala ketika kursor diarahkan, dan transisi halus.

Di sebelah kanan ikon WhatsApp, tampilkan teks berisi nomor saya:

0813-7464-0683

Teks nomor tersebut harus rata tengah secara vertikal dengan ikon WhatsApp, dan tetap bergaya modern sesuai tema website (merah–hitam).

Ketika ikon WhatsApp diklik, nomor 081374640683 harus tersalin otomatis ke clipboard, lalu tampilkan notifikasi kecil di bawahnya (misalnya “Nomor berhasil disalin!”) dengan animasi fade-in lalu fade-out. Gunakan JavaScript murni untuk fungsi penyalinan clipboard.

Pastikan ikon WhatsApp menggunakan warna asli WhatsApp, bukan warna merah/hitam. Pastikan tampilannya seragam dengan ikon sosial lain (hover glow, slightly scale up saat hover, cursor pointer, dan shadow halus).

(ini sudah)
Tambahkan sebuah section baru bernama “Keahlian”. Section ini harus ditempatkan di antara section “Pengalaman” dan section “Projek”.

Desain section Keahlian harus modern, interaktif, dan tetap mengikuti tema warna website (merah–hitam).
Di dalam section ini, buat 10 kotak keahlian, masing-masing berisi nama keahlian (nanti saya bisa edit sendiri).

Tata letaknya seperti berikut:

5 kotak di sisi kiri, tersusun vertikal dengan jarak yang proporsional.

5 kotak di sisi kanan, juga tersusun vertikal sejajar.

Jarak kiri dan kanan harus seimbang sehingga menghasilkan komposisi yang rapi dan profesional.

Tambahkan animasi muncul secara zig-zag ketika pertama kali halaman diakses:

Kotak kiri pertama muncul lebih dulu (misalnya fade-in + slide sedikit dari kiri).

Kotak kanan pertama muncul setelah itu (fade-in + slide sedikit dari kanan).

Lanjutkan pola zig-zag kiri → kanan → kiri → kanan sampai 10 kotak selesai.

Animasi zig-zag ini hanya berjalan satu kali saat pengguna pertama kali membuka website (no repeat saat scroll).
Jika perlu, gunakan flag JavaScript untuk mencegah animasi terulang.

Setiap kotak harus terlihat interaktif, misalnya:

Membesar sedikit saat hover (scale).

Glow merah tipis saat hover.

Border merah tetap terlihat saat normal.

Efek transisi halus (0.3–0.5s).

Gunakan HTML, CSS, dan JavaScript murni, atau Tailwind jika diperlukan sesuai style project.

Pastikan section ini konsisten dan menyatu dengan gaya keseluruhan website.