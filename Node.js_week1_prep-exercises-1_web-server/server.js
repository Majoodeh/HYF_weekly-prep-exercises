const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  console.log(`Request: ${req.method} ${req.url}`);

  if (req.url === '/') {
    fs.readFile('index.html', 'utf8', (err, html) => {
      if (err) {
        res.writeHead(500);
        res.end('Server error');
        return;
      }
      res.setHeader('Content-Type', 'text/html');
      res.writeHead(200);
      res.end(html);
    });
  } else if (req.url === '/index.js') {
    fs.readFile('index.js', 'utf8', (err, js) => {
      if (err) {
        res.writeHead(500);
        res.end('Server error');
        return;
      }
      res.setHeader('Content-Type', 'application/javascript');
      res.writeHead(200);
      res.end(js);
    });
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
