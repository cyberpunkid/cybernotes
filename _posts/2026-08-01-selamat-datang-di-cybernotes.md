---
title: "Selamat Datang di CyberNotes"
tags: [meta, roadmap]
excerpt: "Kenapa catatan ini dibuat, apa yang akan dibahas, dan bagaimana struktur artikelnya ke depan."
---

Repo ini adalah tempat saya menulis catatan teknis seputar cyber security — mulai dari
**Threat Intelligence**, **Detection Engineering** (EDR, SIEM/Wazuh), **Linux hardening**,
pemetaan **MITRE ATT&CK**, sampai eksperimen seputar **AI Security**.

## Kenapa Jekyll?

- Tidak butuh database atau backend — cukup menulis file `.md` di folder `_posts/`.
- Kategori, tag, tanggal, dan permalink SEO-friendly terbentuk otomatis dari front matter.
- Build langsung oleh GitHub Pages, jadi hosting gratis dan ringan.
- Tetap bisa disatukan secara visual dengan desain cyberpunkID (dark mode, terminal UI, glitch effect).

## Format artikel baru

Setiap artikel baru cukup dibuat sebagai file di `_posts/` dengan format nama:

```
YYYY-MM-DD-judul-artikel.md
```

dan front matter minimal seperti ini:

```yaml
---
title: "Judul Artikel"
tags: [siem, detection-rule]
excerpt: "Ringkasan singkat 1-2 kalimat."
---
```

Selebihnya tinggal tulis kontennya dalam Markdown biasa — heading, code block, tabel, dan
blockquote semua sudah punya styling sendiri.
