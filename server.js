var express = require('express');
var ConfigureServer = require('./server/ConfigureServer');
var config = require('config');
var server = express();
var PORT = process.env.PORT || config.port;

ConfigureServer(server, express, PORT);

server.listen(PORT, (error) => {
  if (error)
    console.error(error);
  else
    console.info("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});