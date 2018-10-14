const http = require ('http');
const fs = require ('fs');

fs.readFile('index.html', (err, html) => {
  if(err){
    throw err;
  }
})

// create host
const hostName = '127.0.0.1';
const port = 3000;

// create server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain');
  res.end('Hello World');
})

server.listen(port, hostName, ()=>{
  console.log('server started on port ' + port)
})