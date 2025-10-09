---
title: 'Pranov''s Library'
layout: 'layouts/blog-home.html'
pagination:
  data: collections.blog
  size: 5
permalink: 'blog{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: 'Newer posts'
paginationNextText: 'Older posts'
paginationAnchor: '#blog-list'
---
A place for me to share my thoughts on topics I’m passionate about, open for anyone to read.