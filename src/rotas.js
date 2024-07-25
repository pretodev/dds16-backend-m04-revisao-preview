const express = require("express")

const postControlador = require('./controladores/post')

const rotas = express()

rotas.post("/posts", postControlador.criarPost)
rotas.get("/posts", postControlador.verPosts)

module.exports = rotas