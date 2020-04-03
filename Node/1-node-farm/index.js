const fs = require('fs');
const http = require('http');
const url = require('url');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObject = JSON.parse(data);

const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');


// server
const server = http.createServer((req, res) => {
   const pathname = req.url;

   // overview page
   if (pathname === '' || pathname === '/') {
      res.writeHead(200, {
         'Content-type': 'text/html'
      });

      res.end(tempOverview);
   }


   // product page
   else if (pathname === '/product') {
      res.end('This is the product page');
   }


   // api
   else if (pathname === '/api') {
      res.writeHead(200, {
         'Content-type': 'application/json'
      });

      res.end(data);
   }
});


//init
server.listen(8080, '127.0.0.1', () => {
   console.log('Listening to port 8080');
});