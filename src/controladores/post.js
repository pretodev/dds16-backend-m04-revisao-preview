const criarPost = (req, res) => {
  return res.status(201).json({})
}

const verPosts = (req, res) => {
  return  res.json([])
}

module.exports = {
  criarPost,
  verPosts,
}