const http = require ('http');
const fs = require ('fs');
// create host
const hostName = '127.0.0.1';
const port = 3000;

fs.readFile('index.html', (err, html) => {
  if(err){
    throw err;
  }

    // create server
  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.write(html);
    res.end();
  })

  server.listen(port, hostName, ()=>{
    console.log('server started on port ' + port)
  })
})


