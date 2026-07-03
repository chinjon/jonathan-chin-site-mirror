---
title: 'books'
layout: 'layouts/books.html'
pagination:
  data: collections.books
  size: 5
permalink: 'books{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: 'Newer posts'
paginationNextText: 'Older posts'
paginationAnchor: '#books-list'
---
books i have read