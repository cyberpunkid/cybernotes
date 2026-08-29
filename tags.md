---
layout: default
title: Tags
permalink: /tags/
---

<p>Daftar tag otomatis dari seluruh artikel. Tambahkan <code>tags: [wazuh, siem]</code> di front matter artikel baru untuk menambah entri di sini.</p>

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
