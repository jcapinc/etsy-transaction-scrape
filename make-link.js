const fs = require("fs");

const scrape = fs.readFileSync('./scrape.js', 'utf8');
console.log(`javascript:${scrape.replace(/\(/g,'\\(').replace(/\)/g,'\\)')}`);