let path = require('path')
let bodyParser = require('body-parser')
let Router = require('./routes/Router')
let router = new Router()

let ConfigureServer = (server, express, PORT) => {
  server.use(bodyParser.urlencoded({ extended: true }))
  server.use(bodyParser.json())
  server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:' + PORT)
    res.setHeader('Access-Control-Allow-Methods', 'POST')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    next()
  })
  server.use('/', express.static(path.join(__dirname, '../build')))
  server.use('/examples/redux-calculator', express.static(path.join(__dirname, '../examples/redux-calculator')))
  server.use('/examples/react-redux-websocket', express.static(path.join(__dirname, '../examples/react-redux-websocket')))

  router.addAll(server)
}

module.exports = ConfigureServer
