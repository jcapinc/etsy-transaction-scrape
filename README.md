# Etsy Transaction Scraper

This scraper is built to scrape transaction records from etsy into a csv format that can be pasted directly into a spreadsheet program. This is meant to help catch discrepencies in etsy's transaction calculation.

## Usage

This script copies the transaction list into a csv string that gets dumped into the user's clipboard. The easiest way to use this script is with a javascript bookmark.

As a quick shortcut, [Drag this link to your bookmark toolbar]((()=>{var t={358:(t,e)=>{"use strict";e.K=void 0,e.K=function(){var t=o(),e=t.map((function(t){return n(Object.values(r(t)))})).join("\n");if(document.hasFocus())navigator.clipboard.writeText(e),console.log("Pasted "+t.length+" rows to clipboard");else{var i=window.onfocus;window.onfocus=function(){navigator.clipboard.writeText(e),console.log("Pasted "+t.length+" rows to clipboard"),window.onfocus=i}}console.log(e)};var n=function(t){return'"'+t.map((function(t){return t.toString().replace(/"/g,'\\"')})).join('"\t"')+'"'},o=function(){var t=[];return document.querySelectorAll("#recent-activity-paged tbody tr").forEach((function(e){return t.push(e)})),t},r=function(t){var e=function(t){return function(e){return t.getElementsByTagName("td").item(e).innerText}}(t),n=e(0),o=e(1),r=e(2).replace(/\n/g," "),c=i(e(3)),u=i(e(4)),s=i(e(6)),l="deposit"===o.toLocaleLowerCase()?a(r):0;return{date:n,type:o,description:r,amount:c,fee:u,deposit:l,balance:s}},i=function(t){return""===t||"--"===t.trim()?0:parseFloat(t.replace("$",""))},a=function(t){var e=t.match(/\$\d+\.\d{2}/);return void 0===e?0:i(e[0])}}},e={};(function n(o){if(e[o])return e[o].exports;var r=e[o]={exports:{}};return t[o](r,r.exports,n),r.exports})(358).K()})();). Then, navigate to [your etsy store account payments page](https://www.etsy.com/your/account/payments/monthly-statement?month=1&year=2021) and click the bookmark that you created. Open your spreadsheet program (google sheets/excel) and paste a complete table of that page worth of transactions.

## Development

Clone this repo, `npm i` to install packages, and `npm run build` to rebuild the typescript into a new `scrape.js`. Most of the logic can be found in `functions.ts` but, at time of writing, this is a small scripting project with few dependancies.


