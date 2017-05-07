let Routes = require('./Routes')
let path = require('path')

class ExampleRoutes extends Routes {
  _addAllRoutes (server) {
    server.get('/examples/redux-calculator', (req, res) => {
      res.sendFile(path.join(__dirname, '../../examples/redux-calculator/index.html'))
    })

    server.get('/examples/react-redux-websocket', (req, res) => {
      res.sendFile(path.join(__dirname, '../../examples/react-redux-websocket/index.html'))
    })
  }

}

module.exports = ExampleRoutes
