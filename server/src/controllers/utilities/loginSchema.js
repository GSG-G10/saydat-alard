const Joi = require('joi');

const loginValidation = Joi.object({
  email: Joi.string().email().required().messages({
    'string.empty': 'البريد الالكتروني لا يمكن أن يكون فارغ',
    'any.required': '    البريد الالكتروني مطلوب  ',
  }),
  password: Joi.string().required().min(7)
    .regex(/^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,30}$/)
    .messages({
      'string.pattern.base': '  يجب أن تحتوي كلمة المرور على الاقل على حرف واحد كبير و حرف واحد صغير ورمز و رقم  ',
      'string.empty': 'كلمة المرور لا يمكن أن تكون فارغة',
      'string.min': ' على اﻷقل{#limit}  كلمة المرور  يجب أن يحتوي على ',
      'any.required': '  كلمة المرور مطلوبة ',
    }),
});

module.exports = loginValidation;
