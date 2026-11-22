---
title: 'blog'
layout: 'layouts/feed.html'
pagination:
  data: collections.blog
  size: 50
permalink: 'blog{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: 'Newer posts'
paginationNextText: 'Older posts'
paginationAnchor: '#post-list'
---

<img class="blog-image" src="https://imgs.jonathanchin.xyz/assets/HERO_1395_Bowie(1).jpg" alt="david bowie staring intensely at a desktop computer">

the blog