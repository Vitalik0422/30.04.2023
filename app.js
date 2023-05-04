const express = require('express')
const forumRoute = require('./routes/forum')
const ejs = require('ejs')
const server  = express()
const PORT = 8884;

server.set('view engine','ejs')
server.set('views', __dirname + '/views')

server.use(express.static(__dirname + '/public'))
server.use(express.json())
server.use(express.urlencoded({extended: false}))

server.use('/', forumRoute)

server.listen(PORT)