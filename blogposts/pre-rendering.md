---
title: "Two Forms of Pre-rendering"
date: "2023-03-14"
---

Next.js has two forms of pre-rendering: **Stactic Generations** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Stactic Generations** is the pre-rendering method that generates the HTML at **build time**. The pre-rendering HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to you for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.
