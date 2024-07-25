const configs = require("./configs")
const express = require("express")

const server = express()

server.listen(configs.port)