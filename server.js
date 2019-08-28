var express = require('./config/express');
var app = express();

var server = app.listen(app.get('port'),() => {
  console.log('Express server listening on port ', server.address().port)
});

module.exports = app;
