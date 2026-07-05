---
title: 'blog'
layout: 'layouts/feed.html'
pagination:
  data: collections.blog
  size: 5
permalink: 'blog{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: 'Newer posts'
paginationNextText: 'Older posts'
paginationAnchor: '#post-list'
---

<img class="blog-image" src="https://file.garden/akFLbgUm9G3LrWhE/HERO_1395_Bowie.jpg" alt="david bowie staring intensely at a desktop computer">

the blog