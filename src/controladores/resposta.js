const db = require('../db');
const mail = require('../mail');

const criarResposta = async (req, res) => {
  const { idPost, resposta } = req.body;
  const [novaResposta] = await db('respostas').insert({ 
    "id_pergunta": idPost, 
    resposta 
  }).returning('*');

  const [pergunta] = await db('posts').where({ id: idPost });
  const { usuario} = pergunta;

  const info = await mail.sendMail({
    from: '"Test Sender" <sender@example.com>',
    to: usuario,
    subject: "Nova resposta",
    text: `Olá! Sua pergunta recebeu uma nova resposta: ${resposta}`,
    html: `<p>Olá!
    Sua pergunta recebeu uma nova resposta: ${resposta}</p>`
  });

  console.log("mensagem enviada: %s", info.messageId);

  return res.status(201).json(novaResposta);
}

module.exports = {
  criarResposta
}