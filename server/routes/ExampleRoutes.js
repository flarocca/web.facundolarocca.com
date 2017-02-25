let Routes = require('./Routes');
let path = require('path');

class ExampleRoutes extends Routes {
    _addAllRoutes(server) {
        server.get('/examples/redux-calculator', (req, res) => {
            res.sendFile(__dirname + '/redux-calculator/index.html')
        });
    }

}

module.exports = ExampleRoutes;