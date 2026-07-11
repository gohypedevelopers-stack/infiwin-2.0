const { galleryData } = require('./src/data/galleryData.js'); // Wait, we can't require TS directly without ts-node.
// Let's just mock it
const fs = require('fs');
const content = fs.readFileSync('src/data/galleryData.ts', 'utf8');

const titles = ['Balcony', 'Int. Partition', 'Commercial', 'Exterior', 'Terrace', 'Farm House', 'Office Space', 'Garden'];
titles.forEach(t => {
  const id = t.toLowerCase().replace(/[\s&.]+/g, '-');
  const exists = content.includes('"' + id + '": {');
  console.log(t, '->', id, 'Exists?', exists);
});
