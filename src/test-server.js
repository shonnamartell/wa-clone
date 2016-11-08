const http = require('http');

const port = process.env.PORT || 4444;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Shonna React App - \n');
});

server.listen(port, () => {
  console.log(`Server running at port ${port}.`);
});
