# Etsy Transaction Scraper 

This tool is ment to copy etsy transactions to the clipboard to paste into a spreadsheet. 

## Usage

[Create a new bookmark](https://www.prowebguru.com/2017/01/javascript-bookmarklet-create-javascript-bookmarklet-in-google-chrome/#.YAJyS9hKjRY), name it what you want and fill the URL of the bookmarkel with this body:
```
javascript:eval(atob('KCgpPT57dmFyIHQ9ezM1ODoodCxlKT0+eyJ1c2Ugc3RyaWN0IjtlLks9dm9pZCAwLGUuSz1mdW5jdGlvbigpe3ZhciB0PW8oKSxlPXQubWFwKChmdW5jdGlvbih0KXtyZXR1cm4gbihPYmplY3QudmFsdWVzKHIodCkpKX0pKS5qb2luKCJcbiIpO2lmKGRvY3VtZW50Lmhhc0ZvY3VzKCkpbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoZSksY29uc29sZS5sb2coIlBhc3RlZCAiK3QubGVuZ3RoKyIgcm93cyB0byBjbGlwYm9hcmQiKTtlbHNle3ZhciBpPXdpbmRvdy5vbmZvY3VzO3dpbmRvdy5vbmZvY3VzPWZ1bmN0aW9uKCl7bmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoZSksY29uc29sZS5sb2coIlBhc3RlZCAiK3QubGVuZ3RoKyIgcm93cyB0byBjbGlwYm9hcmQiKSx3aW5kb3cub25mb2N1cz1pfX1jb25zb2xlLmxvZyhlKX07dmFyIG49ZnVuY3Rpb24odCl7cmV0dXJuJyInK3QubWFwKChmdW5jdGlvbih0KXtyZXR1cm4gdC50b1N0cmluZygpLnJlcGxhY2UoLyIvZywnXFwiJyl9KSkuam9pbignIlx0IicpKyciJ30sbz1mdW5jdGlvbigpe3ZhciB0PVtdO3JldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCIjcmVjZW50LWFjdGl2aXR5LXBhZ2VkIHRib2R5IHRyIikuZm9yRWFjaCgoZnVuY3Rpb24oZSl7cmV0dXJuIHQucHVzaChlKX0pKSx0fSxyPWZ1bmN0aW9uKHQpe3ZhciBlPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gdC5nZXRFbGVtZW50c0J5VGFnTmFtZSgidGQiKS5pdGVtKGUpLmlubmVyVGV4dH19KHQpLG49ZSgwKSxvPWUoMSkscj1lKDIpLnJlcGxhY2UoL1xuL2csIiAiKSxjPWkoZSgzKSksdT1pKGUoNCkpLHM9aShlKDYpKSxsPSJkZXBvc2l0Ij09PW8udG9Mb2NhbGVMb3dlckNhc2UoKT9hKHIpOjA7cmV0dXJue2RhdGU6bix0eXBlOm8sZGVzY3JpcHRpb246cixhbW91bnQ6YyxmZWU6dSxkZXBvc2l0OmwsYmFsYW5jZTpzfX0saT1mdW5jdGlvbih0KXtyZXR1cm4iIj09PXR8fCItLSI9PT10LnRyaW0oKT8wOnBhcnNlRmxvYXQodC5yZXBsYWNlKCIkIiwiIikpfSxhPWZ1bmN0aW9uKHQpe3ZhciBlPXQubWF0Y2goL1wkXGQrXC5cZHsyfS8pO3JldHVybiB2b2lkIDA9PT1lPzA6aShlWzBdKX19fSxlPXt9OyhmdW5jdGlvbiBuKG8pe2lmKGVbb10pcmV0dXJuIGVbb10uZXhwb3J0czt2YXIgcj1lW29dPXtleHBvcnRzOnt9fTtyZXR1cm4gdFtvXShyLHIuZXhwb3J0cyxuKSxyLmV4cG9ydHN9KSgzNTgpLksoKX0pKCk7'));
```
Then, navigate to [your etsy store account payments page](https://www.etsy.com/your/account/payments/monthly-statement?month=1&year=2021) and click the bookmark that you created. Open your spreadsheet program (google sheets/excel) and paste a complete table of that page worth of transactions. You can repeat this process to create a spreadsheet of transactions for any date range you choose.

It only takes the transactions currently seen on the page, which is at most 30 records. You may need to navigate to each page on a month to capture all transactions for a given month.


## Development

Clone this repo, `npm i` to install packages, and `npm run build` to rebuild the typescript into a new `scrape.js`. Most of the logic can be found in `functions.ts` but, at time of writing, this is a small scripting project with few dependancies.
