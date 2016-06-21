let server = require('./server')
let router = require('./route')
let requestHandler = require('./requestHandlers')

var handler = {}
handler['/'] = requestHandler.start
handler['/start'] = requestHandler.start
handler['/show'] = requestHandler.show


server.start(router.route, handler)