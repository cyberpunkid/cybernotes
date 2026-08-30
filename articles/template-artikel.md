<!--
=============================================================================
TEMPLATE ARTIKEL — CyberNotes
=============================================================================
File ini HANYA contoh/template, tidak ikut ter-publish (folder `articles/`
sudah di-exclude dari build di _config.yml). Ikuti langkah di bawah untuk
menerbitkan artikel baru, lalu HAPUS seluruh blok komentar ini sebelum upload.

LANGKAH-LANGKAH:

1. Copy file ini ke folder `_posts/` (bukan tetap di `articles/`).

2. Rename filenya dengan format WAJIB Jekyll:
       YYYY-MM-DD-judul-artikel-singkat.md
   Contoh: 2026-09-02-analisis-log-wazuh.md
   → Tanggal di NAMA FILE ini yang menentukan urutan artikel.
     Artikel terbaru otomatis muncul paling atas di homepage,
     /categories/, dan /tags/ — tidak perlu setting apa pun lagi.

3. Isi front matter (bagian antara --- paling atas) sesuai isian di
   bawah:
     - title      : judul artikel
     - categories : satu kategori, contoh ["Wazuh"].
                    Kalau mau kategori ini juga muncul sebagai kotak
                    pintasan di homepage, tambahkan namanya ke
                    `nav_categories` di _config.yml. Kalau tidak
                    ditambahkan pun artikelnya TETAP otomatis muncul
                    di halaman /categories/ dan /tags/, cuma tidak ada
                    kotak pintasan khusus di homepage.
     - tags       : bebas, boleh lebih dari satu. Contoh: [wazuh, siem]
     - excerpt    : ringkasan 1-2 kalimat, tampil di daftar artikel

4. KALAU ARTIKEL PAKAI GAMBAR/SCREENSHOT:
     - Buat folder baru di:  assets/img/posts/<nama-slug-artikel>/
       (samakan <nama-slug-artikel> dengan judul di nama file, biar
       gampang dicari lagi nanti — misal untuk contoh nama file di atas,
       foldernya jadi assets/img/posts/analisis-log-wazuh/)
     - Taruh semua gambar artikel itu di folder tersebut.
     - Panggil gambarnya di isi artikel PERSIS seperti contoh di bawah
       (pakai kurung kurawal ganda {{ ... }} ). JANGAN pakai path
       relatif biasa seperti "images/nama.png" — itu akan salah alamat
       karena URL artikel sekarang pendek (/kategori/judul-artikel/),
       tidak ikut struktur folder file sumbernya.

5. Hapus seluruh blok komentar ini (dari <!-- paling atas sampai --> di
   bawah ini), lalu tulis isi artikel menggantikan contoh di bawah.
=============================================================================
-->
---
title: "Judul Artikel di Sini"
categories: ["Kategori"]
tags: [tag1, tag2]
excerpt: "Ringkasan singkat 1-2 kalimat tentang isi artikel ini, akan tampil di daftar artikel."
---

## Ringkasan
Tulis 2-3 kalimat ringkasan singkat tentang topik artikel ini — apa yang dibahas dan kenapa penting.

![Cover atau ilustrasi utama artikel]({{ '/assets/img/posts/nama-slug-artikel/cover.png' | relative_url }})

## Latar Belakang / Konteks
Jelaskan konteks atau latar belakang topik. Misalnya: dari mana kamu belajar ini, kasus apa yang mendasari, atau kenapa kamu menulis catatan ini.

## Tools yang Digunakan
- Tool 1
- Tool 2
- Tool 3

## Pembahasan / Langkah-Langkah
Bagian utama artikel. Bisa berupa penjelasan konsep, atau langkah-langkah teknis kalau ini writeup/tutorial.

### Langkah 1: [Judul langkah]
Penjelasan detail langkah pertama.

```bash
# contoh command jika ada
command --contoh
```

![Screenshot langkah 1]({{ '/assets/img/posts/nama-slug-artikel/langkah-1.png' | relative_url }})
*Gambar 1: Deskripsi singkat apa yang ditunjukkan screenshot ini — ini yang dibaca pembaca sebagai petunjuk visual.*

### Langkah 2: [Judul langkah]
Penjelasan detail langkah kedua.

![Screenshot langkah 2]({{ '/assets/img/posts/nama-slug-artikel/langkah-2.png' | relative_url }})
*Gambar 2: Deskripsi singkat apa yang ditunjukkan screenshot ini.*

<!-- Kalau butuh atur ukuran gambar, pakai tag HTML seperti ini: -->
<!-- <img src="{{ '/assets/img/posts/nama-slug-artikel/langkah-2.png' | relative_url }}" alt="Screenshot langkah 2" width="600"> -->

## Temuan / Hasil
Apa hasil akhirnya? Kalau ini CTF writeup, tulis flag atau solusinya di sini. Kalau catatan konsep, ringkas poin pentingnya.

![Hasil akhir]({{ '/assets/img/posts/nama-slug-artikel/hasil.png' | relative_url }})

## Kesimpulan
Rangkum pelajaran utama dari artikel ini dalam beberapa kalimat.

## Referensi
- [Judul referensi 1](https://contoh-link.com)
- [Judul referensi 2](https://contoh-link.com)
