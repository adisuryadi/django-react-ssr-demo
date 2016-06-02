require("babel-register")

var express = require('express')
var bodyParser = require('body-parser')

var ServerRenderer = require('./ServerRenderer').default

var server = express()
server.use(bodyParser.json())

server.post('/render', function(req, res) {
  var body = req.body
  const sr = new ServerRenderer(res);
  sr.render(body.path, body.post_data);
})

var serverInstance = server.listen(8081);
