const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
   const pathname = req.url;

   if (pathname === '/' || pathname === '') {
      res.end("Hello from the server!");
   } else if (pathname === '/about') {
      res.end("This is the about page");
   } else if (pathname === '/contact') {
      res.end("This is the contact page");
   } else {
      res.writeHead(404, {
         'Content-type': 'text/html'
      });

      res.end("404 Page doesn't exist");
   }
});

server.listen(8080, "127.0.0.1", () => {
   console.log("Listening to port 8080");
});

