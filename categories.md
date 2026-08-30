---
layout: default
title: Categories
permalink: /categories/
---

<p data-id="Semua artikel dikelompokkan otomatis berdasarkan kategori. Cukup tambahkan &lt;code&gt;categories:&lt;/code&gt; di front matter file &lt;code&gt;.md&lt;/code&gt; baru di folder &lt;code&gt;_posts/&lt;/code&gt; — halaman ini update sendiri, tidak perlu diedit manual." data-en="All articles are grouped automatically by category. Just add &lt;code&gt;categories:&lt;/code&gt; to the front matter of a new &lt;code&gt;.md&lt;/code&gt; file in the &lt;code&gt;_posts/&lt;/code&gt; folder — this page updates itself, no manual editing needed.">Semua artikel dikelompokkan otomatis berdasarkan kategori. Cukup tambahkan <code>categories:</code> di front matter file <code>.md</code> baru di folder <code>_posts/</code> — halaman ini update sendiri, tidak perlu diedit manual.</p>

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
