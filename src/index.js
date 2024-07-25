const configs = require("./configs")
const rotas = require("./rotas")
const express = require("express")

const server = express()

server.use(express.json())
server.use(rotas)

server.listen(configs.port)