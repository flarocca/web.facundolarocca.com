let ContactMeRoutes = require('./ContactMeRoutes');
let RootRoutes = require('./RootRoutes');
let ExampleRoutes = require('./ExampleRoutes');

class Router {
    constructor() { }

    addAll(server) {
        new RootRoutes().add(server);
        new ContactMeRoutes().add(server);
        new ExampleRoutes().add(server);
    }
}

module.exports = Router;