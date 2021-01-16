const fs = require("fs");

const scrape = fs.readFileSync('./scrape.js', 'utf8');
console.log(`javascript:eval(atob('${Buffer.from(scrape).toString('base64')}'));`);