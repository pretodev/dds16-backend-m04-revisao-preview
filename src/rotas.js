const express = require("express")

const postControlador = require('./controladores/post')

// intermediarios
const validarCorpoRequisicao = require('./intermediarios/validaCorpoRequisicao')

// validacoes
const validaPost = require('./validacoes/post')

const rotas = express()

rotas.post("/posts", validarCorpoRequisicao(validaPost), postControlador.criarPost)
rotas.get("/posts", postControlador.verPosts)

module.exports = rotas