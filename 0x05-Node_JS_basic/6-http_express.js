const app = require('express')();

const port = 1245;

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});
app.listen(port);

module.exports = app;

