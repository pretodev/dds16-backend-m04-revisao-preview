const joi = require('joi')

const schemaUsuario = joi.object({

	usuario: joi.string().email().required().messages({
		'string.email': 'O campo email precisa ter um formato válido',
		'any.required': 'O campo email é obrigatório',
		'string.empty': 'O campo email é obrigatório',
	}),
  conteudo: joi.string().min(50).max(300).required().messages({
    'string.base': 'O conteúdo deve ser um texto',
    'string.min': 'O conteúdo deve ter pelo menos 50 caracteres',
    'string.max': 'O conteúdo não pode exceder 300 caracteres',
    'any.required': 'O campo conteúdo é obrigatório',
    'string.empty': 'O campo conteúdo não pode estar vazio'
  })

})

module.exports = schemaUsuario