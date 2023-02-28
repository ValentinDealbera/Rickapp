const express = require('express')
const server = express()
const PORT = 3001
const router = require('./routes/index')
const cors = require('cors')
const favsRouter = require('./routes/favsRouter')

server.use(express.json())
server.use(cors())
server.use('/rickandmorty', router)
server.use('/favs', favsRouter)

server.listen(PORT, console.log('listening on port 3001'))