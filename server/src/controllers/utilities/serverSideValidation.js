const Joi = require('joi');

const schema = Joi.object({
  name: Joi.string().min(4).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(7).required(),
  confirmPassword: Joi.ref('password'),
  originalCity: Joi.string().required(),
});

module.exports = schema;
