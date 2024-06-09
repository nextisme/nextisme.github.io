const fs = require('fs');
const path = require('path');

const title = process.argv[2] || 'New Blog Post';
const date = new Date().toISOString();
const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const author = 'Jay Zhou'; // 可以根据需要更改
const description = 'Your description goes here.'; // 可以根据需要更改

const content = `---
author: ${author}
pubDatetime: ${date}
title: "${title}"
slug: "${slug}"
featured: false
tags:
  - blog
description: "${description}"
---

Your content goes here.
`;

const dirPath = path.join('C:', 'Users', 'Administrator', 'Desktop', 'Astro', 'src', 'content', 'blog');
const filePath = path.join(dirPath, `${slug}.md`);

// 确保目录存在
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath, { recursive: true });
}

fs.writeFileSync(filePath, content);
console.log(`Created new post: ${filePath}`);
