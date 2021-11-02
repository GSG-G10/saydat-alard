const Joi = require('joi');

const loginValidation = Joi.object({
  email: Joi.string().email().required().messages({
    'string.empty': 'البريد الالكتروني لا يمكن أن يكون فارغ',
    'any.required': '    البريد الالكتروني مطلوب  ',
  }),
  password: Joi.string().required().min(7)
    .messages({
      'string.empty': 'كلمة المرور لا يمكن أن تكون فارغة',
      'string.min': ' على اﻷقل{#limit}  كلمة المرور  يجب أن يحتوي على ',
      'any.required': '  كلمة المرور مطلوبة ',
    }),
});

module.exports = loginValidation;
