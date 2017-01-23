var path = require('path');
var bodyParser = require('body-parser');
var Router = require('./routes/Router');
var router = new Router();

var ConfigureServer = (server, express, PORT) => {
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(bodyParser.json());
    server.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:' + PORT);
        res.setHeader('Access-Control-Allow-Methods', 'POST');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        next();
    });
    server.use(express.static(path.join(__dirname, '/build')));

    router.addAll(server);
}

module.exports = ConfigureServer;