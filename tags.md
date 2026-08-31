---
layout: default
title: Tags
permalink: /tags/
---

<p data-id="Semua artikel dikelompokkan otomatis berdasarkan tags. Tambahkan &lt;code&gt;tags: [wazuh, siem]&lt;/code&gt; di front matter artikel baru di folder &lt;code&gt;_posts/&lt;/code&gt; untuk menambah entri di sini — halaman ini update sendiri, tidak perlu diedit manual." data-en="All articles are grouped automatically by tags. Add &lt;code&gt;tags: [wazuh, siem]&lt;/code&gt; to a new article's front matter in the &lt;code&gt;_posts/&lt;/code&gt; folder to add an entry here — this page updates itself, no manual editing needed.">Semua artikel dikelompokkan otomatis berdasarkan tags. Tambahkan <code>tags: [wazuh, siem]</code> di front matter artikel baru di folder <code>_posts/</code> untuk menambah entri di sini — halaman ini update sendiri, tidak perlu diedit manual.</p>

{% assign sorted_tags = site.tags | sort %}
<div style="margin-bottom:24px;">
  {% for tag in sorted_tags %}
    <a class="tag-pill" href="#{{ tag[0] | slugify }}">#{{ tag[0] }} ({{ tag[1].size }})</a>
  {% endfor %}
</div>

{% for tag in sorted_tags %}
  {% assign tag_name = tag[0] %}
  {% assign posts = tag[1] %}
  <h2 class="section-title" id="{{ tag_name | slugify }}">#{{ tag_name }}</h2>
  <ul class="article-list">
    {% for post in posts %}
      {% include article-card.html post=post %}
    {% endfor %}
  </ul>
{% endfor %}
