let express = require('express');
let ConfigureServer = require('./server/ConfigureServer');
let config = require('config');
let server = express();
let PORT = process.env.PORT || config.port;

ConfigureServer(server, express, PORT);

server.listen(PORT, (error) => {
  if (error)
    console.error(error);
  else
    console.info("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});