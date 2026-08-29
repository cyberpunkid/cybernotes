---
title: "Dasar-Dasar Wazuh sebagai SIEM/XDR"
categories: ["Wazuh"]
tags: [siem, xdr, open-source]
excerpt: "Komponen utama Wazuh (manager, indexer, agent) dan langkah awal membuat custom detection rule."
---

Wazuh adalah platform open-source yang menggabungkan fungsi SIEM dan XDR: log analysis,
file integrity monitoring, vulnerability detection, hingga incident response.

## Komponen utama

- **Wazuh Manager** — menerima dan menganalisis data dari agent, menjalankan rule.
- **Wazuh Indexer** — menyimpan data (berbasis OpenSearch).
- **Wazuh Dashboard** — visualisasi dan pencarian.
- **Wazuh Agent** — berjalan di endpoint (Linux/Windows) mengirim log & telemetry.

## Contoh custom rule sederhana

```xml
<rule id="100010" level="10">
  <if_sid>5716</if_sid>
  <match>Failed password</match>
  <description>Multiple failed SSH login attempts</description>
  <group>authentication_failed,pci_dss_10.2.4,mitre_t1110</group>
</rule>
```

Rule di atas menandai percobaan login SSH yang gagal berulang kali — langkah awal sebelum
membangun correlation rule untuk mendeteksi brute force secara lebih presisi.
