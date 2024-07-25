const db = require('../db')

const criarPost = async (req, res) => {
  const { usuario, conteudo } = req.body;
  const [novoPost] = await db('posts').insert({usuario, conteudo}).returning('*')
  return res.status(201).json(novoPost)
}

const verPosts = async (req, res) => {
  const posts = await db('posts').select('*');
  return  res.json(posts)
}

module.exports = {
  criarPost,
  verPosts,
}