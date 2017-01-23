var ContactMeRoutes = require('./ContactMeRoutes');
var RootRoutes = require('./RootRoutes');

class Router {
    constructor() { }

    addAll(server) {
        new RootRoutes().add(server);
        new ContactMeRoutes().add(server);
    }
}

module.exports = Router;