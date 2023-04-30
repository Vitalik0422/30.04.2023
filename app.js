const express = require('express')
const ejs = require('ejs')
const server  = express()
const PORT = 8880;

const forumRoute = require('./routes/forumRouter')


server.set('view engine','ejs')
server.set('views', __dirname + '/views')
server.use(express.static(__dirname + '/public'))


server.use(express.json())
server.use(express.urlencoded({extended: false}))

server.use('/', forumRoute)

server.listen(PORT)