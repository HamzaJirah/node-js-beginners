const http = require ('http');

// create host
const hostName = '127.0.0.1';
const port = 3000;

// create server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain');
  res.end('Hello World');
})