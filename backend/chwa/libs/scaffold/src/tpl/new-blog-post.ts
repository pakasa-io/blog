import type { TemplateContext } from '@pakasa/scaffold/types';

export const NewBlogPost = (ctx: TemplateContext) => `
---
draft: true
weight: 1
title: ${ctx.title}
subtitle: ${ctx.title}
description: ${ctx.title}
date: ${ctx.date}
lastmod: ${ctx.date}
authors: []
tags: []
categories: []
series: []
series_weight: 1
featuredImage: ""
featuredImagePreview: ""
hiddenFromHomePage: false
hiddenFromSearch: false
lightgallery: true
toc:
  enable: true
  auto: false
---
`;