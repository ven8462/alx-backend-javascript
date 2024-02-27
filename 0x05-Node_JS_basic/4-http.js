const http = require('http');

const port = 1245;
const app = http.createServer();

app.on('request', (req, res) => {
  res.end('Hello Holberton School!');
});

app.listen(port);

module.exports = app;
