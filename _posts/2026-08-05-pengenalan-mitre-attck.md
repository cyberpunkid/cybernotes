---
title: "Pengenalan MITRE ATT&CK untuk Blue Team"
tags: [framework, blue-team, threat-modeling]
excerpt: "Struktur dasar MITRE ATT&CK — tactics, techniques, sub-techniques — dan cara memetakannya ke detection rule."
---

MITRE ATT&CK adalah basis pengetahuan tentang taktik dan teknik yang digunakan penyerang,
disusun berdasarkan observasi nyata di lapangan.

## Struktur

1. **Tactics** — tujuan taktis penyerang (mis. *Initial Access*, *Persistence*, *Exfiltration*).
2. **Techniques & Sub-techniques** — cara spesifik mencapai tactic tersebut.
3. **Procedures** — implementasi nyata oleh kelompok/aktor tertentu.

## Contoh pemetaan sederhana

| Tactic | Technique | ID |
|---|---|---|
| Initial Access | Phishing | T1566 |
| Execution | Command and Scripting Interpreter | T1059 |
| Persistence | Scheduled Task/Job | T1053 |

> Tip: gunakan ATT&CK Navigator untuk memvisualisasikan cakupan deteksi (heatmap) dari rule
> yang sudah dimiliki di Wazuh/EDR, lalu identifikasi *gap* yang belum tercover.

Artikel selanjutnya akan membahas cara menerjemahkan technique di atas menjadi rule Wazuh.
