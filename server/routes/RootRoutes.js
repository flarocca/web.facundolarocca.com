let Routes = require('./Routes')
let path = require('path')

class RootRoutes extends Routes {
  _addAllRoutes (server) {
    server.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, '/build/index.html'))
    })
  }
}

module.exports = RootRoutes
