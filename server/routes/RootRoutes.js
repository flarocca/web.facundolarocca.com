var Routes = require('./Routes');

class RootRoutes extends Routes {
    constructor() {
        super();
    }

    _addAllRoutes(server) {
        server.get('/', (req, res) => {
            res.sendFile(__dirname + '/build/index.html')
        });
    }
}

module.exports = RootRoutes;