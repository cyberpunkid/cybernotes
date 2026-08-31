# cybernotes
cyberpunk content repository

## Menulis artikel baru

1. Copy `articles/template-artikel.md` ke folder `_posts/`.
2. Rename dengan format `YYYY-MM-DD-judul-artikel.md` (tanggal di nama file menentukan urutan — terbaru otomatis di atas).
3. Isi front matter (`title`, `tags`, `excerpt`) dan hapus blok komentar instruksi di bagian atas file.
4. Kalau ada gambar/screenshot, taruh di `assets/img/posts/<nama-slug-artikel>/` dan panggil pakai format `{{ '/assets/img/posts/...' | relative_url }}` seperti dicontohkan di template.
5. Commit & push — tags dan urutan artikel di homepage/`/tags/` terbentuk otomatis dari isian `tags:`, tidak perlu edit file lain.

