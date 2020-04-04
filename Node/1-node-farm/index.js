const fs = require('fs');
const http = require('http');
const url = require('url');
const replaceTemplate = require('./modules/replaceTemplate');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObject = JSON.parse(data);

const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');


// server
const server = http.createServer((req, res) => {
   const { query, pathname } = url.parse(req.url, true);

   // overview page
   if (pathname === '' || pathname === '/') {
      res.writeHead(200, {
         'Content-type': 'text/html'
      });

      const cardsHTML = dataObject.map(el => replaceTemplate(tempCard, el)).join('');

      const output = tempOverview.replace('{%product_cards%}', cardsHTML);

      res.end(output);
   }


   // product page
   else if (pathname === '/product') {
      res.writeHead(200, {
         'Content-type': 'text/html'
      });

      const product = dataObject[query.id];

      const output = replaceTemplate(tempProduct, product);

      res.end(output);
   }


   // api
   else if (pathname === '/api') {
      res.writeHead(200, {
         'Content-type': 'application/json'
      });

      res.end(data);
   }

   // 404
   else {
      res.writeHead(404, {
         'Content-type': 'text/html'
      });

      res.end("Page Not Found!!");
   }
});


//init
server.listen(8080, '127.0.0.1', () => {
   console.log('Listening to port 8080');
});