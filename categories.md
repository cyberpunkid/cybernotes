---
layout: default
title: Categories
permalink: /categories/
---

<p>Semua artikel dikelompokkan otomatis berdasarkan kategori. Cukup tambahkan <code>categories:</code> di front matter file <code>.md</code> baru di folder <code>_posts/</code> — halaman ini update sendiri, tidak perlu diedit manual.</p>

{% assign sorted_cats = site.categories | sort %}
{% for cat in sorted_cats %}
  {% assign cat_name = cat[0] %}
  {% assign posts = cat[1] %}
  <h2 class="section-title" id="{{ cat_name | slugify }}">// {{ cat_name }} <span style="color:var(--fg-dim);font-weight:400;">({{ posts.size }})</span></h2>
  <ul class="article-list">
    {% for post in posts %}
      {% include article-card.html post=post %}
    {% endfor %}
  </ul>
{% endfor %}
