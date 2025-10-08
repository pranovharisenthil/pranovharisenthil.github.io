---
title: 'Tag Archive'
layout: 'layouts/blog-home.html'
pagination:
  data: collections
  size: 1
  alias: tag
  filter: ['all', 'nav', 'blog', 'work', 'featuredWork', 'people', 'rss', 'about-me']
permalink: '/tag/{{ tag | slugify }}/'
---