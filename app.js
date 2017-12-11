const express = require('express');

const app = express();

app.get('/', function(req, res) {
  res.end();
});

const server = app.listen(3000, () => {
  console.log('Listening on port %s...', server.address().port);
});

module.exports = app;
