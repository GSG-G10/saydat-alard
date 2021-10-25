const Joi = require('joi');

const schema = Joi.object({
  name: Joi.string().min(4).required(),
  password: Joi.string().min(7).required(),
  confirmPassword: Joi.ref('password'),
  email: Joi.string().email().required(),
  originalCity: Joi.string().required(),
}).options({ abortEarly: true });

module.exports = schema;
