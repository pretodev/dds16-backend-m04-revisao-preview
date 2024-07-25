const express = require("express")

const postControlador = require('./controladores/post')
const respostaControlador = require('./controladores/resposta')

// intermediarios
const validarCorpoRequisicao = require('./intermediarios/validaCorpoRequisicao')

// validacoes
const validaPost = require('./validacoes/post')

const rotas = express()

rotas.post("/posts", validarCorpoRequisicao(validaPost), postControlador.criarPost)
rotas.get("/posts", postControlador.verPosts)

rotas.post("/respostas", respostaControlador.criarResposta)

module.exports = rotas